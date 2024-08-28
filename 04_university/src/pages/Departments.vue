<template>
    <div>
        <h2>학과 목록 조회</h2>
        <DepartmentsList :departments = "departments" 
            @delete-department="deleteDepartment"
            @item-click="itemClick"/>
        <PageNation :currentPage="currentPage" :startPage="startPage" :endPage="endPage"
        @change-page="changePage"/>
    </div>
</template>

<script setup>
    import apiClient from '@/api';
    import { ref, onMounted, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import DepartmentsList from '@/components/DepartmentsList.vue';
    import PageNation from '@/components/PageNation.vue';

    const departments = ref([]);
    const currentRoute = useRoute();
    const router = useRouter();

    //페이징
    const currentPage = ref(parseInt(currentRoute.query.page) || 1);
    const startPage = ref(0);// 페이징 된 페이지 중 시작 페이지
    const endPage = ref(0);// 마지막 페이지
    const maxPage = ref(0);// 전체 페이지 중 마지막
    const pageLimit = 5;// 페이지네이션에 보이는 페이지 수
    const listLimit = 10;// 한 페이지에 표시될 리스트의 수

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
        console.log(response.data)
        departments.value = response.data.result;

        maxPage.value = parseInt(Math.ceil(response.data.totalCount / listLimit));

        startPage.value = (pageLimit * parseInt((page - 1) / pageLimit)) +1;
        
        endPage.value = startPage.value + pageLimit - 1;
        // 페이지 수가 10이하..인 경우
        endPage.value = endPage.value > maxPage.value ? maxPage.value : endPage.value;

        }catch(error){
            console.log(error)
        }
    };

    const changePage = (page) => {
        if(page >= 1 && page <= maxPage.value){
            router.push({name: 'departments', query: {page}});
        }
    };

    const deleteDepartment = async (departmentNo) => {
        console.log('departmentNo: ', departmentNo);
        try{
            const response = await apiClient.delete(`/departments/${departmentNo}`);

            if(response.data.code == 200){
                alert('정상적으로 삭제되었습니다.');
                fetchDepartments(currentPage.value);
            }else if(response.data.code == 404){
                alert('존재하지 않는 학과입니다.');
            }else{
                alert('학과 삭제를 실패했습니다.');
            }
        }catch(error){
            console.log(error);
        }

    }
    const itemClick = (departmentNo) => {
        console.log(departmentNo);
    }

    watch(currentRoute, () => {
        currentPage.value = parseInt(currentRoute.query.page) || 1;

        fetchDepartments(currentPage.value);
    });

    onMounted(() => {
        fetchDepartments(currentPage.value);
    });
</script>


<style scoped>
</style>