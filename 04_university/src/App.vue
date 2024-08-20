<template>
  <div class="container">
    <!-- 요청된 uri 경로와 router 객체의 routes 배열에 있는 경로를 비교하여
      매칭된 라우트의 컴포넌트를 마운트한다. -->
    <!-- <RouterLink to="/">HOME</RouterLink> -->
    <!-- <br>
    <RouterLink to="/departments">학과 목록 조회</RouterLink>
    <br>
    <RouterLink to="/departments/033">학과 상세 조회</RouterLink> -->
    <Header></Header>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';

</script>

<style scoped>

</style>