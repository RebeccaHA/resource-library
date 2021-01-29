<template>
  <div>
    <card>
      <h3>Enter your resource below</h3>
      <form @submit.prevent="submitForm">
        <label>Title:</label>
        <input type="text" v-model="title" />
        <br />
        <label>Description:</label>
        <input type="text" v-model="description" />
        <br />
        <label>Link:</label>
        <input type="url" v-model="link" />
        <br />
        <ui-button type="submit">Submit</ui-button>
      </form>
    </card>
  </div>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: ''
    };
  },
  methods: {
    submitForm() {
      const resource = {
        title: this.title,
        description: this.description,
        link: this.link
      };
      this.addResource(resource);
      console.log(resource);
    }
  }
};
</script>
<style scoped>
input {
  margin: 10px;
  padding: 5px;
}
</style>