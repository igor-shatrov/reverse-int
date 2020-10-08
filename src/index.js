module.exports = function reverse(n) {
    console.log(n + typeof(n))
    let finish = ''
    let arr = Math.abs(n).toString().split('')
    console.log(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        finish += arr[i]
    }
    return parseInt(finish)
}