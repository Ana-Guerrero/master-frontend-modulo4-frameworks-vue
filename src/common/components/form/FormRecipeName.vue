<template>
  <div>
    <h3>Select name for the recipe</h3>
    <div class="form-field">
      <v-text-field
        filled
        label="Name"
        :value="recipe.name"
        :rules="[resultRecipeFieldError('name')]"
        @input="(name) => onUpdateRecipe('name', name)"
      />
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
  name: "FormRecipeNameComponent",
  props: {
    recipe: { required: true },
    resultRecipeFieldError: { required: true },
    onUpdateRecipe: { required: true },
  } as Props,
  data() {
    return {
      difficultyLevels: ["Easy", "Medium", "Difficult"],
    };
  },
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
