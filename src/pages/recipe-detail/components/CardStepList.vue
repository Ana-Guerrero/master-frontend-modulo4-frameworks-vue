<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../../../common/model";

interface Props {
  recipe: PropOptions<Recipe>;
}

export default Vue.extend({
  name: "CardStepList",
  props: {
    recipe: { required: true },
  } as Props,
});
</script>

<style scoped>
.steps-title {
  font-weight: 700;
}

.recipe-steps {
  list-style: none;
  margin: 0 0 30px 0;
  padding: 0;
}

.step-container {
  display: flex;
  justify-content: flex-start;
  height: min-content;
  align-items: baseline;
  margin-bottom: 15px;
}

.step-number {
  font-size: 20px;
  color: #3f51b5;
  margin: 0 10px 0 0;
  padding: 0;
}

.step {
  max-width: 100%;
  height: max-content;
  border-left: 2px solid #3f51b5;
  padding: 0 0 0 10px;
}
</style>
