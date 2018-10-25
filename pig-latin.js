sentence=`${process.argv[2]}`
// sentence = 'Daniel is a good boy vwl'
if(process.argv[2]===undefined){
    console.log('\x1b[33m%s\x1b[0m','\ndude, type a cute sentence and try again ;)')
    console.log('-'.repeat(44))
    console.log('\x1b[32m\x1b[40m%s\x1b[0m', 'node pig-latin.js "my cute little sentence"')
    console.log(`${'-'.repeat(44)}\n`)   
    return
}

splitedFile = sentence.split(' ')

const findTheFirstVowel=(word)=>{
    
    FirstIOV = word.length 
    // above code is to consider next to last letter there is a vowel

    for (vowel of 'aeiouAEIOU'){
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
        requiredWord = word+"ay"
        return requiredWord
    }
    else if(x==0){
        requiredWord = word+"yay"
        return requiredWord
    }
    else{
        firstHalfWord=word.slice(0,x)
        lastHalfWord=word.slice(x,10)
        requiredWord = lastHalfWord+firstHalfWord+'ay'
        return requiredWord
    }
});
pigLatin = arrayOfPigLatin.join(' ')

console.log('\x1b[42m\x1b[97m%s\x1b[0m',`\nsentence you entered`,`=>`, sentence);
console.log('\x1b[32m%s\x1b[0m',`-`.repeat(pigLatin.length+23))
console.log(`\x1b[43m\x1b[30m\Pig-Latin Encrypted\x1b[0m =>`,pigLatin)
console.log('\x1b[32m%s\x1b[0m',`${`-`.repeat(pigLatin.length+23)}\n`)
