const bat = ["F", "F", "F", "F", "F", "D", "C", "B", "A", "A*"];
const grade = (a) => {
  a = a / 10;
  return bat[Math.trunc(a) - 1];
};
console.log(grade(69));
