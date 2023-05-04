const Calculate = () => {

    let num = +document.querySelector("#inp").value;

    let result = num % 2;

    let showVal = `Your Entered Value: ${num}, Your Result: ${result}`;

    document.querySelector('#showVal').innerHTML = showVal;

};

