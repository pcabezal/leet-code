
// easy solution
// var merge = function(nums1, m, nums2, n) {
//     let arr = nums1.slice(0, m).concat(nums2.slice(0, n)).sort((a,b) => a - b)
//     for (let i = 0; i < nums1.length; i++) {
//         nums1[i] = arr[i]
//     }
// };

// var merge = function(nums1, m, nums2, n) {
//     let n1pointer = m - 1;
//     let n2pointer = n - 1;

//     for (let i =  nums1.length; i > 0; i--) {
//         if (nums1[n1pointer] >= nums2[n2pointer]) {
//             nums1[i] = nums1[n1pointer];
//             n1pointer--;
//         } else {
//             nums1[i] = nums2[n2pointer];
//             n2pointer--;
//         }
        
//     }

//     return nums1
// }

var merge = function(nums1, m, nums2, n) {
    let last = m + n - 1;
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[m -1]) {
            console.log('add from nums1', nums1[m -1], m, last);
            nums1[last] = nums1[m - 1];
            m--;
        } else {
            console.log('add from nums2', nums2[n -1], n, last);
            nums1[last] = nums2[n -1];
            n--;
        }
        last--;
    }
    while (n > 0) {
        nums1[last] = nums2[n -1];
        n--;
        last--;
    }

    return nums1
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));