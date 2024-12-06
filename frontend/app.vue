<template>
  <v-app class="bg-grey-lighten-2 overflow-auto">
    <v-app-bar color="primary">
      <template v-slot:prepend>
        <Icon name="carbon:area-custom" size="30" class="ml-4"/>
      </template>
      <v-app-bar-title class="text-uppercase">Custom</v-app-bar-title> </v-app-bar
    ><v-card>
      <div class="d-flex flex-row mt-16">
        <v-tabs direction="vertical">
          <v-tab
            v-for="item in items"
            color="primary"
            :prepend-icon="item.icon"
            :to="item.value"
            :text="item.title"
          ></v-tab
        ></v-tabs>
        <v-divider vertical></v-divider>
        <v-row
          ><v-col><NuxtPage /></v-col
        ></v-row></div
    ></v-card>
  </v-app>
</template>

<script setup>
const items = [
  {
    title: "Home",
    value: "/",
    icon: "mdi-chart-bar-stacked",
  },
];
</script>
