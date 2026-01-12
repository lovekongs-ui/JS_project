function createMemoizedFibonacci() {
    const cache = {};

    return function fib(n) {
        if (n <= 1) {
            return n;
        }
        if (cache[n]) {
            return cache[n];
        }
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
  //TODO: 구현하세요
}

// 테스트
const fib = createMemoizedFibonacci();
console.log(fib(10));  // 55
console.log(fib(50));  // 12586269025 (빠르게 계산되어야 함)
console.log(fib(10));  // 55 (캐시에서 가져옴)