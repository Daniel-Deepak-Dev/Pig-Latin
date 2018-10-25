
sentence=`${process.argv[2]}`
// sentence = 'Daniel is a good boy vwl'

splitedFile = sentence.split(' ')

const findTheFirstVowel=(word)=>{
    
    FirstIOV = word.length 
    // above code is to consider next to last letter there is a vowel

    for (vowel of 'aeiou'){
        indexOfVowel = word.indexOf(vowel)
        if(indexOfVowel!=-1){
            if(FirstIOV > indexOfVowel){
                FirstIOV=indexOfVowel
            }
        }
    }

    return (FirstIOV==word.length)? null : FirstIOV  
    //if the first vowel equals the imaginary vowel then
    // it means there is no vowel in the group
}

arrayOfPigLatin = splitedFile
.map(word => {
    x=findTheFirstVowel(word)
    if(x==null){
        return requiredWord = word+"ay"
    }
    else if(x==0){
        return requiredWord = word+"yay"
    }
    else{
        firstHalfWord=word.slice(0,x)
        lastHalfWord=word.slice(x,10)
        return requiredWord = lastHalfWord+firstHalfWord+'ay'
    }
});
pigLatin = arrayOfPigLatin.join(' ')

console.log(`\nsentence you entered: ${sentence}\n`);
console.log(`-`.repeat(pigLatin.length+22))
console.log(`Pig-Latin Encrypted: `,pigLatin)
console.log(`${`-`.repeat(pigLatin.length+22)}\n`)
