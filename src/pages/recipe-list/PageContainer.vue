<template>
  <recipe-list-page
    v-bind="{
      searchText,
      recipes: filteredRecipes,
      onSearch,
      deleteRecipe,
      toggleFavorite,
      navigateToAddNew,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes } from "../../rest-api/api/recipe";
import {
  checkInLocalStorage,
  getFromLocalStorage,
  saveInLocalStorage,
} from "../../common/helpers";
import { Recipe } from "../../common/model";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";
import { mapRecipeListModelToVm } from "./mapper";
import RecipeListPage from "./Page.vue";
import { baseRoutes } from "../../router";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
  },
  data() {
    return {
      recipes: [] as Recipe[],
      searchText: "",
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    // Get recipes from Local Storage if there are some
    if (checkInLocalStorage("recipes")) {
      this.recipes = getFromLocalStorage("recipes");
    } else {
      fetchRecipes()
        .then((recipes) => {
          // Get recipes from API and save them in app and LocalStorage
          this.recipes = mapRecipeListModelToVm(recipes);
          saveInLocalStorage("recipes", recipes);
        })
        .catch((error) => console.log(error));
    }
  },
  methods: {
    onSearch(value: string): void {
      this.searchText = value;
    },
    deleteRecipe(id: number): void {
      if (window.confirm("Are you sure to delete this recipe?")) {
        const newRecipes = this.recipes.filter((x) => x.id !== id);
        this.recipes = newRecipes;
        saveInLocalStorage("recipes", newRecipes);
      }
    },
    toggleFavorite(id: number, value: boolean): void {
      const newRecipes = this.recipes.map((x) =>
        x.id === id ? { ...x, favorite: value } : x
      );
      this.recipes = newRecipes;
      saveInLocalStorage("recipes", newRecipes);
    },
    navigateToAddNew(): void {
      this.$router.push(baseRoutes.addNew);
      window.scrollTo(0, 0);
    },
  },
});
</script>
