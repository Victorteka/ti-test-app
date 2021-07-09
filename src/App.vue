<template>
  <v-app>
    <div class="overflow-hidden">
      <v-app-bar
        absolute
        color="#43a047"
        dark
        shrink-on-scroll
        prominent
        src="./assets/nairobi.jpeg"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-5"
        scroll-threshold="500"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-app-bar-title>Touch Inspiration Employees list</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="100vh"
    >
      <v-container>
        <v-main style="padding-top: 125px">
          <router-view />
        </v-main>
      </v-container>
    </v-sheet>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purle--text text--accent-4">
          <v-list-item
            v-for="(item, index) in drawerItems"
            :key="index"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    drawerItems: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "About", icon: "mdi-information", to: "/about" },
    ],
  }),
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");
* {
  font-family: "Lato", sans-serif;
}
html {
  overflow-y: auto;
}
</style>