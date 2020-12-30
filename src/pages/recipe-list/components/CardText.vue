<template>
  <div>
    <h4 class="recipe-title">{{ recipe.name }}</h4>
    <v-divider></v-divider>
    <div class="text-container">
      {{ shortenDescriptionLength(recipe.description) }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
  shortenDescriptionLength: PropOptions<(description: string) => string>;
}

export default Vue.extend({
  name: "CardTextComponent",
  props: {
    recipe: { required: true },
    shortenDescriptionLength: { required: true },
  } as Props,
});
</script>

<style scoped>
.recipe-title {
  margin-bottom: 5px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #263238;
}

.text-container {
  height: 70px;
  margin: 10px 0;
  overflow: hidden;
}
</style>
