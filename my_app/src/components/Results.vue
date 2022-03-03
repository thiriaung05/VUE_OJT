<template>
    <div>
        <li v-for="(message,index) in messageList" :item="message" :key="index">
            {{message}}&nbsp;
           <button @click.prevent="$emit('delete-Name', index)">X</button>
        </li>
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
