function findOutlier(integers){
  let odd = 0;
  let even = 0;

  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 == 0) {
      even++
    } else {
      odd++
    }
  }

  if (even > odd) {
    return integers.filter((num) => num % 2 !== 0)[0]
  } else {
    return integers.filter((num) => num % 2 == 0)[0]
  }
}