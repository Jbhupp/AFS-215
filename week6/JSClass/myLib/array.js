module.exports = class Day{
    constructor(){
        this.init = ["yellow", "green", "red"]
    }
    display(){
        return this.init
    }
    add(adding){
        this.init.push(adding)
        return this.init
    }
    remove(index){
        if(index === this.init.length-1){
            this.init.pop()
            return this.init
        }
        else if(index === 0){
            this.init.shift()
            return this.init
        }
        else{
            this.init.splice(index,1)
            return this.init
        }
    }
    search(word){
        if(this.init.includes(word) === true){
            return true
        }
        else{return "Error"}
    }

}