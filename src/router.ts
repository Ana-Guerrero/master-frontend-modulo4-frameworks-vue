import Router, { RouteConfig } from "vue-router";
import { checkInLocalStorage } from "./common/helpers";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe-list";
import { EditRecipePageContainer } from "./pages/recipe-edit";
import { RecipeDetailPageContainer } from "./pages/recipe-detail";
import { RecipeAddNewPageContainer } from "./pages/recipe-add-new";

interface BaseRoutes {
  root: string;
  login: string;
  recipe: string;
  detail: string;
  edit: string;
  addNew: string;
}

export const baseRoutes: BaseRoutes = {
  root: "/",
  login: "/login",
  recipe: "/recipe",
  addNew: "/recipe/add",
  edit: "/recipe/edit/:id",
  detail: "/recipe/:id",
};

const routes: RouteConfig[] = [
  { path: baseRoutes.root, name: "root", redirect: baseRoutes.login },
  { path: baseRoutes.login, name: "login", component: LoginPageContainer },
  {
    path: baseRoutes.recipe,
    name: "recipe-list",
    component: RecipeListPageContainer,
  },
  {
    path: baseRoutes.addNew,
    name: "recipe-add-new",
    component: RecipeAddNewPageContainer,
  },
  {
    path: baseRoutes.edit,
    name: "recipe-edit",
    component: EditRecipePageContainer,
    props: true,
  },
  {
    path: baseRoutes.detail,
    name: "recipe-detail",
    component: RecipeDetailPageContainer,
    props: true,
  },
];

export const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  const authentication: boolean = checkInLocalStorage("login");
  const privatePages: string[] = [
    "recipe-list",
    "recipe-edit",
    "recipe-detail",
    "recipe-add-new",
  ];

  return privatePages.findIndex((x) => x === to.name) !== -1 && !authentication
    ? next(baseRoutes.login)
    : next();
});
