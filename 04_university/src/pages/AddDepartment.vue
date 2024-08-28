<template>
    <main>
        <h2>학과 등록</h2>
        <DepartmentForm submitButtonText="학과 등록" :initFormData="initFormSubmit"
            @form-submit="formSubmit"/>
    </main>
</template>

<script setup>
    import apiClinet from '@/api';
    import DepartmentForm from '@/components/DepartmentForm.vue';
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();

    const initFormSubmit = ref({
        name: '',
        category: '',
        openYn: 'N',
        capacity: 0
    });

    const formSubmit = async (formData) => {
        try{
            const response = await apiClinet.post(`/departments`, formData);

            if((response.data.code === 201)){
                alert('정상적으로 등록되었습니다.');

                router.push({name: 'departments/no',params: {no: response.data.result.no}});
            }
        }catch(error){
            console.log(error);
        }
    };
</script>

<style scoped>
</style>