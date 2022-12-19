const getRow = rowIndex => {
  const res = []
  
  while (res.length <= rowIndex) {
      res.unshift(1)
      console.log('b4 4 loop ' + res.length + '   ' + res);
      for(let i = 1; i < res.length - 1; i++) {
          res[i] += res[i + 1]
          console.log(res.length, i, res);
      }
  }
  
  return 'answer ' + res
}

console.log(getRow(4));