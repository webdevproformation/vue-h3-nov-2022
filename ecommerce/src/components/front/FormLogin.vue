<template>
    <form @submit.prevent="submit">
        <div class="mb-3">
            <label for="email">email</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="votre@email.fr">
        </div>
        <div class="mb-3">
            <label for="password">password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="password">
        </div>
        <div class="mb-3">
            <input type="submit" :class="classBtn">
        </div>
    </form>
</template>

<script setup>
        import {ref , defineProps , computed} from "vue";
        const email = ref("")
        const password = ref("")

        const props = defineProps({ btn : String , action : String})

        const classBtn = computed(() => {
            return `btn btn-${props.btn}`;
        })

        function submit (){
            const identifiants = {
                email : email.value,
                password : password.value
            }
            console.log(identifiants , props.action);
        }
        // créer un nouveau store :
        // userStore 
        // state : {}
        // action //
        // add => actions 
        // requête POST auprès de la base de données pour ajouter un nouveau profil user 
        // ajouter des vérifications avant traitement (Joi)
        // 
</script>