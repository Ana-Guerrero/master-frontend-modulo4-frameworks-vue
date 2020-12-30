<template>
  <div class="btn-container">
    <v-btn type="button" color="error" @click.prevent="navigateBack"
      >Cancel</v-btn
    >
    <v-btn type="button" color="success" @click.prevent="handleOnSave"
      >Save</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Props {
  navigateBack: PropOptions<() => void>;
  handleOnSave: PropOptions<() => void>;
}

export default Vue.extend({
  name: "FormButtonsComponent",
  props: {
    navigateBack: { required: true },
    handleOnSave: { required: true },
  } as Props,
});
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
}

.btn-container button {
  margin: 0 10px;
}
</style>
