function getPINs(observed) {
    // TODO: This is your job, detective!
    let adj = {
        "1": ["1", "2", "4"],
        "2": ["2", "1", "3", "5"],
        "3": ["3", "2", "6"],
        "4": ["4", "1", "7", "5"],
        "5": ["5", "2", "4", "6", "8"],
        "6": ["6", "3", "9", "5"],
        "7": ["7", "4", "8"],
        "8": ["8", "0", "7", "9", "5"],
        "9": ["9", "6", "8"],
        "0": ["0", "8"]
    }
    console.log(observed)
    if (observed.length == 1) return adj[observed]
    let allArr = []
    for (let i = 0; i < observed.length; i++) {
        let myStr = observed[i].toString()
        allArr.push(adj[myStr])
    }
    
    console.log(helperPin(allArr));
    return helperPin(allArr)
    function helperPin(placeArr) {
        if (placeArr.length === 1) {
            return placeArr[0];

        }
        console.log(placeArr)
        let firstArr = placeArr[0]
        console.log(firstArr)
        let secondArr = placeArr[1]
        console.log(secondArr)
        let recentArr = placeArr.slice(2)
        console.log(recentArr)
        //     console.log(firstArr,secondArr,recentArr)
        let result = [];
        for (let i = 0; i < firstArr.length; i++) {
            let first = firstArr[i]
            //   console.log(first)
            for (let j = 0; j < secondArr.length; j++) {
                let poncat = first + secondArr[j]
                result.push(poncat)
            }
        }
        console.log(result, recentArr)
        let newAllArr = [result, ...recentArr]
        console.log(newAllArr)


        return helperPin(newAllArr);

    }
    

}

// console.log(getPINs("8").sort())
// console.log(getPINs("11").sort())
console.log(getPINs("369").sort())

