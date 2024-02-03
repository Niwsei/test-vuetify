<template>
    <div>
<h1>ຂໍປ່ອຍກູ້</h1>

<v-card>
    <v-card-title class=" d-flex align-center pe-2">


<v-text-field
    v-model="search"
    prepend-inner-icon="mdi-magnify"
    density="compact"
    label="Search"
    single-line
    flat
    hide-details
    variant="solo-filled"
  ></v-text-field>
</v-card-title>


  <v-table density="compact" height="auto" class="mt-15">
    <thead>
      <tr>
        <th class="text-left">ຮູບ</th>
        <th class="text-left">ຊື່ລູກຄ້າ</th>
        <th class="text-left">ອາຍຸ</th>
        <th class="text-left">ເບີໂທ</th>
        <th class="text-left">ເບີວອດແອັບ</th>
        <th class="text-left">ບ້ານ</th>
        <th class="text-left">ເມືອງ </th>
        <th class="text-left">ເເຂວງ</th>
        <th class="text-left">ເລກບັດປະຈຳຕົວ</th>
        <th class="text-left">ຂໍປ່ອຍກູ້ </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</v-card>

 </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>