<template>
    <div>
<h1>ລາຍການອານຸມັດປ່ອຍກູ້</h1>
<v-card height="auto" elevation="0">

<v-card-text class=" d-flex justify-end " >
<v-sheet class="w-25 mt-3 mr-3">
<v-text-field
    class="border rounded"
    variant
    density="comfortable"
    hide-details
    v-model="search"
    prepend-inner-icon="mdi-magnify"
    placeholder="Search..."
  ></v-text-field>
</v-sheet>
</v-card-text>

<hr  color="#ECEFF1">

<v-card-item>
<v-data-table
v-model:page="page"
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
</v-card-item>


</v-card>

</div>
</template>

<script >

export default {
data() {
    return {
        search:"",
        register : ["ລົງທະບຽນ" ,"ຜ່ານການກວດສອບ" ,"ບໍ່ຜ່ານການກວດສອບ" , "ອານຸມັດເເລ້ວ" , "ບໍ່ອານຸມັດ"],



        page: 1,
    itemsPerPage: 5,
    headers: [
      {
        align: 'start',
        key: 'name',
        sortable: false,
        title: 'ຮູບ',
      },
      { title: 'ຊື່ລູກຄ້າ', key: 'ຊື່ລູກຄ້າ' },
      { title: 'ອາຊີບ', key: 'ອາຊີບ' },
      { title: 'ອາຍຸ ', key: 'ອາຍຸ' },
      { title: 'ເບີໂທ ', key: 'ເບີໂທ' },
      { title: 'ເຫດຜົນປ່ອຍກູ້ ', key: 'ເຫດຜົນປ່ອຍກູ້' },
      { title: 'ມູນຄ່າປ່ອຍກູ້ ', key: 'ມູນຄ່າປ່ອຍກູ້' },
      { title: 'ສະກຸນເງີນ ', key: 'ສະກຸນເງີນ' },
      { title: 'ມູນຄ່າຄ້ຳປະກັນ', key: 'ມູນຄ່າຄ້ຳປະກັນ' },
      { title: 'ສະກຸນເງີນ ', key: 'ສະກຸນເງີນ' },
      { title: 'ສະຖານະ ', key: 'ສະຖານະ' ,value:'ສະຖານະ'},
      { title: 'ກວດສອບ ', key: 'ກວດສອບ' ,value:'ກວດສອບ'},
    ],
    desserts: [
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ອາຊີບ:"ນັກສຶກສາ"    ,
        ອາຍຸ: 20,
        ເບີໂທ: "02077912018",
        ເຫດຜົນປ່ອຍກູ້: "ອ້າຍມີເຫດຜົນ",
        ມູນຄ່າປ່ອຍກູ້: "100,000,000",
        ສະກຸນເງີນ: "ກີບ",
        ມູນຄ່າຄ້ຳປະກັນ: "ກີບ",
        ສະກຸນເງີນ: "ກີບ",
        ສະຖານະ:"sucess",
        ກວດສອບ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ອາຊີບ:"ນັກສຶກສາ"    ,
        ອາຍຸ: 20,
        ເບີໂທ: "02077912018",
        ເຫດຜົນປ່ອຍກູ້: "ອ້າຍມີເຫດຜົນ",
        ມູນຄ່າປ່ອຍກູ້: "100,000,000",
        ສະກຸນເງີນ: "ກີບ",
        ມູນຄ່າຄ້ຳປະກັນ: "ກີບ",
        ສະກຸນເງີນ: "ກີບ",
        ສະຖານະ:"sucess",
        ກວດສອບ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ອາຊີບ:"ນັກສຶກສາ"    ,
        ອາຍຸ: 20,
        ເບີໂທ: "02077912018",
        ເຫດຜົນປ່ອຍກູ້: "ອ້າຍມີເຫດຜົນ",
        ມູນຄ່າປ່ອຍກູ້: "100,000,000",
        ສະກຸນເງີນ: "ກີບ",
        ມູນຄ່າຄ້ຳປະກັນ: "ກີບ",
        ສະກຸນເງີນ: "ກີບ",
        ສະຖານະ:"sucess",
        ກວດສອບ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ອາຊີບ:"ນັກສຶກສາ"    ,
        ອາຍຸ: 20,
        ເບີໂທ: "02077912018",
        ເຫດຜົນປ່ອຍກູ້: "ອ້າຍມີເຫດຜົນ",
        ມູນຄ່າປ່ອຍກູ້: "100,000,000",
        ສະກຸນເງີນ: "ກີບ",
        ມູນຄ່າຄ້ຳປະກັນ: "ກີບ",
        ສະກຸນເງີນ: "ກີບ",
        ສະຖານະ:"sucess",
        ກວດສອບ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ອາຊີບ:"ນັກສຶກສາ"    ,
        ອາຍຸ: 20,
        ເບີໂທ: "02077912018",
        ເຫດຜົນປ່ອຍກູ້: "ອ້າຍມີເຫດຜົນ",
        ມູນຄ່າປ່ອຍກູ້: "100,000,000",
        ສະກຸນເງີນ: "ກີບ",
        ມູນຄ່າຄ້ຳປະກັນ: "ກີບ",
        ສະກຸນເງີນ: "ກີບ",
        ສະຖານະ:"sucess",
        ກວດສອບ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ອາຊີບ:"ນັກສຶກສາ"    ,
        ອາຍຸ: 20,
        ເບີໂທ: "02077912018",
        ເຫດຜົນປ່ອຍກູ້: "ອ້າຍມີເຫດຜົນ",
        ມູນຄ່າປ່ອຍກູ້: "100,000,000",
        ສະກຸນເງີນ: "ກີບ",
        ມູນຄ່າຄ້ຳປະກັນ: "ກີບ",
        ສະກຸນເງີນ: "ກີບ",
        ສະຖານະ:"sucess",
        ກວດສອບ: "Error"  ,
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