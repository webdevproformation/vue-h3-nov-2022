import { defineStore } from "pinia"


export const useTodoStore = defineStore("todoStore" , {
    state : () => {
        return {
            taches : [],
            titre : "decouverte de pinia"
        }
    },
    getters : {
        encours : function(){
            // this. fait référence au state 
            // pas besoin de faire this.state => directement this 
            return this.taches.filter( item => !item.status  )
        }
    }, // récupérer le state en réalisant réalisant une modification AVANT l'affichage en composant
    actions : {
        getTaches : async function(){
            const reponse = await fetch("http://localhost:3400/taches")
            const data = await reponse.json()
            this.taches = data;
        },
        nouvelleTache : function(){
            const tache = { id : Date.now() , nom : "nouvelle tâche" , status : false } 
            this.taches.push( tache );
        }
    } // setters capacité à modifier le state 
})