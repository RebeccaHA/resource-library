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

      <error-message v-if="invalidInput" title="Invalid input" @close="okay">
        <template #default>
          <p>Looks like you forgot to fill in an input field</p>
        </template>
        <template #actions>
          <ui-button @click="okay">Okay</ui-button>
        </template>
      </error-message>
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
      link: '',
      invalidInput: false
    };
  },
  methods: {
    submitForm() {
      if (
        this.title.trim() === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        this.invalidInput = true;
      } else {
        const resource = {
          title: this.title,
          description: this.description,
          link: this.link
        };
        this.addResource(resource);
      }
    },
    okay() {
      this.invalidInput = false;
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