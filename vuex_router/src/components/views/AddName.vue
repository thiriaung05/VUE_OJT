<template>
    <div>
        <input placeholder="Enter Text Here" v-model="name" @keydown.enter="submit"/><br><br>
        <li v-for="(message,index) in this.$store.state.message" :item="message" :key="index">
            {{ message }}&nbsp;
             <button @click.prevent="this.$store.commit('deleteMessage', index)">X</button>
        </li><br>
    </div>
</template>

<script>
export default {
    name:"Show-Name",
    data(){
        return{
            name:""
        };
    },
    methods:{
        submit:function(){
            this.$store.commit('showMessage',this.name)
            this.name="";
        }
    }
};
</script>
