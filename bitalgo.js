function higherOrderBitMask(bit){
    let fourBits = '11110000'
    let bitStr = bit.toString()
    let result = ''

    for(let i = 0; i<fourBits.length; i++){
        if(fourBits[i] === '1' && bitStr[i] === '1'){
            result+= '1'
        }else{
            result += '0'
        }
    }
    function bin_to_dec(result) { 
        return parseInt((result + '')
        .replace(/[^01]/gi, ''), 2);
    }
   

    return bin_to_dec(result)
}

console.log(higherOrderBitMask(11011100))