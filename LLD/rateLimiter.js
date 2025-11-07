const rateLimiter = function (userId) {
  const map = new Map();
  const now = Date.now();
  const windowMs = 60000;
  const limit = 5;

  if (!map.has(userId)) {
    map.set(userId, []);
  }

  const timeStamps = map.get(userId).filter((time) => now - time < windowMs);
  if (timeStamps.length >= limit) {
    return false;
  }
  timeStamps.push(now);
  console.log(timeStamps);
  map.set(userId, timeStamps);
  return true;
};

console.log(rateLimiter(1));
