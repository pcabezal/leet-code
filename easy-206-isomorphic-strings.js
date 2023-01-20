var isIsomorphic = function(s, t) {
  // establish map object
  const map = {}
  const map2 = {}
  //iterate through s, adding replacement values to map. check if mapping meets requirements along way
  
  for (let i = 0; i < s.length; i++) {
    let first = s[i]
    let second = t[i]

    if (map[first]) {
        if (map[first] !== second) return false
    }
    if (map2[second]) {
        if (map2[second] !== first) return false
    }

    map[first] = second
    map2[second] = first
  }
  return true
};