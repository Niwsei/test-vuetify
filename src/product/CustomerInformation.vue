<template>
    <div>
<h1>ຂໍ້ມູນລູກຄ້າ</h1>


<v-card  elevation="0">
  <v-container>
    <v-row class="d-flex justify-end mb-5">
    <v-col cols="3">
    <v-text-field
        v-model="search"
        class="border"
        prepend-inner-icon="mdi-magnify"
        variant
        density="compact"
        label="Search..."
        single-line
        flat
        hide-details
      ></v-text-field>
    </v-col>
     </v-row>



    
<v-data-table
    v-model:page="page"
    :headers="headers"
    :items="desserts"
    :items-per-page="itemsPerPage"
  >
    <!-- <template v-slot:top>
      <v-text-field
        :model-value="itemsPerPage"
        class="pa-2"
        hide-details
        label="Items per page"
        min="-1"
        max="15"
        type="number"
        @update:model-value="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </template> -->

    
    <template v-slot:item.print="{ item } ">
      <v-btn  class="pb-8 pt-4 my-4 bg-green-accent-3 text-grey-lighten-5" 
      elevation="0"
        v-model="item.print"
        readonly
      >ລາຍລະອຽດ</v-btn>
    </template>

    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
  </v-data-table>
</v-container>
</v-card>
   </div>
</template>

<script >
export default {
    data () {
      return {
        // page: 1,
        // itemsPerPage: 5,
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: ' ລ/ດ',
          },
          { title: 'ຮູບ', key: 'ຮູບ' },
          { title: 'ຊື່ລູກຄ້າ', key: 'ຊື່ລູກຄ້າ' },
          { title: 'ອາຍຸ ', key: 'ອາຍຸ' },
          { title: 'ເບີໂທ ', key: 'ເບີໂທ' },
          { title: 'ເບີວອດແອັບ ', key: 'ເບີວອດແອັບ' },
          { title: 'ບ້ານ ', key: 'ບ້ານ' },
          { title: 'ເມືອງ ', key: 'ເມືອງ' },
          { title: 'ເເຂວງ ', key: 'ເເຂວງ' },
          { title: 'ເລກບັດປະຈຳຕົວ ', key: 'ເລກບັດປະຈຳຕົວ' },
          { title: 'ເລກປື້ມສຳມະໂນຄົວ ', key: 'ເລກປື້ມສຳມະໂນຄົວ' },
          { title: 'print ', key: 'print' ,value:'print'},
        ],
        desserts: [
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ເລກບັດປະຈຳຕົວ: 1,
            ເລກປື້ມສຳມະໂນຄົວ: 1,
            print:"summit"
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ເລກບັດປະຈຳຕົວ: 1,
            ເລກປື້ມສຳມະໂນຄົວ: 1,
            print:"summit"
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ເລກບັດປະຈຳຕົວ: 1,
            ເລກປື້ມສຳມະໂນຄົວ: 1,
            print:"summit"
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ເລກບັດປະຈຳຕົວ: 1,
            ເລກປື້ມສຳມະໂນຄົວ: 1,
            print:"summit"
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ເລກບັດປະຈຳຕົວ: 1,
            ເລກປື້ມສຳມະໂນຄົວ: 1,
            print:"summit"
          },
          

          
        ],
      }
    },
    computed: {
      // pageCount () {
      //   return Math.ceil(this.desserts.length / this.itemsPerPage)
      // },
    },
  }
</script>

<style lang="scss" scoped>

</style>