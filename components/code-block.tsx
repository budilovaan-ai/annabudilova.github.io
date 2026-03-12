"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language: "sql" | "python"
}

const languageLabels = {
  sql: "SQL",
  python: "Python"
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-lg overflow-hidden border border-border bg-[#0d1117]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-border">
        <span className="text-xs font-medium text-muted-foreground">
          {languageLabels[language]}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              Zkopírováno
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
              Kopírovat
            </>
          )}
        </Button>
      </div>
      
      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          <code className={`language-${language}`}>
            {language === "sql" ? <SqlHighlight code={code} /> : <PythonHighlight code={code} />}
          </code>
        </pre>
      </div>
    </div>
  )
}

function SqlHighlight({ code }: { code: string }) {
  const keywords = ['UPDATE', 'SET', 'CASE', 'WHEN', 'THEN', 'END', 'WHERE', 'LIKE', 'OR', 'IN', 'IS', 'NULL', 'AND']
  
  const lines = code.split('\n')
  
  return (
    <>
      {lines.map((line, lineIndex) => {
        let result: React.ReactNode[] = []
        let remaining = line
        let keyIndex = 0
        
        // Process keywords
        keywords.forEach(keyword => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
          const parts = remaining.split(regex)
          const matches = remaining.match(regex)
          
          if (matches && parts.length > 1) {
            const newResult: React.ReactNode[] = []
            parts.forEach((part, i) => {
              if (i > 0 && matches[i - 1]) {
                newResult.push(
                  <span key={`kw-${lineIndex}-${keyword}-${i}`} className="text-[#ff7b72]">
                    {matches[i - 1]}
                  </span>
                )
              }
              newResult.push(part)
            })
            remaining = newResult.join('')
          }
        })
        
        // Highlight strings
        const stringRegex = /'([^']*)'/g
        const parts = line.split(stringRegex)
        
        result = parts.map((part, i) => {
          if (i % 2 === 1) {
            return <span key={`str-${lineIndex}-${i}`} className="text-[#a5d6ff]">{`'${part}'`}</span>
          }
          
          // Highlight keywords in non-string parts
          let highlighted = part
          keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'gi')
            if (regex.test(highlighted)) {
              const splits = highlighted.split(regex)
              return splits.map((s, j) => {
                if (keywords.some(k => k.toLowerCase() === s.toLowerCase())) {
                  return <span key={`kw-${lineIndex}-${i}-${j}`} className="text-[#ff7b72]">{s}</span>
                }
                return s
              })
            }
          })
          
          // Simple keyword replacement for display
          let elements: React.ReactNode[] = []
          let current = part
          
          keywords.forEach(keyword => {
            const regex = new RegExp(`(\\b${keyword}\\b)`, 'gi')
            if (regex.test(current)) {
              const splits = current.split(regex)
              elements = splits.map((s, j) => {
                if (s.toUpperCase() === keyword) {
                  return <span key={`k-${lineIndex}-${i}-${j}-${keyword}`} className="text-[#ff7b72]">{s}</span>
                }
                return <span key={`t-${lineIndex}-${i}-${j}`} className="text-[#c9d1d9]">{s}</span>
              })
            }
          })
          
          if (elements.length > 0) return elements
          return <span key={`p-${lineIndex}-${i}`} className="text-[#c9d1d9]">{part}</span>
        })
        
        return (
          <span key={lineIndex}>
            {result}
            {lineIndex < lines.length - 1 && '\n'}
          </span>
        )
      })}
    </>
  )
}

function PythonHighlight({ code }: { code: string }) {
  const keywords = ['from', 'import', 'def', 'return', 'as', 'if', 'else', 'elif', 'for', 'in', 'while', 'class', 'try', 'except', 'with', 'True', 'False', 'None']
  const builtins = ['print']
  
  const lines = code.split('\n')
  
  return (
    <>
      {lines.map((line, lineIndex) => {
        // Check if line is a comment
        const commentIndex = line.indexOf('#')
        let codePart = commentIndex >= 0 ? line.slice(0, commentIndex) : line
        let commentPart = commentIndex >= 0 ? line.slice(commentIndex) : ''
        
        // Tokenize and highlight
        const tokens: React.ReactNode[] = []
        let i = 0
        
        while (i < codePart.length) {
          // Check for strings
          if (codePart[i] === '"' || codePart[i] === "'") {
            const quote = codePart[i]
            let end = i + 1
            while (end < codePart.length && codePart[end] !== quote) {
              if (codePart[end] === '\\') end++
              end++
            }
            tokens.push(
              <span key={`str-${lineIndex}-${i}`} className="text-[#a5d6ff]">
                {codePart.slice(i, end + 1)}
              </span>
            )
            i = end + 1
            continue
          }
          
          // Check for keywords/identifiers
          if (/[a-zA-Z_]/.test(codePart[i])) {
            let end = i
            while (end < codePart.length && /[a-zA-Z0-9_]/.test(codePart[end])) {
              end++
            }
            const word = codePart.slice(i, end)
            
            if (keywords.includes(word)) {
              tokens.push(
                <span key={`kw-${lineIndex}-${i}`} className="text-[#ff7b72]">
                  {word}
                </span>
              )
            } else if (builtins.includes(word)) {
              tokens.push(
                <span key={`bi-${lineIndex}-${i}`} className="text-[#d2a8ff]">
                  {word}
                </span>
              )
            } else if (codePart[end] === '(') {
              tokens.push(
                <span key={`fn-${lineIndex}-${i}`} className="text-[#d2a8ff]">
                  {word}
                </span>
              )
            } else {
              tokens.push(
                <span key={`id-${lineIndex}-${i}`} className="text-[#c9d1d9]">
                  {word}
                </span>
              )
            }
            i = end
            continue
          }
          
          // Check for numbers
          if (/[0-9]/.test(codePart[i])) {
            let end = i
            while (end < codePart.length && /[0-9.]/.test(codePart[end])) {
              end++
            }
            tokens.push(
              <span key={`num-${lineIndex}-${i}`} className="text-[#79c0ff]">
                {codePart.slice(i, end)}
              </span>
            )
            i = end
            continue
          }
          
          // Other characters
          tokens.push(
            <span key={`ch-${lineIndex}-${i}`} className="text-[#c9d1d9]">
              {codePart[i]}
            </span>
          )
          i++
        }
        
        return (
          <span key={lineIndex}>
            {tokens}
            {commentPart && (
              <span className="text-[#8b949e]">{commentPart}</span>
            )}
            {lineIndex < lines.length - 1 && '\n'}
          </span>
        )
      })}
    </>
  )
}
