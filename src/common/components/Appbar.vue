<template>
  <div v-if="authentication">
    <nav class="navbar">
      <v-app-bar app dark color="#3f51b5">
        <div class="flex-container">
          <v-toolbar-title>Recipe App</v-toolbar-title>
          <div class="user-login-container">
            <span class="user-text">Hello, {{ loginName }}</span>
            <v-btn elevation="0" light small @click="handleLogOut"
              >Log out</v-btn
            >
          </div>
        </div>
      </v-app-bar>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes } from "../../router";
import {
  checkInLocalStorage,
  saveInLocalStorage,
  getFromLocalStorage,
  deleteFromLocalStorage,
} from "../helpers";

export default Vue.extend({
  name: "AppbarComponent",
  data() {
    return {
      loginName: "",
      authentication: false,
    };
  },
  created() {
    if (checkInLocalStorage("login")) {
      this.authentication = true;
      this.loginName = getFromLocalStorage("login").name;
    } else {
      this.authentication = false;
    }
  },
  methods: {
    handleLogOut(): void {
      deleteFromLocalStorage("recipes");
      deleteFromLocalStorage("login");
      localStorage.clear();
      this.authentication = false;
      this.$router.push(baseRoutes.login);
    },
  },
});
</script>
<style scoped>
.navbar {
  position: absolute;
  top: 0;
  z-index: 2000;
}

.flex-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.user-login-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-text {
  margin: 0 12px;
}
</style>
