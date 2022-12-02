<template>
    <div>
        <h1>Checkout</h1>
        <hr>
        <h2>client</h2>
        <ul>
            <li>email : {{ userStore.user.email }}</li>
            <li>role : {{ userStore.user.role }}</li>
        </ul>
        <hr>
        <h2>panier</h2>
        <TableauPanier />
        <hr>
        <h2>livraison</h2>
        <form>
            <input type="text" class="form-control mb-3" v-model="rue" placeholder="rue">
            <input type="number" class="form-control mb-3" v-model="cp" placeholder="00000">
            <input type="text" class="form-control mb-3" v-model="ville" placeholder="ville">
            <button class="btn btn-dark  mb-3" @click.prevent="submit">Enregistrer</button>
        </form>
        <hr>
        <h2>paiement</h2>
        <div class="text-end">
            <button class="btn btn-success  mb-3" @click="payer">Payer</button>
        </div>
        {{ JSON.stringify(userStore.user ) }} <br>
        {{ JSON.stringify(userStore.livraison) }}
    </div>
</template>

<script setup>
import TableauPanier from './TableauPanier.vue';
import {useUserStore} from "../../stores/userStore"
import { usePanierStore } from "../../stores/panierStore"
import { ref } from "vue"
import Joi from "joi";

let rue = ref("");
let cp = ref("75000");
let ville = ref("");

const userStore = useUserStore()
const panierStore = usePanierStore()

function submit(){
    const validationLivraison = Joi.object({
        rue : Joi.string().min(5).max(255).required(),
        cp : Joi.number().greater(0).required(),
        ville : Joi.string().min(5).max(255).required(),
    })

    const livraison = {
        rue : rue.value,
        cp : parseInt(cp.value),
        ville : ville.value
    }

    const {error} = validationLivraison.validate(livraison , {abortEarly : false} )
    console.log(error)
    if(error) return  ;

    userStore.addAdresseLivraison(livraison)
}

function payer(){

    const commande = {
        user : {
            email : userStore.user.email ,
            role : userStore.user.role
        },
        produits : panierStore.panier,
        livraison : userStore.livraison,
        dt_creation : Date.now(),
        total : userStore.totalPanier ,
        status : "à traiter"
    }

    // Cas pratique 
    // verifier que la commande est conforme => via Joi 
    // réaliser une requête POST pour ajouter le produit dans la base de données 

}

</script>
