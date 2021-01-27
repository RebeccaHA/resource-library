import { createApp } from 'vue';
import App from '@/App';
import Card from '@/components/UI/card';

const app = createApp(App).mount('#app');

app.component('card', Card);
