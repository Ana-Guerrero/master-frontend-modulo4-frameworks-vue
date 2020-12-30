<template>
  <div>
    <h3>Select ingredients for the recipe</h3>
    <div class="form-field">
      <v-text-field
        filled
        label="Ingredients"
        placeholder="Add ingredient"
        append-icon="add"
        :value="ingredient"
        @input="(x) => handleItemValue(x, 'ingredient')"
        @click:append="handleAddIngredient(ingredient)"
      />
      <v-alert
        :value="!recipeError.ingredients.succeeded"
        color="error"
        outlined
        >{{ recipeError.ingredients.message }}</v-alert
      >
      <template v-for="(ingredient, index) in recipe.ingredients">
        <v-chip outlined class="ma-2" :key="`${ingredient}_${index}`">
          {{ ingredient }}
          <v-icon
            right
            @click="() => onRemoveItemFromArray(ingredient, 'ingredients')"
            >close</v-icon
          >
        </v-chip>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe, RecipeError } from "../../model";

interface Props {
  recipe: PropOptions<Recipe>;
  ingredient: PropOptions<string>;
  recipeError: PropOptions<RecipeError>;
  handleAddIngredient: PropOptions<(ingredient: string) => void>;
  onRemoveItemFromArray: PropOptions<(value: string, field: string) => void>;
  handleItemValue: PropOptions<(value: string, field: string) => void>;
}

export default Vue.extend({
  name: "FormRecipeIngredientsComponent",
  props: {
    recipe: { required: true },
    ingredient: { required: true },
    recipeError: { required: true },
    handleAddIngredient: { required: true },
    onRemoveItemFromArray: { required: true },
    handleItemValue: { required: true },
  } as Props,
});
</script>

<style scoped>
.form-field {
  border: 1px solid #424242;
  padding: 25px 25px 20px 25px;
  margin-bottom: 40px;
}

h3 {
  color: #424242;
}
</style>
