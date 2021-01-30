<template>
  <div>
    <card>
      <ui-button @click="selectTab('stored-resources')" :mode="storedButtonMode">Stored Resources</ui-button>
      <ui-button @click="selectTab('add-resource')" :mode="addButtonMode">Add Resources</ui-button>
    </card>
    <keep-alive>
      <component :is="isSelected"></component>
    </keep-alive>
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
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
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
    },
    addResource(resource) {
      this.resources.unshift(resource);
      this.isSelected = 'stored-resources';
    },
    deleteResource(id) {
      const resIndex = this.resources.findIndex(res => res.id === id);
      this.resources.splice(resIndex, 1);
    }
  }
};
</script>