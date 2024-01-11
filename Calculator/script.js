const keys=document.querySelectorAll('.key');
const display_input=document.querySelector('.display .input');
const display_output=document.querySelector('.display .output');

let input="";

for(let key of keys){
    const value=key.dataset.key;

    key.addEventListener('click', () =>{
        if(value == "clear"){
            input ="";
            display_input.innerHTML ="";
            display_output.innerHTML ="0";
            display_output.style.fontSize ="3rem";
        }
        else if(value == "="){
            let result = eval(input);
            if (result.toString().length > 6) {
                display_output.style.fontSize = "1rem";
            } else {
                display_output.style.fontSize = "3rem"; 
            }

            display_output.innerHTML= result;
        }
        else if (value === "backspace" ) {
            
            input = input.slice(0, -1);
            display_input.innerHTML = input;
        }
        else if (value === ".") {
            if (!input.includes(".")) {
                input += value;
                display_input.innerHTML = input;
            }
        }
        else{
            input +=value;
            display_input.innerHTML = input;
        }
    })
}