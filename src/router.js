import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    // Profile
    {
      path: "/profiles",
      name: "profile",
      component: () => import("./components/ProfilesList")
    },
    {
      path: "/addProfile",
      name: "add-profile",
      component: () => import("./components/AddProfile")
    },
    {
      path: "/profiles/:id",
      name: "profile-details",
      component: () => import("./components/Profile")
    }
  ]
});
