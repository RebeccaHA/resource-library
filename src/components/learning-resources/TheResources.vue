<template>
  <div>
    <card>
      <ui-button @click="selectTab('stored-resources')" :mode="storedButtonMode">Stored Resources</ui-button>
      <ui-button @click="selectTab('add-resource')" :mode="addButtonMode">Add Resources</ui-button>
    </card>
    <component :is="isSelected"></component>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      isSelected: 'stored-resources',
      resources: [
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
  },
  computed: {
    storedButtonMode() {
      return this.isSelected === 'stored-resources' ? null : 'flat';
    },
    addButtonMode() {
      return this.isSelected === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    selectTab(tab) {
      this.isSelected = tab;
    }
  },
  provide() {
    return {
      resources: this.resources
    };
  }
};
</script>