<template>
  <v-app>
    <v-main>
        <v-app-bar elevation="4">
            <v-app-bar-title class="flex text-center">AIVIA(test)</v-app-bar-title>
        </v-app-bar>
        <v-container>
            <router-view />
        </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
}
</script>
