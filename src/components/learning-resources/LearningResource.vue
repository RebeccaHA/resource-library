<template>
  <li>
    <card>
      <header>
        <h3>{{title}}</h3>
        <ui-button>Delete</ui-button>
      </header>

      <p>{{description}}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </card>
  </li>
</template>

<script>
import UiButton from '@/components/UI/UiButton';
export default {
  props: ['title', 'description', 'id', 'link'],
  components: {
    UiButton
  }
};
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>