<template>
  <v-text-field
    placeholder="Search for ingredients comma separated..."
    :value="searchText"
    @input="onSearch"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Props {
  searchText: string;
  onSearch: PropOptions<(value: string) => void>;
}

export default Vue.extend({
  name: "SearchBarComponent",
  props: {
    searchText: { required: true },
    onSearch: { required: true },
  },
});
</script>
