const themeChangerButton = document.querySelector(".theme--button-outer")
const body = document.querySelector("body")
const calculatorOutput = document.querySelector('.calculator--output')

const buttons = document.querySelectorAll('.calculator--button')

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const seven = document.querySelector('.seven')



themeChangerButton.addEventListener('click', function(){
    if(body.classList[0] === 'theme-1'){
        body.classList.remove(`theme-1`)
        body.classList.add(`theme-2`)
    }else if(body.classList[0] === 'theme-2'){
        body.classList.remove(`theme-2`)
        body.classList.add(`theme-3`)
    }else{
        body.classList.remove(`theme-3`)
        body.classList.add(`theme-1`)
    }
   
})

themeChangerButton.addEventListener('click', function(){
   
})

function sum(n1, n2){
    return parseInt(n1) + parseInt(n2)
}

function subtract(n1, n2){
    return parseInt(n1) - parseInt(n2)
}

function multiply(n1, n2){
    return parseInt(n1) * parseInt(n2)
}

function divide(n1, n2){
    return parseInt(n1) / parseInt(n2)
}


let number = ''
let number1 = ''
let number2 = ''

function removeLastChar(){
    
    if(number.length <= 1){
        number = '' 
        // calculatorOutput.textContent = number1
        calculatorOutput.textContent = '0'
        
        
    }else{
        number = number.slice(0,-1);
        calculatorOutput.textContent = number
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.textContent == "DEL"){
            removeLastChar()                
        }else if(button.textContent == "RESET"){
            calculatorOutput.textContent = '0'
            number = ''
        }
        else if(button.textContent == '='){
                if(number.includes('+')){
                    number1 = number.split('+')[0]
                    number2 = number.split('+')[1]
                    number = sum(number1, number2).toString()
                    calculatorOutput.textContent = number
                }else if(number.includes('-')){
                    number1 = number.split('-')[0]
                    number2 = number.split('-')[1]
                    number = subtract(number1, number2).toString()
                    calculatorOutput.textContent = number
                }
                else if(number.includes('x')){
                    number1 = number.split('x')[0]
                    number2 = number.split('x')[1]
                    number = multiply(number1, number2).toString()
                    calculatorOutput.textContent = number
                }else if(number.includes('/')){
                    number1 = number.split('/')[0]
                    number2 = number.split('/')[1]
                    number = divide(number1, number2).toString()
                    calculatorOutput.textContent = number
                }
            // }
            
        }
        else{
            number += button.textContent
            calculatorOutput.textContent = number

        }
    })
    
})