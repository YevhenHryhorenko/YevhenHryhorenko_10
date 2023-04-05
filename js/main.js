function main(a, b, c) {
  const res = sum(a, b)
  if (typeof c == 'function' && c) {
    return c(res)
  }

  return res
}

function sum(a = 2, b = 3) {
  return a + b;
}

console.log(main(4, 4, function (res) {
  return res * res
}));

console.log(main(4, 4, 4));

console.log(main(4, 4));

console.log(main(5, 2, null));
console.log(main(5, 1, undefined));
console.log(main(5, 7, 'string'));

