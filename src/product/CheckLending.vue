<template>
    <div>
<h1>ກວດສອບການປ່ອຍກູ້</h1>
<v-card height="800px">

    <v-sheet class=" pt-10 d-flex flex-row w-25 pl-5">
<v-select class=" ml-5" :items="register" label="ລົງທະບຽນ" variant="outlined"  ></v-select>

<v-btn class="bg-primary ml-5" height="50px" >button</v-btn>

</v-sheet>






<v-card-text class=" d-flex justify-end " >
<v-sheet class="w-25" height="60px">
<v-text-field
height="60px"
        class=""
        v-model="search"
        prepend-inner-icon="mdi-magnify"
   
        label="Search"
        
        flat
        hide-details
        variant="solo-filled"
      ></v-text-field>
    </v-sheet>
</v-card-text>

<v-card-item>
    
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
            title: ' ລ/ດ',
          },
          { title: 'ຮູບ', key: 'ຮູບ' },
          { title: 'ຊື່ລູກຄ້າ', key: 'ຊື່ລູກຄ້າ' },
          { title: 'ອາຊີບ', key: 'ອາຊີບ' },
          { title: 'ອາຍຸ ', key: 'ອາຍຸ' },
          { title: 'ເບີໂທ ', key: 'ເບີໂທ' },
          { title: 'ເຫດຜົນປ່ອຍກູ້ ', key: 'ເຫດຜົນປ່ອຍກູ້' },
          { title: 'ມູນຄ່າປ່ອຍກູ້ ', key: 'ມູນຄ່າປ່ອຍກູ້' },
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