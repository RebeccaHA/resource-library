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
        <input type="text" v-model="link" />
        <br />
        <ui-button>Submit</ui-button>
      </form>
    </card>
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
<style scoped>
input {
  margin: 10px;
  ,padding: 5px;
}
</style>