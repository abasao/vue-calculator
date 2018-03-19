<template>
  <div class="calculator-view">
    <div class="results">
      <input class="input" :value="current()" disabled>
    </div>
    <div class="complex-mode">                   
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
import {Calculator} from '../calculator'
export default {
  name: 'calculatorView',
  data() {
    return {
      calculator : new Calculator,
    }
  },
  methods:{
     press: function(event){
       this.calculator.press(event)},
    current(){
      return this.calculator.current
    }
  },
}
</script>
