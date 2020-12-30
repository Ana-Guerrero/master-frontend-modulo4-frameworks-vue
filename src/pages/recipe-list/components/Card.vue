<template>
  <v-row no-gutters>
    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" sm="4">
      <v-card class="pa-2 card">
        <card-image-component :recipe="recipe" />
        <card-text-component v-bind="{ recipe, shortenDescriptionLength }" />
        <v-divider></v-divider>
        <card-footer-component
          v-bind="{
            recipe,
            navigateToEdit,
            navigateToDetail,
            deleteRecipe,
            toggleFavorite,
          }"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes } from "../../../router";
import { Recipe } from "../../../common/model";
import CardFooterComponent from "./CardFooter.vue";
import CardImageComponent from "./CardImage.vue";
import CardTextComponent from "./CardText.vue";

interface Props {
  recipes: PropOptions<Recipe[]>;
  deleteRecipe: PropOptions<(id: number) => void>;
  toggleFavorite: PropOptions<(id: number, value: boolean) => void>;
}

export default Vue.extend({
  name: "CardComponent",
  components: { CardImageComponent, CardTextComponent, CardFooterComponent },
  props: {
    recipes: { required: true },
    deleteRecipe: { required: true },
    toggleFavorite: { required: true },
  } as Props,
  methods: {
    shortenDescriptionLength(descript: string): string {
      return descript.length > 100
        ? `${descript.slice(0, 130).trim()}...`
        : descript;
    },
    navigateToEdit(id: number): void {
      this.$router.push(`${baseRoutes.recipe}/edit/${id}`);
      window.scrollTo(0, 0);
    },
    navigateToDetail(id: number): void {
      this.$router.push(`${baseRoutes.recipe}/${id}`);
      window.scrollTo(0, 0);
    },
  },
});
</script>

<style scoped>
.card {
  position: relative;
  margin: 10px;
}
</style>
