import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixin/logger.js';

const app = createApp(App)

app.mixin(loggerMixin);

app.mount('#app');
