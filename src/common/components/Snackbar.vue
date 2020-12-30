<template>
  <v-snackbar
    class="snackbar"
    v-model="snackbarState"
    :color="snackbarColor"
    :timeout="timeout"
    :top="top"
  >
    {{ snackbarText }}
    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="closeSnackbar(false)">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Props {
  closeSnackbar: PropOptions<(value: boolean) => void>;
  snackbarState: PropOptions<boolean>;
  snackbarColor: PropOptions<string>;
  snackbarText: PropOptions<string>;
}

export default Vue.extend({
  name: "SnackbarComponent",
  props: {
    closeSnackbar: { required: true },
    snackbarState: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
  } as Props,
  data() {
    return {
      timeout: -1,
      top: true,
    };
  },
});
</script>

<style scoped>
.snackbar {
  margin-top: 10px;
}
</style>
