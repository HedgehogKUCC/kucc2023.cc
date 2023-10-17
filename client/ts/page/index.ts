import { createApp, ref } from 'vue';

createApp({
  setup() {
    const message = 'hello vue 123456';

    const count = ref(0);

    return {
      message,
      count,
    }
  }
}).mount('#app');
