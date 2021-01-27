import { createApp } from 'vue';
import App from '@/App';
import Card from '@/components/UI/Card';

const app = createApp(App);
app.component('card', Card);
app.mount('#app');
