<template>
    <div>
        <h2>학과 목록 조회</h2>
        <DepartmentsList :departments = "departments"/>
        <PageNation/>
    </div>
</template>

<script setup>
    import apiClient from '@/api';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import DepartmentsList from '@/components/DepartmentsList.vue';
    import PageNation from '@/components/PageNation.vue';

    const departments = ref([]);
    const currentRoute = useRoute();

    //페이징
    const currentPage = ref(parseInt(currentRoute.query.page) || 1);

    console.log(currentPage.value);
    console.log(parseInt(currentRoute.query.page));
    console.log(parseInt(currentRoute.query.page) || 1);

    // axios 사용 방법
    // const fetchDepartments = () => {
    //     apiClient.get('/departments?page=1&numOfRows=10')
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch(() => {
    //         console.log(error);
    //     });
    // };

    // async /  await
    const fetchDepartments = async (page) => {
        try{
        const response = await apiClient.get(`/departments?page=${page}&numOfRows=10`);
        
        console.log(response);

        departments.value = response.data.result;
        console.log("departments.value", departments.value);

        }catch(error){
            console.log(error)
        }
    };

    onMounted(() => {
        fetchDepartments(currentPage.value);
    });
</script>


<style scoped>
</style>