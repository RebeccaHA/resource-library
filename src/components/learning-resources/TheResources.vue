<template>
  <div>
    <card>
      <ui-button @click="selectTab('stored-resources')">Stored Resources</ui-button>
      <ui-button @click="selectTab('add-resource')">Add Resources</ui-button>
    </card>
    <component :is="isSelected"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: 'stored-resources'
    };
  },
  methods: {
    selectTab(tab) {
      this.isSelected = tab;
    }
  }
};
</script>