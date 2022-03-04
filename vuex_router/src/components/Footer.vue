<template>
    <div>
        <button @click.prevent="this.$store.commit('deleteAllMessage')">Delete All</button>
    </div>
</template>

<script>

export default{
    name:"Result_item",
    props:{
        messageList:[]
    },
};
</script>