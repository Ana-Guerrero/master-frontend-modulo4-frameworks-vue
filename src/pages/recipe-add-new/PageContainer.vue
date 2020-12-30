<template>
  <recipe-add-new-page
    v-bind="{
      recipe,
      recipeError,
      onUpdateRecipe,
      onAddItemToArray,
      onSave,
      closeSnackbar,
      onRemoveItemFromArray,
      snackbarState,
      snackbarColor,
      snackbarText,
      navigateBack,
      handleFileInput,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import RecipeAddNewPage from "./Page.vue";
import { Recipe } from "../../common/model";
import { fetchRecipeById, save } from "../../rest-api/api/recipe";
import { saveInLocalStorage, getFromLocalStorage } from "../../common/helpers";
import { mapRecipeModelToVm, mapRecipeVmToModel } from "./mapper";
import { createEmptyRecipe, createEmptyRecipeError } from "./viewModel";
import { validations } from "./validations";

export default Vue.extend({
  name: "RecipeAddNewPageContainer",
  components: { RecipeAddNewPage },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
      snackbarState: false,
      snackbarColor: "",
      snackbarText: "",
    };
  },
  methods: {
    onUpdateRecipe(field: string, value: string): void {
      this.recipe = {
        ...this.recipe,
        [field]: value,
      };
      this.validateRecipeField(field, value);
    },
    updateRecipeError(field: string, result): void {
      this.recipeError = {
        ...this.recipeError,
        [field]: result,
      };
    },
    onSave(): void {
      validations.validateForm(this.recipe).then((result) => {
        if (result.succeeded) {
          // To save the recipe in API
          // const recipe = mapRecipeVmToModel(this.recipe);
          // save(recipe)
          //   .then((message) => {
          //     this.$router.back();
          //     this.saveRecipeToLocalStorage(recipe);
          //   })
          //   .catch((error) => {
          //     this.showSnackbarError(error);
          //   });
          this.saveRecipeToLocalStorage(this.recipe);
          this.$router.back();
          window.scrollTo(0, 0);
        } else {
          this.showSnackbarError("");
          this.recipeError = {
            ...this.recipeError,
            ...result.fieldErrors,
          };
        }
      });
    },
    onAddItemToArray(value: string, field: string): void {
      this.recipe = {
        ...this.recipe,
        [field]: [...this.recipe[field], value],
      };
      this.validateRecipeField(field, this.recipe[field]);
    },
    onRemoveItemFromArray(value: string, field: string): void {
      this.recipe = {
        ...this.recipe,
        [field]: this.recipe[field].filter((item) => item !== value),
      };
      this.validateRecipeField(field, this.recipe[field]);
    },
    validateRecipeField(field, value): void {
      validations
        .validateField(field, value)
        .then((result) => this.updateRecipeError(field, result));
    },
    saveRecipeToLocalStorage(recipe: Recipe): void {
      this.recipe.id = this.generateId();
      const newRecipes = getFromLocalStorage("recipes");
      newRecipes.push(this.recipe);
      saveInLocalStorage("recipes", newRecipes);
    },
    handleFileInput(file: File): void {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.recipe.imgUrl = reader.result as string;
      };
    },
    generateId(): number {
      return Math.ceil(Math.random() * 75433) + Math.ceil(Math.random() * 224);
    },
    // Navigation ======================= \\
    navigateBack(): void {
      this.$router.back();
    },
    // Snackbar ========================== \\
    showSnackbarError(msg: string): void {
      msg
        ? (this.snackbarText = msg)
        : (this.snackbarText = "Check the form again, please");
      this.snackbarColor = "error";
      this.snackbarState = true;
      setTimeout(() => {
        this.snackbarState = false;
      }, 5000);
    },
    closeSnackbar(v: boolean): void {
      this.snackbarState = v;
    },
  },
});
</script>
