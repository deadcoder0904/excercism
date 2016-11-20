const formatDigits = (n) => {
  const s = "0" + n;
  return s.substr(s.length - 2);
}

const toString = (h, m) => `${formatDigits(h)}:${formatDigits(m)}`;

const clock = (h, m = 0) => {
  const mOut = (60 + (m % 60)) % 60;
  const hOut = (24 + (h + Math.floor(m / 60)) % 24) % 24;

  return {
      toString: () => toString(hOut, mOut),
      plus: (additionalMin) => clock(h, m + additionalMin),
      minus: (fewerMin) => clock(h, m - fewerMin),
      equals: (comp) => comp.toString() === toString(hOut, mOut)
  };
};

export default clock;