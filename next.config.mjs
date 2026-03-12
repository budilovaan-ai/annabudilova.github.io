/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Tohle říká Next.js, aby vygeneroval statické soubory
  images: {
    unoptimized: true,   // Nutnost pro GitHub Pages, které neumí automatickou optimalizaci obrázků
  },
  // Pokud tvůj web nepoběží na hlavní doméně (tzn. nepoběží na tvoje-jmeno.github.io, 
  // ale třeba na tvoje-jmeno.github.io/portfolio), přidej sem i řádek níže:
  // basePath: '/portfolio', 
};

export default nextConfig;
