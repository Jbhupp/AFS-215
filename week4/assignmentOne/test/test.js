const { expect, assert } = require("chai");
const { it } = require("mocha");

function calculator(num1, num2, operator){
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        return "Not a valid number"
    }

    if (operator === '+'){
        return num1 + num2
    }
    else if (operator === '-'){
        return num1 - num2
    }
    else if (operator === '/'){
        return num1 / num2
    }
    else if (operator === '*'){
        return num1 * num2
    }

}

it('call function', function(){
    expect(calculator()).to.equal('Not a valid number')
})

it('addition', function(){
    expect(calculator(2, 2, "+")).to.equal(4)
})

it('subtraction', function(){
    expect(calculator(32, 8, "-")).to.equal(24)
})

it('division', function(){
    expect(calculator(100, 10, "/")).to.equal(10)
})

it('multiplication', function(){
    expect(calculator(55, 10, "*")).to.equal(550)
})

it('error check', function(){
    expect(calculator('one', 2, "+")).to.equal("Not a valid number")
})