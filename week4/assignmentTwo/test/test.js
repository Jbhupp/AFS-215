const { it } = require('mocha')

const expect = require('chai').expect

function cond(num){
    if (num % 3 == 0 && num % 7 == 0){
        return "Good Evening"
    }
    else if (typeof num != 'number'){
        return 'Not a valid number'
    }
    else if (num === 1){
        return 1
    }
    else if (num === 2){
        return 2
    }
    else if (num % 3 == 0){
        return "Good Morning"
    }
    else if (num % 7 == 0){
        return "Good Afternoon"
    }
    else if (num === 3){
        return "Good Morning"
    }
    else if (num === 7){
        return "Good Afternoon"
    }
    else if (num % 3 != 0 || num % 7 != 0){
        return num.toString()
    }
}

it('return 1 pass 1', function(){
    expect(cond(1)).to.equal(1)
})

it('return 2 pass 2', function(){
    expect(cond(2)).to.equal(2)
})

it('return Good Morning pass 3', function(){
    expect(cond(3)).to.equal('Good Morning')
})

it('return Good Afternoon pass 7', function(){
    expect(cond(7)).to.equal('Good Afternoon')
})

it('return Good Morning pass mult of 3', function(){
    expect(cond(9)).to.equal('Good Morning')
})

it('return Good Afternoon pass mult of 7', function(){
    expect(cond(14)).to.equal("Good Afternoon")
})

it('return Good Evening pass mult 3/7', function(){
    expect(cond(21)).to.equal("Good Evening")
})

it('return string for neither', function(){
    expect(cond(8)).to.equal('8')
})

it('return other data type error', function(){
    expect(cond('one')).to.equal('Not a valid number')
})