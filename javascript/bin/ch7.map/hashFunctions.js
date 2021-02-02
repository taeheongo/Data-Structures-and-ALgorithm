const loseloseHashCode = (key) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % 37;
};

const djb2HashCode = (key) => {
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash += hash * 31 + key.charCodeAt(i);
  }

  return 1013 * hash;
};

module.exports = {
  loseloseHashCode,
  djb2HashCode,
};
