import {createRouter , createWebHistory} from "vue-router";


export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path: "/" , name: "accueil" , component : Accueil},
        {path: "/slot" , name: "slot" , component : Slot},
        {path: "/suspense" , name: "suspense" , component : MySuspense },
    ]
})