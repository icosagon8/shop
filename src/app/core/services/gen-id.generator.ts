export function genID(): () => number {
  let id = 1;

  return function () {
    return id++;
  };
}
// есть такая конструкция как генератор - function* gen() {...}

