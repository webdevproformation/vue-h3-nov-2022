import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// directive globale 
app.directive( 'coucou' , (el , binding) => {
    console.log(el, binding);
    console.log( el.innerHTML )
    el.innerHTML = "coucou"
}  )

app.directive( 'salut' , (el , binding) => {
    console.log(el, binding);
    console.log( el.innerHTML )
    el.innerHTML = "salut"
}  )

app.mount('#app')
