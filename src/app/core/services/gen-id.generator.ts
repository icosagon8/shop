export function genID(): () => number {
  let id = 1;

  return function () {
    return id++;
  };
}
