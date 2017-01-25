var _fakeLRUcount = 0;
export const fakeRedisCache = {
  _cache: {},
  get: (key) => {
    let cache = fakeRedisCache._cache[key];
    _fakeLRUcount++;
    if (_fakeLRUcount >= 10) {
      fakeRedisCache.clear();
      _fakeLRUcount = 0;
    }
    return cache;
  },
  set: (key, data) => fakeRedisCache._cache[key] = data,
  clear: () => fakeRedisCache._cache = {}
};
