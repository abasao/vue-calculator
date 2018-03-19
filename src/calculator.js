var Calculator = function(){
    this.current = '';
    this.changeMode = true;
    this.buttons = [
    "del",'=','C', '*', '/', '√', 'x ²',
    "sin", "cos", "tan", "log", "x !", "rad", "x ²",
    "±", "e", "π", "%", "x^", "ln","+","-"
    ];
};

Calculator.prototype.press = function(event) {
    //we make a reference to the inner text
    //of each button to dispatch our functions
    let key = event.target.innerText;
    if (!this.buttons.includes(key)) {
        this.current += key;
    }
    switch (key) {
        case "+":
            this.plus();
            break
        case "-":
            this.minus();
            break
        case "del":
            this.backspace();
            break
        case "*":
            this.multiply();
            break
        case "/":
            this.divide();
            break
        case "=":
            this.equals();
            break
        case "C":
            this.clear();
            break
        case "√":
            this.squareRoot();
            break
        case "x ²":
            this.square();
            break
        case "x^":
            this.exponent();
            break
        case "±":
            this.plusMinus();
            break
        case "%":
            this.percent();
            break
        case "rad":
            this.radians();
            break
        case "π":
            this.pi();
            break
        case "sin":
            this.sin();
            break
        case "cos":
            this.cos();
            break
        case "tan":
            this.tan();
            break
        case "log":
            this.log();
            break
        case "ln":
            this.ln();
            break
        case "e":
            this.exp();
            break
        case "x !":
            this.factorial();
            break
        case "∘":
            this.degrees();
            break
        default:
            console.log("the end of switch");
            break
    }
    this.current = this.current.toString();
};

//our ' = ' button
Calculator.prototype.equals = function() {
    if ((this.current).indexOf("^") > -1) {
        var base = (this.current).slice(0, (this.current).indexOf("^"));
        var exponent = (this.current).slice((this.current).indexOf("^") + 1);
        this.current = eval("Math.pow(" + base + "," + exponent + ")").toString();
    } else {
        this.current = eval(this.current).toString();
    }
};

//our ' C ' button
Calculator.prototype.clear = function() {
    this.current = "";
};

//our ' <= ' button
Calculator.prototype.backspace = function() {
    this.current = this.current.substring(0, this.current.length - 1);
};

//our ' * ' button
Calculator.prototype.multiply = function() {
    this.current += "*";
};

//our ' / ' button
Calculator.prototype.divide = function() {
    this.current += "/";
};

//our ' + ' button
Calculator.prototype.plus = function() {
    this.current += "+";
};

//our ' - ' button
Calculator.prototype.minus = function() {
    this.current += "-";
};

Calculator.prototype.plusMinus = function() {
    if (this.current.charAt(0) === "-") {
        this.current = this.current.slice(1);
    } else {
        this.current = "-" + this.current;
    }
};

// our 'x!' button
Calculator.prototype.factorial = function() {
    var num = 1;
    if (this.current === 0) {
        this.current = "1";
    } else if (this.current < 0) {
        this.current = NaN;
    } else {
        var numb = 1;
        for (var i = this.current; i > 0; i--) {
            numb *= i;
        }
        this.current = numb;
    }
};

// our 'π' button
Calculator.prototype.pi = function() {
    this.current = (this.current * Math.PI);
};

// our 'x ²' button
Calculator.prototype.square = function() {
    this.current = (this.current * this.current);
};

// our '√' button
Calculator.prototype.squareRoot = function() {
    this.current = Math.sqrt(this.current);
};

// our '%' button
Calculator.prototype.percent = function() {
    this.current = this.current / 100;
};

// our 'sin' button
Calculator.prototype.sin = function() {
    this.current = Math.sin(this.current);
};

// our 'cos' button
Calculator.prototype.cos = function() {
    this.current = Math.cos(this.current);
};

// our 'tan' button
Calculator.prototype.tan = function() {
    this.current = Math.tan(this.current);
};

// our 'log' button
Calculator.prototype.log = function() {
    this.current = Math.log10(this.current);
};

// our 'ln' button
Calculator.prototype.ln = function() {
    this.current = Math.log(this.current);
};

// our 'X^' button
Calculator.prototype.exponent = function() {
    this.current += "^";
};

// our 'exp' button
Calculator.prototype.exp = function() {
    this.current = Math.exp(this.current);
};

// our 'rad' button
Calculator.prototype.radians = function() {
    this.current = this.current * (Math.PI / 180);
};

// our '∘' button
Calculator.prototype.degrees = function() {
    this.current = this.current * (180 / Math.PI);
};

//our ' sin ' button
Calculator.prototype.sin = function() {
    this.current = Math.sin(this.current);
};

//our ' cos ' button
Calculator.prototype.cos = function() {
    this.current = Math.cos(this.current);
};

//our ' tan ' button
Calculator.prototype.tan = function() {
    this.current = Math.tan(this.current);
};

//our ' log ' button
Calculator.prototype.log = function() {
    this.current = Math.log10(this.current);
};
// our 'ln' button
Calculator.prototype.ln = function() {
    this.current = Math.log(this.current);
};

// our 'X^' button
Calculator.prototype.exponent = function() {
    this.current += "^";
};

// our 'exp' button
Calculator.prototype.exp = function() {
    this.current = Math.exp(this.current);
};

// our 'rad' button
Calculator.prototype.radians = function() {
    this.current = this.current * (Math.PI / 180);
};

// our '∘' button
Calculator.prototype.degrees = function() {
    this.current = this.current * (180 / Math.PI);
};

export {Calculator}