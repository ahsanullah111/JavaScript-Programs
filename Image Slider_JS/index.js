/** 
IF DIDN'T UNDERSTAND THE CODE 
VISIT YOUTUBE CHANNEL: https://www.youtube.com/watch?v=Fmqhsd8R29s 
FROM 4h:39min:39s
**/

//GLOBAL VARIABLE
let flag = 0;

//main Function of slider
function slideShow(num){
    
    let slides = document.getElementsByClassName("slide");

    //THIRD CHECK IF OUT OF IMAGES
        //NEXT PIC OUT
    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
                                              //WRITE THIS if PART IN THE START INSIDE THE FUNCTION
        //PREVIOUS PIC OUT                                                  
    if(num < 0){
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    


    //SECOND HIDE EVERY IMAGE
    for(let y of slides){
        y.style.display = "none";               //WRITE THIS loop PART IN THE MIDDLE INSIDE THE FUNCTION
    }



    //FIRST SHOW IMAGE
    slides[num].style.display = "block";         //WRITE THIS PART IN THE END INSIDE THE FUNCTION
}

//CALLING FUNCTION
slideShow(flag);

//ARROW CONTROLLER FUNCTION
function controller(x) {
    flag = flag + x; //for Next: flag + 1    for Prev: flag-1

    //CALLING FUNCTION
    slideShow(flag);
}
