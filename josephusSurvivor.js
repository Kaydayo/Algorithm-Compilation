function josephusSurvivor(n, k) {
    let createArr = [];
    let storeDel = '';
    for (let i = 1; i <= n; i++) {
        createArr.push(i)
    }
    console.log(createArr)

    let lens = createArr.length;
    let determinant = 1
    let res;
    if (k == 1) {
        res = 1
    } else {
        res = k
    }
    while (createArr.length > 1) {
        let result;
        if (determinant % k === 0) {
            createArr.shift()
            console.log(createArr)
        } else {
            let value = createArr.shift()
            createArr.push(value)
            console.log(createArr)
        }
        console.log(createArr)
        determinant++;
    }
    console.log(createArr)
    if (createArr.length < 2) {
        return createArr[createArr.length - 1]
    } else {
        return createArr[createArr.length - 2]
    }


}

console.log(josephusSurvivor(7, 300))
console.log(josephusSurvivor(7, 3))
console.log(josephusSurvivor(11, 19))
console.log(josephusSurvivor(1, 300))
console.log(josephusSurvivor(14, 2))
console.log(josephusSurvivor(14997, 24666))




// Test.assertEquals(josephusSurvivor(7,3),4)
// Test.assertEquals(josephusSurvivor(11,19),10)
// Test.assertEquals(josephusSurvivor(1,300),1)
// Test.assertEquals(josephusSurvivor(14,2),13)
// Test.assertEquals(josephusSurvivor(100,1),100)