import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./router"; 

const app = createApp(App);

app.directive("more" , (el, binding) => {
    let resultat = binding.value.split(" ").slice(0, 3).join(" ")
    if(binding.modifiers.body){
        resultat = binding.value.split(" ").slice(0, 9).join(" ") + " ..."
    }
    el.innerText = resultat;
})

app.use(router) // ajouter une plugin (extension) à notre projet
    .mount('#app')
    
