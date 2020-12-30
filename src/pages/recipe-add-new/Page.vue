<template>
  <app-layout>
    <snackbar-component
      v-bind="{ snackbarText, snackbarColor, snackbarState, closeSnackbar }"
    />
    <form-component
      v-bind="{
        recipe,
        recipeError,
        onUpdateRecipe,
        onRemoveItemFromArray,
        onAddItemToArray,
        onSave,
        navigateBack,
        handleFileInput,
      }"
    />
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../common/layouts";
import { SnackbarComponent } from "../../common/components";
import { Recipe } from "../../common/model";
import { RecipeError } from "./viewModel";
import { FormComponent } from "./components";

interface Props {
  recipe: PropOptions<Recipe>;
  recipeError: PropOptions<RecipeError>;
  onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
  onAddItemToArray: PropOptions<(value: string, field: string) => void>;
  onRemoveItemFromArray: PropOptions<(value: string, field: string) => void>;
  navigateBack: PropOptions<() => void>;
  handleFileInput: PropOptions<(file: File) => void>;
  onSave: PropOptions<() => void>;
  closeSnackbar: PropOptions<(value: boolean) => void>;
  snackbarState: PropOptions<boolean>;
  snackbarColor: PropOptions<string>;
  snackbarText: PropOptions<string>;
}

export default Vue.extend({
  name: "RecipeAddNewPage",
  components: { AppLayout, FormComponent, SnackbarComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onAddItemToArray: { required: true },
    onRemoveItemFromArray: { required: true },
    navigateBack: { required: true },
    handleFileInput: { required: true },
    onSave: { required: true },
    closeSnackbar: { required: true },
    snackbarState: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
  },
});
</script>
