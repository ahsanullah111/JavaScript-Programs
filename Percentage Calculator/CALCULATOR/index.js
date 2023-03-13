        var obtainedmarks = (document.getElementById("obtainedmarks").value);
        var Totalmarks = (document.getElementById("totalmarks").value);
        var Percentage =  (obtainedmarks *100) / Totalmarks;
        document.getElementById ("Percentage").innerHTML = Percentage;