<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['mode']
};
</script>

<style scoped>
button {
  font-family: inherit;

  border-radius: 5px;
  padding: 3px;
  color: white;
  background-color: black;
}
button:hover,
button:active {
  background-color: #b57507;
  border-color: #b57507;
}

.flat {
  background-color: transparent;
  color: black;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #b57507;
  border-color: #b57507;
  color: white;
}
</style>