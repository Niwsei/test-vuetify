<template>
    <div>
<h1>ຂໍປ່ອຍກູ້</h1>

<v-card height="auto" elevation="0">
    <v-card-title class=" d-flex align-center pe-2">

      <v-row class="d-flex justify-center mt-5">
          <v-col cols="8">
            <p class="d-flex justify-center"><v-icon>mdi-magnify</v-icon>ຄົ້ນຫາຂໍ້ມູນລູກຄ້າ</p>
<v-text-field
    v-model="search"
    prepend-inner-icon="mdi-magnify"
    placeholder="Search..."
    class="border rounded mb-3 mt-2"
              density="comfortable"
              hide-details
              variant
  ></v-text-field>
      </v-col>
        </v-row>
</v-card-title>       

<hr color="#ECEFF1">

  <v-table density="compact" height="auto" class="mt-15">
    <thead>
      <tr>
        <th class="text-left font-weight-black">ຮູບ</th>
        <th class="text-left font-weight-black">ຊື່ລູກຄ້າ</th>
        <th class="text-left font-weight-black">ອາຍຸ</th>
        <th class="text-left font-weight-black">ເບີໂທ</th>
        <th class="text-left font-weight-black">ເບີວອດແອັບ</th>
        <th class="text-left font-weight-black">ບ້ານ</th>
        <th class="text-left font-weight-black">ເມືອງ </th>
        <th class="text-left font-weight-black">ເເຂວງ</th>
        <th class="text-left font-weight-black">ເລກບັດປະຈຳຕົວ</th>
        <th class="text-left font-weight-black">ຂໍປ່ອຍກູ້ </th>
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