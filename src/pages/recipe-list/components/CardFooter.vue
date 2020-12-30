<template>
  <div class="footer">
    <v-btn outlined small color="#3f51b5" @click="navigateToDetail(recipe.id)"
      >See more</v-btn
    >
    <div class="icon-container">
      <v-icon class="icon" @click="navigateToEdit(recipe.id)"
        >mdi-pencil</v-icon
      >
      <v-icon class="icon" color="#3f51b5" @click="deleteRecipe(recipe.id)"
        >mdi-trash-can-outline</v-icon
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
  deleteRecipe: PropOptions<(id: number) => void>;
  navigateToEdit: PropOptions<(id: number) => void>;
  navigateToDetail: PropOptions<(id: number) => void>;
  toggleFavorite: PropOptions<(id: number, value: boolean) => void>;
}

export default Vue.extend({
  name: "CardFooterComponent",
  props: {
    recipe: { required: true },
    deleteRecipe: { required: true },
    navigateToEdit: { required: true },
    navigateToDetail: { required: true },
    toggleFavorite: { required: true },
  } as Props,
});
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 2px 0;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
}

@media only screen and (min-width: 600px) and (max-width: 800px) {
  .footer {
    flex-direction: column-reverse;
  }
  .icon-container {
    margin-bottom: 10px;
  }
}

.icon {
  margin-right: 10px;
}

.icon::after {
  opacity: 0 !important;
}

.icon:last-of-type {
  margin-right: 0px;
}
</style>
