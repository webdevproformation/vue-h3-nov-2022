<template>
    <h1>votre Panier</h1>
    <TableauPanier />
    <div class="text-end">
        <RouterLink :to="{name:'identification'}" class="btn btn-info">s'identifier</RouterLink>
    </div>
</template>
<script setup>
import TableauPanier from './TableauPanier.vue';
import { RouterLink } from "vue-router"
</script>