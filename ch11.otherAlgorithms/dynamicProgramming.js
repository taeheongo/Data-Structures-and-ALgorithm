// // 최소 동전 교환문제

// function MinCoinChange(coins) {
//   var coins = coins;

//   var cache = {};

//   this.makeChange = function (amount) {
//     var me = this;
//     if (!amount) {
//       return [];
//     }
//     if (cache[amount]) {
//       return cache[amount];
//     }
//     var min = [], // 최소 동전 배열
//       newMin, // 새로운 최소 동전 배열
//       newAmount; // 새로운 amount

//     // coin별로 테스트
//     for (var i = 0; i < coins.length; i++) {
//       var coin = coins[i];
//       newAmount = amount - coin; // amount 에서 coin을 뺀 값을  newAmount로 한다.
//       if (newAmount >= 0) {
//         // 동전값이 amount보다 작을때
//         newMin = me.makeChange(newAmount); // newAmount를 최소 동전 배열로 표현
//       }
//       if (
//         newAmount >= 0 &&
//         (newMin.length + 1 < min.length || !min.length) &&
//         (newMin.length || !newAmount)
//       ) {
//         min = [coin].concat(newMin);
//         console.log("new Min " + min + " for " + amount);
//       }
//     }
//     return (cache[amount] = min);
//   };
// }

class MinCoinChange {
  constructor(coins) {
    this.coins = coins;
    this.cache = {};
  }

  makeChange(amount) {
    if (!amount) {
      return [];
    }

    if (this.cache[amount]) {
      return this.cache[amount];
    }

    let min = [];

    for (let coin of this.coins) {
      let newAmount = amount - coin;
      let newMin;
      // 동전값이 amount보다 더 크면
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount); // newMin은 amount에서 coin을 뺀 값에 대하여 최소 동전 배열.
      }

      if (
        newAmount >= 0 && // 동전값이 amount보다 더 크면
        (newMin.length + 1 < min.length || !min.length) && // +1을 한 이유는 동전값을 amount에서 뺀 값에 대한 최소 동전 배열이기 때문에 뺀 동전 개수를 더해준 것.
        (newMin.length || !newAmount) // 만약 5를 [3, 6]으로 찾는다고하면 5-3=2이 newAmount, newMin은 []이 될 것이다. newMin.length은 0일때 amount와 coin이 일치하지 않기 때문에
        // min을 업데이트하면 안되는 것. coin값이랑 amount가 일치하는 경우 3을 동전 3으로 찾을 때 newAmount 3-3 =0는 0이므로 min을 업데이트 한다.
      ) {
        min = [coin].concat(newMin);
        console.log("new Min " + min + " for " + amount);
      }
    }

    return (this.cache[amount] = min);
  }
}

let minCoinChange = new MinCoinChange([1, 3, 4]);
console.log(minCoinChange.makeChange(6));

let minCoinChange2 = new MinCoinChange([3, 4]);
console.log(minCoinChange2.makeChange(5));
