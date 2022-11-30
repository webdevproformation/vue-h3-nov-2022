<template>
    <div>
        <h1>Bienvenu</h1>
        <!-- <pre>
            {{ JSON.stringify(articles , null , " ") }}
        </pre> -->
        <div class="row">
            <article v-for="article , index in articles" :key="index" class="col-3">
                <h2 v-more="article.title"></h2>
                <p v-more.body="article.body"></p>
                <RouterLink :to="'/'" class="btn btn-primary">lire la suite ...</RouterLink> 
            </article>
        </div>
    </div>
</template>
<script setup>
// équivalent avec API Composition 
import { ref , onMounted } from "vue"
import { RouterLink } from "vue-router"

let articles = ref([]);
//let articles = reactive([]);

onMounted( () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
            .then(reponse => reponse.json())
            .then(data => articles.value = data)
} )

</script>

<!-- <script>
// api options
    import { RouterLink } from "vue-router"
    export default {
        data : () => {
            return {
                articles : []
            }
        },
        components : {
            "RouterLink" : RouterLink
        },  
        mounted : function(){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(reponse => reponse.json())
            .then(data => this.articles = data)
        }
    }
</script> -->