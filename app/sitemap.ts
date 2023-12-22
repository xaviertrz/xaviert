export default async function sitemap() {
  let routes = ["", "/experience", "/work", "/education"].map((route) => ({
    url: `https://xaviert.me${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
