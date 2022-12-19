// var getRow = function(r) {
//   var ans = new Array(r+1)
//   ans[0]=ans[r]=1
//   for(i=1,up=r;i<r;i++,up--)
//       ans[i] = ans[i-1]*up/i
//   return ans
// };

//
const getRow = rowIndex => {
    const res = []
    
    while (res.length <= rowIndex) {
        res.unshift(1)
        for(let i = 1; i < res.length - 1; i++) {
            res[i] += res[i + 1]
        }
    }
    
    return res
}