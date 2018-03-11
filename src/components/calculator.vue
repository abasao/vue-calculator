<template>
  <div class="calculator">
    <h1>{{title}}</h1>
    <form @submit="addNumber">
      <input type="number" v-model="newNumber.numericValue" placeholder="NUMBER">
      <br>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
    name: 'calculator',
    data() {
      return {
          title: 'Hello World',
          newNumber: {},
          numbers: [
          ]
      }
    },
    methods: {
        addNumber(e){
            e.preventDefault();
            this.numbers.push(this.newNumber);
            this.newNumber = {};
            console.log(this.numbers);
        }
    }
}
</script>
<style scoped>

</style>

