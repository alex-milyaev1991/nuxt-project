<template>
  <v-app
    class="no-horizontal-scroll"
    :style="{ background: $vuetify.theme.themes['light'].background }"
  >
    <v-main class="solle-main">
      <v-container class="pa-0 d-flex flex-column" fluid style="height: 100%">
        <v-col class="pa-0 mx-auto flex-grow-1 pb-14">
          <nuxt />
          <br />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'BlankLayout',
}
</script>

<style lang="scss" scoped>
.no-horizontal-scroll {
  overflow-x: hidden;
  position: relative;
}
</style>
