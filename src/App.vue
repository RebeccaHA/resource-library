<template>
  <ul>
    <li></li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      storedResoures: [
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