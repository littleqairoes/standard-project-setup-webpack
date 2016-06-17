export default (c, s) => {
  return c && typeof c === 'string' ?
    c.trim().split(' ').map((item) => (`${item}-${s}`)) : [];
};
