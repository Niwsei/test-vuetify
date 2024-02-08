<template>
    <div>
        <h1>ລາຍລະອຽດການຊຳລະ</h1>
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


    headers: [
      {
        align: 'start',
        key: 'name',
        sortable: false,
        title: ' ລ/ດ',
      },
      { title: 'ຮູບ', key: 'ຮູບ' },
      { title: 'ຊື່ລູກຄ້າ', key: 'ຊື່ລູກຄ້າ' },
      { title: 'ເບີໂທ ', key: 'ເບີໂທ' },
      { title: 'ເບີວອດແອັບ', key: 'ເບີວອດແອັບ' },
      { title: 'ມູນຄ່າຢືມ ', key: 'ມູນຄ່າຢືມ' },
      { title: 'ປະເພດກາຊຳລະ ', key: 'ປະເພດກາຊຳລະ' },
      { title: 'ຈ/ນ ງວດ ', key: 'ຈນງວດ' },
      { title: 'ວັນທີ່ຂໍ ', key: 'ວັນທີ່ຂໍ' },
      { title: 'ຜູ້ອານຸມັດ ', key: 'ຜູ້ອານຸມັດ' ,value:'ຜູ້ອານຸມັດ'},
      { title: 'ວັນທີອານຸມັດ', key: 'ວັນທີອານຸມັດ' ,value:'ວັນທີອານຸມັດ'},
      { title: 'ສະຖານະ', key: 'ສະຖານະ' ,value:'ສະຖານະ'},
    ],
    desserts: [
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ເບີໂທ:"ນັກສຶກສາ"    ,
        ເບີວອດແອັບ: 20,
        ມູນຄ່າຢືມ: "02077912018",
        ປະເພດກາຊຳລະ: "ອ້າຍມີເຫດຜົນ",
        ຈນງວດ: "100,000,000",
        ວັນທີ່ຂໍ: "ກີບ",
        ຜູ້ອານຸມັດ:"sucess",
        ວັນທີອານຸມັດ: "Error"  ,
        ສະຖານະ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ເບີໂທ:"ນັກສຶກສາ"    ,
        ເບີວອດແອັບ: 20,
        ມູນຄ່າຢືມ: "02077912018",
        ປະເພດກາຊຳລະ: "ອ້າຍມີເຫດຜົນ",
        ຈນງວດ: "100,000,000",
        ວັນທີ່ຂໍ: "ກີບ",
        ຜູ້ອານຸມັດ:"sucess",
        ວັນທີອານຸມັດ: "Error"  ,
        ສະຖານະ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ເບີໂທ:"ນັກສຶກສາ"    ,
        ເບີວອດແອັບ: 20,
        ມູນຄ່າຢືມ: "02077912018",
        ປະເພດກາຊຳລະ: "ອ້າຍມີເຫດຜົນ",
        ຈນງວດ: "100,000,000",
        ວັນທີ່ຂໍ: "ກີບ",
        ຜູ້ອານຸມັດ:"sucess",
        ວັນທີອານຸມັດ: "Error"  ,
        ສະຖານະ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ເບີໂທ:"ນັກສຶກສາ"    ,
        ເບີວອດແອັບ: 20,
        ມູນຄ່າຢືມ: "02077912018",
        ປະເພດກາຊຳລະ: "ອ້າຍມີເຫດຜົນ",
        ຈນງວດ: "100,000,000",
        ວັນທີ່ຂໍ: "ກີບ",
        ຜູ້ອານຸມັດ:"sucess",
        ວັນທີອານຸມັດ: "Error"  ,
        ສະຖານະ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ເບີໂທ:"ນັກສຶກສາ"    ,
        ເບີວອດແອັບ: 20,
        ມູນຄ່າຢືມ: "02077912018",
        ປະເພດກາຊຳລະ: "ອ້າຍມີເຫດຜົນ",
        ຈນງວດ: "100,000,000",
        ວັນທີ່ຂໍ: "ກີບ",
        ຜູ້ອານຸມັດ:"sucess",
        ວັນທີອານຸມັດ: "Error"  ,
        ສະຖານະ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ເບີໂທ:"ນັກສຶກສາ"    ,
        ເບີວອດແອັບ: 20,
        ມູນຄ່າຢືມ: "02077912018",
        ປະເພດກາຊຳລະ: "ອ້າຍມີເຫດຜົນ",
        ຈນງວດ: "100,000,000",
        ວັນທີ່ຂໍ: "ກີບ",
        ຜູ້ອານຸມັດ:"sucess",
        ວັນທີອານຸມັດ: "Error"  ,
        ສະຖານະ: "Error"  ,
      },
      {
        ຮູບ: 'Frozen Yogurt',
        ຊື່ລູກຄ້າ: "ນິວ",
        ເບີໂທ:"ນັກສຶກສາ"    ,
        ເບີວອດແອັບ: 20,
        ມູນຄ່າຢືມ: "02077912018",
        ປະເພດກາຊຳລະ: "ອ້າຍມີເຫດຜົນ",
        ຈນງວດ: "100,000,000",
        ວັນທີ່ຂໍ: "ກີບ",
        ຜູ້ອານຸມັດ:"sucess",
        ວັນທີອານຸມັດ: "Error"  ,
        ສະຖານະ: "Error"  ,
      },
      
    ],
  }
},

    }

</script>

<style lang="scss" scoped>

</style>