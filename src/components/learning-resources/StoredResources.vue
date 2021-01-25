<template>
  <ul>
    <learning-resource
      v-for="storedResource in storedResources"
      :key="storedResource.id"
      :title="storedResource.title"
      :description="storedResource.description"
      :link="storedResource.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components: {
    LearningResource
  },
  data() {
    return {
      storedResources: [
        {
          id: 'Official guide',
          title: 'Official guide',
          description: 'The Official vue documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'Google',
          title: 'Google',
          description: 'The Official google',
          link: 'http://www.google.com'
        }
      ]
    };
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>