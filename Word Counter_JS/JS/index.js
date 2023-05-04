let texBox = document.getElementById("textBox");

textBox.addEventListener("input", function() {
    //Get Value of Text Box
    var text = this.value
    
    //Char Counter
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    //Word Counter
    let word = text.split(" ");
        //Remove Extra Spaces from word Array
    let removeSpace = word.filter(function(elm) {
        return elm != "";
    });
    document.getElementById("word").innerHTML = removeSpace.length;
})