<template>
    <div>
        <button @click.prevent="$emit('delete-All')">Delete All</button>
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