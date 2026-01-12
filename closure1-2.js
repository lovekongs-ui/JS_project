function createBankAccount(initialBalance) {
  let balance = initialBalance;
  const _initial = initialBalance; 
  const history = [];

  return {
    deposit: (amount) => {
      if (amount <= 0) return false;

      balance += amount;
      history.push({ type: 'deposit', amount });
      return true;
    },

    withdraw: (amount) => {
      if (amount <= 0 || amount > balance) return false;

      balance -= amount;
      history.push({ type: 'withdraw', amount });
      return true;
    },

    getBalance: () => balance,

    getHistory: () => [...history],
  };
}

// 테스트
const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.withdraw(2000)); // false
console.log(account.withdraw(300)); // true
console.log(account.getBalance()); // 1200
console.log(account.getHistory());
// [{type: 'deposit', amount: 500}, {type: 'withdraw', amount: 300}]
