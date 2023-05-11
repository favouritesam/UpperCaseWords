
function manipulation(words){
    for (let i = 0; i < words.length; i++) {
        if (words [i] === '') {}
    }
    words.replaceAll("h", "H");

    let hows = words.indexOf("How")
    let knows = words.indexOf("know")

    let word_ = words.split(" ")
    word_[hows] = "know"
    word_[knows] = "How"

    return word_.toString().replaceAll(",", " ")
}
let malik = "Hi malik how are you doing today i know you are fit for this take how to know you are more than capable to bdo this"
let result = manipulation(malik)
console.log(result)

