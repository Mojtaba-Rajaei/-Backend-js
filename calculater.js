
let readline = require('readline').createInterface({input:process.stdin,output:process.stdout});


let calculater = {
    a: 2,
    b: 3,
    add() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        readline.question("a?",number => {
            this.a = number ;
            readline.close()
        });
        readline.question("b?",number => {
            this.b = number ;
            readline.close()
        });
    }
}

calculater.read();
console.log(calculater.add());
console.log(calculater.mul());