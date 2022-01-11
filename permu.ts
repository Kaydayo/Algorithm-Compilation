const capPermutations = function (str: string): string[] {
    str = str.toLowerCase() //convert all input to lowercase
    const lengthOfString = str.length
    let letters: string[] = []
    const search = (index: number, newStr: string = ''): void => {
      if (index < lengthOfString) {
        search(index + 1, newStr + str[index]) //cocantenate the string in its lowercase form
        if (str[index] >= 'a') search(index + 1, newStr + str[index].toUpperCase()) //cocantenate the string if and only if the string at that index is a letter.
      } else letters.push(newStr) //push the final result into the empty array
    }
    search(0) // calling the search recursion with index initialised to 0
    return letters
  }
  console.log(capPermutations('35p'))
      
      
      
    
    
  