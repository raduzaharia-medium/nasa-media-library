export default async function getMediaItems(query) {
  const request = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image&page_size=10`);
  const result = await request.json();

  return result;
}
