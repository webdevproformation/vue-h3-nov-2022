<template>
    <button @click="action(id)">+</button> <span>{{ nb }}</span>
</template>

<script>
export default {
    methods : {
        action : function(id){
            this.$emit("augmenter" , id)
        }
    },  
    props : { nb : Number , id: Number },
    emits : ["augmenter"] // nom après le @
}
</script>

<style lang="scss" scoped>

</style>