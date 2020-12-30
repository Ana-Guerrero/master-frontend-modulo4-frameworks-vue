<template>
  <v-card class="card">
    <card-image-component :recipe="recipe" />
    <card-title-component v-bind="{ recipe, navigateToEdit }" />
    <div class="recipe-text-container">
      <p class="recipe-description">
        {{ recipe.description }}
      </p>
      <div class="ingredients-and-detail-container">
        <card-ingredient-list :recipe="recipe" />
        <card-details-component :recipe="recipe" />
      </div>
      <card-step-list :recipe="recipe" />
    </div>
    <v-divider></v-divider>
    <div class="btn-container">
      <v-btn small color="primary" @click="navigateBack">Go back</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";
import CardImageComponent from "./CardImage.vue";
import CardTitleComponent from "./CardTitle.vue";
import CardIngredientList from "./CardIngredientList.vue";
import CardStepList from "./CardStepList.vue";
import CardDetailsComponent from "./CardDetails.vue";

interface Props {
  recipe: PropOptions<Recipe>;
  navigateBack: PropOptions<() => void>;
  navigateToEdit: PropOptions<(id: number) => void>;
}

export default Vue.extend({
  name: "cardComponent",
  components: {
    CardImageComponent,
    CardTitleComponent,
    CardIngredientList,
    CardDetailsComponent,
    CardStepList,
  },
  props: {
    recipe: { required: true },
    navigateBack: { required: true },
    navigateToEdit: { required: true },
  } as Props,
});
</script>

<style scoped>
.card {
  width: 70%;
  margin: 0 auto;
  padding: 20px;
}

.recipe-text {
  width: 100%;
  margin-top: 15px;
}

.recipe-description {
  margin-top: 30px;
}

.ingredients-and-detail-container {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0 12px 0;
}
</style>
