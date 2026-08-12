interface AddFn {
  (a: number, b: number): number;
}

const add1: AddFn = (a, b) => {
  return a + b;
}
add1(1, 2)

type AddType = (a: number, b: number) => number;

const add2: AddType = (a, b) => {
  return a + b;
}
add2(1, 2)