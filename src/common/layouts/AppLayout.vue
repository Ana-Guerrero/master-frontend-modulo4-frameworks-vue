<template>
  <div>
    <appbar-component />
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { AppbarComponent } from "../components";

export default Vue.extend({
  name: "AppLayout",
  components: { AppbarComponent },
});
</script>
