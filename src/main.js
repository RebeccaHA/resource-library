import { createApp } from 'vue';
import App from '@/App';
import Card from '@/components/UI/Card';
import UiButton from '@/components/UI/UiButton';
import ErrorMessage from '@/components/UI/ErrorMessage';

const app = createApp(App);
app.component('card', Card);
app.component('ui-button', UiButton);
app.component('error-message', ErrorMessage);
app.mount('#app');
