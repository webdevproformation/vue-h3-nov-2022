import { defineStore } from "pinia"

export const usePanierStore = defineStore("panierStore" , {
    state : () => {
        return {
            panier : []
        }
    },
    actions : {
        add : function(produit){
            // est ce que le produit existe déjà dans le panier ??
            const produitExiste = this.panier.find( item => item.id === produit.id )
            if( produitExiste ){
                const index = this.panier.indexOf(produitExiste);
                this.panier[index].quantite += produit.quantite
            } else {
                this.panier.push(produit)
            }
        }
    }
})