<template>
  <div>
    <h1>Add Resource</h1>
    <form @submit.prevent="submitForm">
      <label>Title</label>
      <input type="text" v-model="title" />
      <br />
      <label>Description</label>
      <input type="text" v-model="description" />
      <br />
      <label>Link</label>
      <input type="text" v-model="link" />
      <br />
      <UiButton>Submit</UiButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      link: ''
    };
  },
  methods: {
    submitForm() {
      console.log(this.title, this.description, this.link);
    }
  }
};
</script>