import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore" , {
    state : () => {
        return {
            user : {}
        }
    },
    actions : {
        add : async function(identifiants){
            // requete ajax pour ajouter un profil user dans la base de données
            const options = {
                method : "POST",
                body : JSON.stringify({...identifiants, role: "client"}),
                headers : {
                    "content-type" : "application/json"
                }
            }
            await fetch("http://localhost:3004/users", options)

        },
        login : function(identifiants){},
        logout : function(){}
    }

})