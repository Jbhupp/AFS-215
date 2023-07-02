const Day = require ("../myLib/array");

const expect = require('chai').expect;

before(function(){
    running = new Day()
    console.log("I worked out.")
})


beforeEach(function(){
    console.log("I am resting")
})


afterEach(function(){
    console.log("Working out again")
})


after(function(){
    console.log("Workout completed successfully")
})


it('display', function(){
    expect(running.display()).to.deep.equal(["yellow", "green", "red"])
});

it('string', function(){
    expect(running.add("purple")).to.deep.equal(["yellow", "green", "red", "purple"])
});

it('number', function(){
    expect(running.add(14)).to.deep.equal(["yellow", "green", "red", "purple", 14])
});

it('object', function(){
    expect(running.add({first:"you are second", third: "you are fourth"})).to.deep.equal(["yellow", "green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}])
});


it('array', function(){
    expect(running.add(["Tom", "Susie", "Dakota"])).to.deep.equal(["yellow", "green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"]])
});


it('removeFirst', function(){
    expect(running.remove(0)).to.deep.equal(["green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}, ["Tom", "Susie", "Dakota"]])
});

it('removeLast', function(){
    expect(running.remove(5)).to.deep.equal(["green", "red", "purple", 14, {first:"you are second", third: "you are fourth"}])
});


it('removeMiddle', function(){
    expect(running.remove(3)).to.deep.equal(["green", "red", "purple", {first:"you are second", third: "you are fourth"}])
});


it('findTrue', function(){
    expect(running.search("purple")).to.equal(true)
});


it('findFalse', function(){
    expect(running.search("purewple")).to.equal("Error")
});