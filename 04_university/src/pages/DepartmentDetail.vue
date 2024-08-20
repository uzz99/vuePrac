<template>
    <div>
        <H2>학과 상세 조회</H2>

        <p>{{ currentRoute.fullPath }}</p>
        <p>{{ currentRoute.path }}</p>
        <p>{{ currentRoute.params }}</p>
        <p>{{ currentRoute.query }}</p>
        <p>{{ currentRoute.query.name }}</p>
        <!-- <p>{{ currentRoute.query.age }}</p> -->
        <p>{{ parseInt(currentRoute.query.age) }}</p>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';

    const currentRoute = useRoute();
    
</script>

<style scoped>

</style>