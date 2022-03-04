<template>
    <div>
        <input placeholder="Enter Text Here" v-model="name" @click.prevent="submit"/>
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
            this.$emit("inputData",this.name);
            this.name="";
        }
    }
};
</script>
