function typedKeys(o) {
  return Object.keys(o);
}

const serializeQueryObject = (obj) => {
  const str = [];

  typedKeys(obj).forEach((p) => {
    if (
      obj[p] &&
      obj[p] !== 'all' &&
      obj[p] !== 'semua' &&
      obj[p] !== 'Semua'
    ) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  });
  return str.join('&');
};

export default serializeQueryObject;
