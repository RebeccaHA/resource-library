<template>
  <the-header title="Learning Resources"></the-header>
  <stored-resources></stored-resources>
</template>
<script>
import StoredResources from '@/components/learning-resources/StoredResources';
import TheHeader from '@/components/layouts/TheHeader';

export default {
  components: {
    StoredResources,
    TheHeader
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