//Ques 5-Best Tome to Buy and Sell Stocks

//Input :prices=[7,1,5,3,6,4]-------------->O/P:5
//Input :prices=[7,6,4,3,1]-------------->O/P:0

// Brute Force Soln 
// function maxProfit(prices) {
//     let globalProfit = 0;

//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const currentProfit = prices[j] - prices[i];

//             if (currentProfit > globalProfit) globalProfit = currentProfit;

//         }
//     }
//     return globalProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))


// -----------------------------------------------------------------------------------------------------------------------

const maxProfit = function (prices) {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minStockPurchasePrice) {
            minStockPurchasePrice = prices[i]
        }
        profit = Math.max(profit, prices[i] - minStockPurchasePrice)
        // console.log(profit, i)
    }
    return profit;

};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

// [7, 1, 5, 3, 6, 4]
// min=7=>1=>
// profit=0 => 5-1=4=>6-1=5
