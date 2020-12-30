<template>
  <div class="title-container">
    <h1 class="recipe-title">
      {{ recipe.name }}
    </h1>
    <div>
      <v-icon class="edit-icon" @click="navigateToEdit(recipe.id)"
        >mdi-pencil</v-icon
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
  navigateToEdit: PropOptions<(id: number) => void>;
}

export default Vue.extend({
  name: "CardTitleComponent",
  props: {
    recipe: { required: true },
    navigateToEdit: { required: true },
  } as Props,
});
</script>

<style scoped>
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 2px solid #3f51b5;
}

.recipe-title {
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;
}

.edit-icon::after {
  opacity: 0 !important;
}
</style>
