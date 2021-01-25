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
import LearningResource from '@/components/learning-resources/LearningResource';
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>