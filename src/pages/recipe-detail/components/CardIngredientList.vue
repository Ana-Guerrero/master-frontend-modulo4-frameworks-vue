<template>
  <div>
    <p class="ingredient-title">Ingredients:</p>
    <ul class="ingredient-list">
      <template v-for="(ingredient, index) in recipe.ingredients">
        <li :key="`${ingredient}-${index}`" class="ingredient-container">
          <div class="ingredient">{{ ingredient }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
}

export default Vue.extend({
  name: "CardIngredientList",
  props: {
    recipe: { required: true },
  } as Props,
});
</script>

<style scoped>
.ingredient-title {
  font-weight: 700;
}

.ingredient-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.ingredient-container {
  display: flex;
  align-items: baseline;
}

.ingredient {
  text-transform: capitalize;
}
</style>
