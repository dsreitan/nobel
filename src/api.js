/**
 * @typedef {Object} NobelPrize
 * @property {string} category - ie. "chemistry"
 * @property {Laureate[]} laureates - winners
 * @property {string} year - ie. "2023"
 */

/**
 * @typedef {Object} Laureate
 * @property {string} id
 * @property {string} firstname
 * @property {string} surname
 * @property {string} motivation - quoted, ie. "\"for science!\""
 * @property {string} share - ie. "3"
 */

/** @returns {Promise<NobelPrize[]>} */
export const getNobelPrizes = async () => {
  const request = "https://api.nobelprize.org/v1/prize.json";

  const response = await cacheResponse(request);

  if (response.ok) {
    const json = await response.json();
    return json.prizes;
  }

  console.error("api request failed", response.status, response.statusText);

  return [];
};

const cacheResponse = async (request) => {
  const match = await caches.match(request);
  if (match) return match;

  const response = await fetch(request);

  if (response.ok) {
    const cache = await caches.open("api-cache");
    cache.put(request, response.clone());
  }

  return response;
};
