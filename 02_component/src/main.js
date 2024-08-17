import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const emitter = mitt();
const app = createApp(App);

// 로그찍는핸들러
emitter.on('*', (type, e) => {console.log(`이벤트 로그 : ${type}, ${e}`)});

// 어느 컴포넌트나 이용할 수 있도록 전역 속성으로 emitter 등록
app.config.globalProperties.emitter = emitter;
app.mount('#app')
