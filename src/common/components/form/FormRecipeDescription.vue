<template>
  <div>
    <h3>Select a description for the recipe</h3>
    <div class="form-field">
      <v-textarea
        label="Description"
        filled
        placeholder="Description...."
        rows="10"
        :value="recipe.description"
        :rules="[resultRecipeFieldError('description')]"
        :no-resize="true"
        @input="(value) => onUpdateRecipe('description', value)"
      ></v-textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../model";

interface Props {
  recipe: PropOptions<Recipe>;
  resultRecipeFieldError: PropOptions<(field: string) => boolean | string>;
  onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
}

export default Vue.extend({
  name: "FormRecipeDescriptionComponent",
  props: {
    recipe: { required: true },
    resultRecipeFieldError: { required: true },
    onUpdateRecipe: { required: true },
  } as Props,
});
</script>

<style scoped>
.form-field {
  border: 1px solid #424242;
  padding: 25px 25px 0 25px;
  margin-bottom: 40px;
}

h3 {
  color: #424242;
}
</style>
