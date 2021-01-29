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
      <error-message v-if="invalidInput">
        <h3>Please fill out all the fields</h3>
        <ui-button>Close</ui-button>
      </error-message>
    </card>
  </div>
</template>

<script>
import ErrorMessage from '@components/UI/ErrorMessage';
export default {
  components: {
    ErrorMessage
  },
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
      if (this.title === '') {
        this.invalidInput === true;
      } else if (this.description === '') {
        this.invalidInput === true;
      } else if (this.link === '') {
        this.invalidInput === true;
      } else {
        const resource = {
          title: this.title,
          description: this.description,
          link: this.link
        };
        this.addResource(resource);
        console.log(resource);
      }
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