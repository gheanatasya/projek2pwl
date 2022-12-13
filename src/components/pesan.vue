<template>
    <div v-bind:class='["pesan", {dark}]'>
        {{teks}}
    </div>
</template>

<script>
    export default {
        name: 'Pesan',
        props: ['teks', 'sender', 'dark']
    }
</script>

<style lang="scss" scoped>
.pesan {
    background: #c69cf9;
    border-radius: 10px;
    padding: 1rem;
    width: fit-content;
}

.pesan.dark {
    background: #c69cf9;
}
</style>