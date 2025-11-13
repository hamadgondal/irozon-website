import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = "https://irozon.se/";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/news", changefreq: "weekly", priority: 0.8 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream(resolve(__dirname, "../public/sitemap.xml"));

  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generated successfully at public/sitemap.xml");
};

generateSitemap().catch(console.error);
