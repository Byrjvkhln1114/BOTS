const comp_sq_form = (a, b, c) => {
  c = -((b / a / 2) ** 2) * a + Number(c);
  if (Math.abs(c) != c) {
    return `${a}(x+${b / 2 / a})²${c}`;
  } else {
    return `${a}(x+${b / 2 / a})²+${c}`;
  }
};
console.log(comp_sq_form(process.argv[2], process.argv[3], process.argv[4]));
