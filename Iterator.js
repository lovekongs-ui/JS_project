async function* infiniteRandomNumberGenerator() {
    let i = 0
    while (true) {
        i++;
        if (i > 500) {
            return;
        }
        // Math.random()은 0 이상 1 미만의 난수를 반환합니다.
        yield Math.random(); 
    }
}

// todo: 다음 비동기 iterator를 순회하는 함수를 작성하세요.

async function iterateRandomNumbers() {
    const generator = infiniteRandomNumberGenerator();
    for await (const num of generator) {
        console.log(num);
    }
}

iterateRandomNumbers(); 

// infiniteRandomNumberGenerator에서 생성된 난수를 비동기적으로 순회하며 출력

// 500개의 난수를 출력한 후 종료
