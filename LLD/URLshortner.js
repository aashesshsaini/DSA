const map = new Map();

const generateCode = function () {
  return Math.random().toString(36).substring(2, 8);
};

const baseUrl = "https://short.ly/";

const urlShortner = function (longUrl) {
  const shortUrl = generateCode();
  map.set(shortUrl, longUrl);
  return baseUrl + shortUrl;
};

const getOriginalUrl = function (shortUrl) {
  return map.get(shortUrl);
};
