var reverseWords = function(s) {
    let arr = []
    let temp = ""
    s += " "

    for (let i = 0; i < s.length; i++) {
      if (s[i] == " " && temp.length > 0) {
        arr.unshift(temp)
        temp = ""
      } else if (s[i] !== " ") {
        temp += s[i]
      }
    }

    return arr.join(" ")
};