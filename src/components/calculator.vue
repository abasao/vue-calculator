<template>
  <div class="calculator">
    <div class="results">
      <input class="input" v-model="current" disabled>
    </div>
    <div class="complex-mode" v-show="changeMode">                   
      <button class="button" v-on:click="press">sin</button>
      <button class="button" v-on:click="press">cos</button>
      <button class="button" v-on:click="press">tan</button>
      <button class="button" v-on:click="press">x^</button>
      <button class="button" v-on:click="press">del</button>
      <button class="button" v-on:click="press">C</button>
      <button class="button" v-on:click="press">log</button>
      <button class="button" v-on:click="press">ln</button>
      <button class="button" v-on:click="press">e</button>
      <button class="button" v-on:click="press">∘</button>
      <button class="button" v-on:click="press">rad</button>
      <button class="button" v-on:click="press">√</button>
      <button class="button" v-on:click="press">7</button>
      <button class="button" v-on:click="press">8   </button>
      <button class="button" v-on:click="press">9</button>
      <button class="button" v-on:click="press">/</button>
      <button class="button" v-on:click="press">x ²</button>
      <button class="button" v-on:click="press">x !</button>
      <button class="button" v-on:click="press">4</button>
      <button class="button" v-on:click="press">5</button>
      <button class="button" v-on:click="press">6</button>
      <button class="button" v-on:click="press">*</button>
      <button class="button" v-on:click="press">(</button>
      <button class="button" v-on:click="press">)</button>
      <button class="button" v-on:click="press">1</button>
      <button class="button" v-on:click="press">2</button>
      <button class="button" v-on:click="press">3</button>
      <button class="button" v-on:click="press">-</button>
      <button class="button" v-on:click="press">%</button>
      <button class="button" v-on:click="press">±</button>
      <button class="button" v-on:click="press">0</button>
      <button class="button" v-on:click="press">.</button>
      <button class="button" v-on:click="press">del</button>
      <button class="button" v-on:click="press">+</button>                    
      <button class="button equal-sign" v-on:click="press">=</button>
    </div> 
  </div>
</template>

<script>
export default {
    name: 'calculator',
    data() {
      return {
          title: 'Hello World',
          current: '',
          changeMode: true,
          x: '',
          y: '',
          operator: null,
          buttons: [
            "del",'=','C', '*', '/', '√', 'x ²',
            "sin", "cos", "tan", "log", "x !", "rad", "x ²",
            "±", "e", "π", "%", "x^", "ln","+","-"
          ],
      }
    },
    methods: {
        // addNumber(e){
        //     e.preventDefault();
        //     this.numbers.push(this.newNumber);
        //     this.newNumber = {};
        //     console.log(this.numbers);
        // },
        // the functions we'll use in 
        // controlling our app go in here
        setNumber(digit){
          if(this.operator === null){
            this.x += digit;
            this.display = this.x;
          }
          else{
            this.y += digit;
            this.display = this.y;
          }
        },
        press: function(event) {
          //we make a reference to the inner text
          //of each button to dispatch our functions
          let key = event.target.innerText;
          if (!this.buttons.includes(key)) {
              this.current += key;
          }
          switch(key){
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
        },
        //our ' = ' button
        equals() {
          if ((this.current).indexOf("^") > -1) {
            var base = (this.current).slice(0, (this.current).indexOf("^"));
            var exponent = (this.current).slice((this.current).indexOf("^") + 1);
            this.current = eval("Math.pow(" + base + "," + exponent + ")").toString();
          } else {
            this.current = eval(this.current).toString();
          }
        },
        
        //our ' C ' button
        clear() {
            this.current = "";
        },

        //our ' <= ' button
        backspace() {
          this.current = this.current.substring(0, this.current.length - 1);
        },

        //our ' * ' button
        multiply() {
          this.current += "*";
        },

        //our ' / ' button
        divide() {
          this.current +=  "/";
        },

        //our ' + ' button
        plus() {
          this.current +=  "+";
        },

        //our ' - ' button
        minus() {
          this.current +=  "-";
        },

        plusMinus() {
          if(this.current.charAt(0) === "-") {
            this.current = this.current.slice(1);
          } else {
            this.current = "-" + this.current;
          }
        },

        // our 'x!' button
        factorial() {
          var num = 1;
          if (this.current === 0) {
            this.current = "1";
          } else if (this.current < 0) {
            this.current = NaN;
          } else {
            var numb = 1;
            for (var i = this.current; i > 0; i--) {
              numb *=  i;
            }
            this.current = numb;
          }
        },

        // our 'π' button
        pi() {
          this.current = (this.current * Math.PI);
        },

        // our 'x ²' button
        square() {
          this.current = (this.current * this.current);
        },

        // our '√' button
        squareRoot() {
          this.current = Math.sqrt(this.current);
        },

        // our '%' button
        percent() {
          this.current = this.current / 100;
        },

        // our 'sin' button
        sin() {
          this.current = Math.sin(this.current);
        },

        // our 'cos' button
        cos() {
          this.current = Math.cos(this.current);
        },

        // our 'tan' button
        tan() {
          this.current = Math.tan(this.current);
        },

        // our 'log' button
        log() {
          this.current = Math.log10(this.current);
        },

        // our 'ln' button
        ln() {
          this.current = Math.log(this.current);
        },

        // our 'X^' button
        exponent() {
          this.current += "^";
        },

        // our 'exp' button
        exp() {
          this.current = Math.exp(this.current);
        },

        // our 'rad' button
        radians() {
          this.current = this.current * (Math.PI / 180);
        },

        // our '∘' button
        degrees() {
          this.current = this.current * (180 / Math.PI);
        },

        //our ' sin ' button
        sin() {
          this.current = Math.sin(this.current);
        },

        //our ' cos ' button
        cos() {
          this.current = Math.cos(this.current);
        },

        //our ' tan ' button
        tan() {
          this.current = Math.tan(this.current);
        },

        //our ' log ' button
        log() {
          this.current = Math.log10(this.current);
        },
        // our 'ln' button
        ln() {
          this.current = Math.log(this.current);
        },

        // our 'X^' button
        exponent() {
          this.current += "^";
        },

        // our 'exp' button
        exp() {
          this.current = Math.exp(this.current);
        },

        // our 'rad' button
        radians() {
          this.current = this.current * (Math.PI / 180);
        },

        // our '∘' button
        degrees() {
          this.current = this.current * (180 / Math.PI);
        },
    }
}

</script>
<style scoped>
body {
  box-sizing: border-box;
  background: #085078;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #85D8CE, #085078);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #85D8CE, #085078); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.calculator {
  width: 450px;
  padding: 20px;
  border-radius: 5px;
  margin: 1em auto;
  background-color: #59E;


}

.input {
  width: 430px;   height: 50px;
  border-radius: 0px;
  border: 1px solid hsl(0, 0%, 0%);
  background-color: #33883390;
  color: #111;
  padding: 0 5px 0 5px;
  margin: 0 0px 10px 0px;
  font-size: 30px;
  text-align: right;
}

.button {
  margin: 3px;
  width: 60px;
  border: 1px solid hsl(0, 0%, 5%);
  height: 25px;
  border-radius: 4px;
  color: hsl(0, 0%, 85%);
  background-color: hsl(0, 0%, 10%);
  cursor: pointer;
  outline: none;
}

.complex-mode {
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.equal-sign {
  background-color: hsl(120, 100%, 25%);
  width: 140px;
}

.toggle-button {
  border: none;
  background-color: hsl(0, 0%, 20%);
  cursor: pointer;
  outline: none;
}

button::-moz-focus-inner {
  border-color: transparent;
}
</style>

