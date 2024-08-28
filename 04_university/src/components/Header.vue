<template>
    <header>
        <!-- 
            명명된 라우터의 경우에는 v-bind를 이용해서 to 속성에 문자열이 아닌 객체를 바인딩 해야 한다.
        -->
        <ul class="nav">
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{name: 'home'}">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{name: 'departments'}">학과 목록 조회</RouterLink>
            </li>
            <!-- <li class="nav-item">
                <RouterLink class="nav-link" :to="{name: 'departments/no', params: {no : '033'}, query:{name:'홍길동', age:34}}">
                    학과 상세 조회
                </RouterLink>
            </li> -->
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{name: 'departments/add'}">학과 등록</RouterLink>
            </li>
        </ul>

        <!-- <ul class="nav">
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/departments">학과 목록 조회</RouterLink>
            </li>
        </ul> -->

    </header>
</template>

<script setup>

</script>
