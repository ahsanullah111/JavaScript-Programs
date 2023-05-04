function answer() {

    var temp = document.getElementById("temperature").value;
    var result = document.getElementById("result");
    
    
    if (temp >= 20) 
    {
          result.innerHTML= (" too Hot");
    
    } else {
    
        result.innerHTML = (" too Cold");
    }
     } 