const prompt=require("prompt-sync")({sigint:true}); 

function calculator(){

    const userinput = prompt('Enter operator ( either +, -, * or / ): ');
    const inputNumOne = (prompt('Please enter your first number: '))
    const inputNumTwo = (prompt('Please enter your second number: '))

    // console.log(typeof(inputNumOne))
    // console.log(typeof(inputNumTwo))
    
    if(userinput == '+' ){
        
        if( !isNaN(inputNumOne) &&  !isNaN(inputNumTwo)){
            let num1 = parseFloat(inputNumOne)
            let num2 = parseFloat(inputNumTwo)
            sum = num1 + num2
            console.log(sum)
            return sum
        }
        else {
            console.log('That input is invalid, please try again.')
            return 'That input is invalid, please try again.'
        }
    }

    if(userinput == '-' ){
        if( !isNaN(inputNumOne) && !isNaN(inputNumTwo)){
            let num1 = parseFloat(inputNumOne)
            let num2 = parseFloat(inputNumTwo)
            sum = num1 - num2
            console.log(sum)
            return sum
        }
        else {
            console.log('That input is invalid, please try again.')
            return 'That input is invalid, please try again.'
        }
    }
    if(userinput == '*' ){
        if( !isNaN(inputNumOne) &&  !isNaN(inputNumTwo)){
            let num1 = parseFloat(inputNumOne)
            let num2 = parseFloat(inputNumTwo)
            sum = num1 * num2
            console.log(sum)
            return sum
        }
        else {
            console.log('That input is invalid, please try again.')
            return 'That input is invalid, please try again.'
        }
    }
    if(userinput == '/' ){
        if( !isNaN(inputNumOne) &&  !isNaN(inputNumTwo)){
            let num1 = parseFloat(inputNumOne)
            let num2 = parseFloat(inputNumTwo)
            sum = num1 / num2
            console.log(sum)
            return sum
        }
        else {
            console.log('That input is invalid, please try again.')
            return 'That input is invalid, please try again.'
        }
    }
}

calculator()