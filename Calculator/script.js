const buttons = document.querySelectorAll("button");



var expression = "";

buttons.forEach((btn)=>{
        
    btn.addEventListener("click", (e) => {
        
        var input = e.currentTarget.textContent;
        var inputField = document.querySelector(".inputValue").textContent;        

        if(input === 'C'){
            document.querySelector('.inputValue').textContent = "";
            document.querySelector('.exp').textContent = "";
            expression = "";

        }
        else if(e.currentTarget == document.querySelector(".deleteBtn")){
             var alteredContent = inputField.substring(0, inputField.length - 1);
             expression = alteredContent;
             document.querySelector('.inputValue').textContent = alteredContent;
        }
        else if(input === "="){

                try {
                    document.querySelector(".exp").textContent = expression;
                    document.querySelector(".inputValue").textContent = eval(expression);
                    
                } catch (error) {
                    document.querySelector(".exp").textContent = "INVALID SYNTAX";
                    document.querySelector(".inputValue").textContent = "";
                }
        
            
            
        }
        else{
            expression += input;
            document.querySelector('.inputValue').textContent = expression;
            document.querySelector('.exp').textContent = "";
               
        }
    })
})