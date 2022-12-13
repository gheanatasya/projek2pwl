<template>
  <div class="home">
      <input v-model="username" type="text" placeholder="username anda..."/> <br/> <br/>
      <button v-on:click="halamanChat()">Masuk</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
      halamanChat(){
        this.$router.push('/halamanChat');
      }
  },
}
</script>

<style scoped>
input{
  text-align:left;
  margin-top: 200px;
  margin-bottom: -15px;
  padding-top: 10px;  
  padding-bottom: 10px;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 5px;
  font-size: large;
  border-width: 1px;
}

button{
  background-color: rgb(157, 57, 251);
  color: white;
  padding-top: 10px;  
  padding-bottom: 10px;
  padding-left: 175px;
  padding-right: 175px;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 5px;
  border-style: none;
}
</style>