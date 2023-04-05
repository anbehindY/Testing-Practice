class calculator {
    add = (a,b) => {
        if(typeof(a) && typeof(b) && a && b){
            return a + b;
        } else {
            throw new Error ('Enter a valid number');
        }
    }

    subtract = (a,b) => {
        if(typeof(a) && typeof(b) && a && b){
            return a - b;
        } else {
            throw new Error ('Enter a valid number');
        }
    }
    divide = (a,b) => {
        if(typeof(a) && typeof(b) && a && b){
            return a / b;
        } else {
            throw new Error ('Enter a valid number');
        }
    }
    multiply = (a,b) => {
        if(typeof(a) && typeof(b) && a && b){
            return a * b;
        } else {
            throw new Error ('Enter a valid number');
        }
    }
}

module.exports = calculator;
