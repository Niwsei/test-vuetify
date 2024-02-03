<template>
  <v-dialog width="500">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"> </v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>