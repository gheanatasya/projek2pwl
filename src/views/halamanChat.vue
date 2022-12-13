<template>
    <div class="container">
        <div class="bagian1">
            <h2 id="pertama">Pesan Terakhir</h2>
            <button class="button" v-on:click="halamanHome()">[-></button>
            <h2 class="kedua" id="kedua">Kirim Pesan Ke:</h2>
            <input class="kedua" id="ketiga" v-model="usernameteman" type="text" placeholder="username teman..."/>
            <button v-on:keyup.enter="menyimpandata()"></button>
        </div>

        <div class="header">
            
        </div>

        <div class="bagian2">
            
        </div>
    </div>

</template>

<script>
    export default {
        name: 'halamanChat',
        methods: {
            halamanHome(){
                this.$router.push('/');
            },
            menyimpandata(){

            }
        }
    }
</script>

<style scoped>

.container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.bagian1 {
    width: 20%;
    height: 100%;
    background-color:rgb(72, 72, 247);
    float: left;
}

.bagian2 {
    width: 100%;
    height: 100%;
    background-color: beige;
    margin-top: -20px;
   
}

.header {
    width: 100%;
    height: 20%;
    background-color: rgb(127, 96, 155);
    margin-top: -20px;
}

#pertama {
    font-size: 20px;
    color: white;
    text-align: left;
}

#kedua {
    font-size: 20px;
    color: white;
    text-align: left;
    margin-top: 180%;
}
    
input {
    border-radius: 5px;
    font-size: large;
    border-width: 1px;
    margin-left: -60px;
}

.button{
    text-align: right;

}

</style>