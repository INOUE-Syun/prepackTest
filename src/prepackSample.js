// Hello World
(() => {
  const hello = () => 'hello';
  const world = () => 'world';
  global.s = hello() + ' ' + world();
})();

// Fibonacci
(() => {
  const fibonacci = (x) => {
    return x <= 1 ? x : fibonacci(x - 1) + fibonacci(x - 2);
  };
  global.x = fibonacci(23);
})();

// Environment Interactions and Branching
(() => {
  const fib = (x) => x <= 1 ? x : fib(x - 1) + fib(x - 2);
  let x = Date.now();
  if (x === 0) x = fib(10);
  global.result = x;
})();
