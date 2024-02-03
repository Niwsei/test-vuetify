<template>
    <div>
<h1>ຮັບລູກຄ້າ</h1>
<v-card class="pt-10" flat>
    <v-card-title class=" d-flex align-center pe-2">

    <v-spacer></v-spacer>
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



    
<v-data-table
    v-model:page="page"
    :headers="headers"
    :items="desserts"
    :items-per-page="itemsPerPage"
  >
    <template v-slot:top>
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
    </template>

    
    <template v-slot:item.print="{ item } ">
      <v-btn color="primary"
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
</v-card>

  </div>
</template>

<script >

export default {
    data () {
      return {
        page: 1,
        itemsPerPage: 5,
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
          { title: 'ມູນຄ່າຫລັກຊັບ ', key: 'ເລກບັດປະຈຳຕົວ' },
          { title: 'ມູນຄ່າຄ້ຳປະກັນ ', key: 'ເລກປື້ມສຳມະໂນຄົວ' },
          { title: 'ກົດຮັບ ', key: 'print' ,value:'print'},
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
      pageCount () {
        return Math.ceil(this.desserts.length / this.itemsPerPage)
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>