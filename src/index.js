
module.exports =function toReadable (number) {
    const numbersNAmes = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
        17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty',
        70: 'seventy', 80: 'eighty', 90: 'ninety'};
    if(number===0)return "zero"
    if(number<20){
        return numbersNAmes[number]
    }
    if(number<100){
        if (number in numbersNAmes){
            return numbersNAmes[number]
        }
        else{
            let dec = parseInt(number/10)*10;
            let num = number%10
            return `${numbersNAmes[dec]} ${numbersNAmes[num]}`
        }
    }
    else{
        if (number in numbersNAmes){
            return numbersNAmes[number]
        }
        else{
            let hun = parseInt(number/100);
            let EndOFNumber = number%100;
            if(EndOFNumber in numbersNAmes){
                return `${numbersNAmes[hun]} hundred ${numbersNAmes[EndOFNumber]}`.trim()
            }
            let dec = parseInt(EndOFNumber/10)*10;
            let num = EndOFNumber%10
            return `${numbersNAmes[hun]} hundred ${numbersNAmes[dec]?numbersNAmes[dec]:""} ${numbersNAmes[num]?numbersNAmes[num]:""}`.trim()
        }

    }
}
