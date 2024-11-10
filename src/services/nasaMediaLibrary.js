export default async function getMediaItems(query) {
  const request = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
  const result = await request.json();

  return result;
}
