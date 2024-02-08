<template>
    <div>
<h1>ຈັດການສິດ</h1>



<v-card height="auto" elevation="0" >

    <div class="d-flex justify-end px-10 py-10">
<v-btn rounded
class="text-blue-grey-lighten-5 bg-deep-orange-accent-3"
>
ສ້າງພະເເນກ
</v-btn>
</div>

   <v-card-text  class="pb-10 px-10">
<label for="" class="font-weight-black">ສິດນຳໃຊ້</label>
          <v-select 
          label="ສ້າງສິດ"
           variant="outlined"
            density="compact"
             hide-details
              :items="disciple"
              class="pt-2"
              ></v-select>
</v-card-text>
</v-card>


    </div>
</template>

<script >
export default {
  data() {
    return {
      disciple: [
        "ຊຸບເປີເເອັດມິນ",
        "ບັນຊີ",
        "ເເຄສເຊຍ",
        "ສິນເຊື່ອ",
        "ການຕະຫຼາດ",
        "ບໍລິຫານ",
        "ການເງີນ",
        "ຜູ້ອຳນວຍການ",
      ],
    }
}
}

</script>

<style lang="scss" scoped>

</style>