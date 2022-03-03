<template>
  <div id="app">
    <UserMessage @inputData="updateMessage"/>
    <Results :messageList="childData" @delete-Name="delete_Name" @edit-Name="edit_Name"/>
    <Footer @delete-All="delete_All" v-if="IsShow"/>
  </div>
</template>
<script>
    import UserMessage from "./components/UserMessage";
    import Results from "./components/Results";
    import Footer from "./components/Footer";
  export default {
    name: "App",
    components: {
      UserMessage,
      Results,
      Footer,
    },
    data: function(){
      return{
        childData:[],
        IsShow:false
      };
    },
    methods:{
      updateMessage(variable){
          this.childData.push(variable)
          if(this.childData.length > 0){
            this.IsShow=true;
        }
      },
      delete_Name(index){
          this.childData.splice(index)
          if(this.childData.length == 0){
            this.IsShow=false
          }
      },
      delete_All(){
        this.childData = []
        this.IsShow=false
      }
    }
  };
</script>