<template>
    <div>
        <input placeholder="Enter Text Here" v-model="tmpMessage" @keyup.enter="submit"/>
    </div>
</template>

<script>
export default {
    name:"UserMessage",
    data(){
        return{
            tmpMessage:""
        };
    },
    methods:{
        submit:function(){
            this.$emit("inputData",this.tmpMessage);
            this.tmpMessage="";
        }
    }
};
</script>
