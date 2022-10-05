function isValid(s) {
    // regex would be ideal
    // establish stacks for each paren type
    let stack = [];
     
    // iterate through s and add to stacks accordingly
    // return false if premature end paren
    for (let char of s) {
        switch(char) {
            case '(':
                stack.push(char);
                break;
            case '[':
                stack.push(char);
                break;
            case '{':
                stack.push(char);
                break;
            case ')':
                if (stack.pop() == '(') {
                    break;
                } else {
                    return false;
                }
            case ']':
                if (stack.pop() == '[') {
                    break;
                } else {
                    return false;
                }
            case '}':
                if (stack.pop() == '{') {
                    break;
                } else {
                    return false;
                }
        }   
    }
    // return true if stacks are all empty
    return stack.length == 0 
  }