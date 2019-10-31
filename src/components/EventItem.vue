<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
            <v-list-item-title class="text-wrap">{{ value }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>
<script>
export default {
    props: ['name', 'value']
}
</script>
<style lang="scss" scoped>
    @import '../_variables.scss';
    .v-list-item__subtitle {
        font-family: $font;
    }
    .v-list-item__title {
        font-family: $font;
    }
    
</style>