<template>
    <div>
<h1>ຮັບລູກຄ້າ</h1>
<v-card height="auto" elevation="0">
    <v-card-title class=" d-flex justify-end pr-15 py-5">
      <v-sheet class="w-25">
    <v-text-field
    class="border"
    color="red"
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="comfortable"
        label="Search..."
        single-line
        hide-details
        variant
      ></v-text-field>
    </v-sheet>
     </v-card-title>

<hr color="#ECEFF1">

    
<v-data-table

    :headers="headers"
    :items="desserts"
    :items-per-page="itemsPerPage"

  > 
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
        headers: [
          {
            align: 'start',
            key: 'ຮູບ',
            sortable: false,
            title: 'ຮູບ',
          },
          { title: 'ຊື່ລູກຄ້າ', key: 'ຊື່ລູກຄ້າ', divider: true ,sortable: true , class: "blue lighten-5"},
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
        ],

//         headerProps: {
//   color: 'primary', // กำหนดสีสำหรับ headers เป็น primary color
//   class: 'custom-header-class' // กำหนด class สำหรับ headers
//   // สามารถกำหนด properties อื่น ๆ ตามต้องการได้
// }
      }
    },
    computed: {
      pageCount () {
        return Math.ceil(this.desserts.length / this.itemsPerPage)
      },
    },
  }
</script>

<style scoped>
.v-data-table-header th {
  background-color: blue;
  color: white;
}
</style>