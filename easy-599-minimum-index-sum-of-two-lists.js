var findRestaurant = function(list1, list2) {
    // establish map object answer array and sum variable
    let map = {}
    let answer = []
    let leastSum = Infinity
    
    // iterate through list1 to populate map
  
    for (let i = 0; i < list1.length; i++) {
      map[list1[i]] = i
    }
  
    // iterate through list2 to populate map2, checking for common strings and index sum along the way
    for (let i = 0; i < list2.length; i++) {
        let word = list2[i]
        if (map.hasOwnProperty(word)) {
            if (map[word] + i < leastSum) {
                leastSum = map[word] + i
                answer = [word]
            } else if (map[word] + i == leastSum) {
                answer.push(word)
            }
        }
        if (i > leastSum) break;
    }

    // return answer array
    return answer
  
  };