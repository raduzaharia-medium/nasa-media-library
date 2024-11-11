export default async function getMediaItems(query, startYear, endYear, page) {
  let url = `https://images-api.nasa.gov/search?q=${query}&media_type=image&page_size=10`;

  if (startYear) url += `&year_start=${startYear}`;
  if (endYear) url += `&year_end=${endYear}`;
  if (page) url += `&page=${page}`;

  const request = await fetch(url);
  const result = await request.json();

  return result;
}
