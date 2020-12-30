<template>
  <recipe-edit-page
    v-bind="{
      recipe,
      recipeError,
      onUpdateRecipe,
      onAddItemToArray,
      onRemoveItemFromArray,
      onSave,
      closeSnackbar,
      snackbarState,
      snackbarColor,
      snackbarText,
      navigateBack,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import RecipeEditPage from "./Page.vue";
import { Recipe } from "../../common/model";
import { fetchRecipeById, save } from "../../rest-api/api/recipe";
import {
  saveInLocalStorage,
  getFromLocalStorage,
  getRecipeById,
} from "../../common/helpers";
import { mapRecipeModelToVm, mapRecipeVmToModel } from "./mapper";
import { createEmptyRecipe, createEmptyRecipeError } from "./viewModel";
import { validations } from "./validations";

export default Vue.extend({
  name: "RecipeEditPageContainer",
  components: { RecipeEditPage },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
      snackbarState: false,
      snackbarColor: "",
      snackbarText: "",
    };
  },
  beforeMount() {
    const id = Number(this.id || 0);
    const recipes = getFromLocalStorage("recipes");
    getRecipeById(recipes, id)
      .then((recipe) => {
        this.recipe = mapRecipeModelToVm(recipe);
      })
      .catch((error) => console.log(error));

    // To get the recipe from the api
    // fetchRecipeById(id)
    //   .then((recipe) => {
    //     this.recipe = mapRecipeModelToVm(recipe);
    //   })
    //   .catch((error) => console.log(error));
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
      const recipes = getFromLocalStorage("recipes");
      const newRecipes = recipes.map((x) => (x.id === recipe.id ? recipe : x));
      saveInLocalStorage("recipes", newRecipes);
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
