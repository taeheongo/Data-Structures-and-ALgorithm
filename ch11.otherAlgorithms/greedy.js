// 최소 동전 교환
class MinCoinChange {
  constructor(coins) {
    this.coins = coins;
  }

  makeChange(amount) {
    let total = 0,
      change = [];
    this.coins.sort((a, b) => b - a);

    for (let coin of this.coins) {
      while (total + coin <= amount) {
        total += coin;
        change.push(coin);
      }
    }

    return change;
  }
}

let minCoinChange = new MinCoinChange([1, 3, 4]);
console.log(minCoinChange.makeChange(6)); // expected [3,3] but [4, 1, 1]

let minCoinChange2 = new MinCoinChange([3, 4]);
console.log(minCoinChange2.makeChange(5)); // expected [] but [4]
