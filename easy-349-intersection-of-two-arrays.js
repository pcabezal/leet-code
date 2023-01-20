var intersection = function(nums1, nums2) {
    let answer = new Set()
    let map = {}

    for (const num of nums1) {
        map[num] = 1
    }

    for (const num of nums2) {
        if (map[num]) answer.add(num)
    }

    return Array.from(answer)
};