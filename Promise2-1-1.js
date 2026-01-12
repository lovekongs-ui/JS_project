  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("Success!");
        } else {
            reject(new Error("Failed"));
        }
    }, 3000);
    // todo: 랜덤하게 에러 혹은 성공
    //   (50% 확률) => "Success! Chain1" 3초 후 
    //   (50% 확률) => "Failed" 즉시
  });
  
  // 테스트
  promise
    .then(value => {
      console.log(value); // "Success!"
      return value + ' Chain1';
    })
    .then(value => {
      console.log(value); // "Success! Chain1"
    })
    .catch(e => console.log(e.message)); // "Failed"