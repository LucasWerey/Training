function kidsWithCandies(candies, extraCandies) {
    var res = [];
    var greater = candies[0];
    for (var i = 1; i < candies.length; i++) {
        candies[i] < greater ? (greater = greater) : (greater = candies[i]);
    }
    for (var j = 0; j < candies.length; j++) {
        res[j] = candies[j] + extraCandies >= greater;
    }
    console.log(greater);
    return res;
}
var candies = [2, 3, 5, 1, 3], extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
