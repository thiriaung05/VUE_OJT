import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state(){
        return{
            message:[],
            IsShow: false
        }
    },
    mutations:{
        showMessage(state,msg){
            console.log("Store:" + msg);
            if(msg.length  > 0){
                state.message.push(msg)
                state.IsShow = true;
            }
        },
        deleteMessage(state, index){
            console.log("store index:" + index);
            state.message.splice(index)
            if(state.message.length == 0){
                state.IsShow = false;
            }
        },
        deleteAllMessage(state){
            state.message = []
            state.IsShow = false;
        }
    },
});

createApp(App).use(store).mount('#app')
