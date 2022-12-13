<template>
    <div>
        <form class="chat-box" @submit='onSubmit($event)'>
            <input 
                v-model="teks"
                placeholder="ketik pesan..."
                type="text"
            />
            <button :disabled='teks === ""'>Send</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ChatBox',
        data: () => ({
            teks: ''
        }),
        methods: {
            onSubmit(event){
                this.$emit("submit", event, this.teks);
                this.teks = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
.chat-box {
    width: 100%;
    display: flex;
}

input {
    width: min(100%, 20rem);
    flex-grow: 1;
}

button:disabled {
    opacity: 0.5;
}
</style>