<template>
  <app-layout>
    <v-card>
      <div class="card-header">
        <v-card-title class="text-h4">
          Recipes
        </v-card-title>
        <v-btn color="#3f51b5" @click="navigateToAddNew" outlined
          >Add new<v-icon color="#3f51b5">mdi-plus</v-icon></v-btn
        >
      </div>
      <v-card-text>
        <search-bar-component v-bind="{ searchText, onSearch }" />
        <card-component v-bind="{ recipes, deleteRecipe, toggleFavorite }" />
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../common/layouts";
import { Recipe } from "../../common/model";
import { SearchBarComponent } from "./components";
import { CardComponent } from "./components";

interface Props {
  navigateToAddNew: PropOptions<() => void>;
  deleteRecipe: PropOptions<(id: number) => void>;
  recipes: PropOptions<Recipe[]>;
  searchText: PropOptions<string>;
  onSearch: PropOptions<(value: string) => void>;
  toggleFavorite: PropOptions<(id: number, value: boolean) => void>;
}

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, CardComponent, SearchBarComponent },
  props: {
    navigateToAddNew: { required: true },
    deleteRecipe: { required: true },
    recipes: { required: true },
    searchText: String,
    onSearch: { required: true },
    toggleFavorite: { required: true },
  } as Props,
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}
</style>
