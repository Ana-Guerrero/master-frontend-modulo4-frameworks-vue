<template>
  <div class="img-container">
    <img :src="recipe.imgUrl" :alt="recipe.name" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
}

export default Vue.extend({
  name: "CardImageComponent",
  props: {
    recipe: { required: true },
  } as Props,
});
</script>

<style scoped>
.img-container {
  width: 100%;
}

.img-container img {
  width: 100%;
}
</style>
