<template>
  <div>
    <div class="flex-container">
      <span class="difficulty-text">{{ recipe.difficulty }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
}

export default Vue.extend({
  name: "CardDetailsComponent",
  props: {
    recipe: { required: true },
  } as Props,
});
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  margin-right: 5px;
}
</style>
