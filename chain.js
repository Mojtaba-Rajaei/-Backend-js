let chain = {
    sub: 0,
    up: function() {
        this.sub++;
        return this;
    }, 
    down: function() {
        this.sub--;
        return this;
    },
    print: function() {
        console.log(this.sub);
        return this;
    }
}

chain
    .up()
    .print()
    .up()
    .up()
    .print()
    .down()
    .print();