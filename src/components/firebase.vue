<template>
    <div>

    </div>
</template>

<script>
    import firebase from "./firebaseInit";
    import * as firestore from "firebase/firestore";
    const db = firestore.getFirestore(firebase);
    firestore.addDoc(firestore.collection(db, "user"), {username: 'gheawaworuntu', usernameteman: 'pingkanwaworuntu'});
    export default {
        
    }

</script>

<style lang="scss" scoped>

</style>