import { createApp, ref } from 'vue';
createApp({
    setup() {
        const message = 'hello vue';
        const count = ref(0);
        return {
            message,
            count,
        };
    }
}).mount('#app');
