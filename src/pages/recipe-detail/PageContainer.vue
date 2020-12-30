<template>
  <recipe-detail-page v-bind="{ recipe, navigateBack, navigateToEdit }" />
</template>

<script lang="ts">
import Vue from "vue";
// import { fetchRecipeById } from "../../rest-api/api/recipe";
import { baseRoutes } from "../../router";
import { getRecipeById, getFromLocalStorage } from "../../common/helpers";
// import { mapRecipeModelToVm } from "./mapper";
import { createEmptyRecipe } from "./viewModel";
import RecipeDetailPage from "./Page.vue";

export default Vue.extend({
  name: "RecipeDetailPageContainer",
  components: { RecipeDetailPage },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
    };
  },
  beforeMount() {
    const id = Number(this.id || 0);
    const recipes = getFromLocalStorage("recipes");
    getRecipeById(recipes, id)
      .then((recipe) => {
        this.recipe = recipe;
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
    navigateBack() {
      this.$router.back();
      window.scrollTo(0, 0);
    },
    navigateToEdit(id: number): void {
      this.$router.push(`${baseRoutes.recipe}/edit/${id}`);
      window.scrollTo(0, 0);
    },
  },
});
</script>
