<template>
    <div>
<h1>ຈັດການສິດ</h1>



<v-card height="300" >

    <div class="d-flex justify-end px-10 py-10">
<v-btn rounded
color="blue" >
ສ້າງພະເເນກ
</v-btn>
</div>

   <v-card-text  class="py-10 px-5">
<label for="">ເລຶອກສິດນຳໃຊ້</label>
<label for="" class="font-weight-black">ສິດເຂົ້າເຖິງ</label>
          <v-select label="ສ້າງສິດ" variant="outlined" :items="disciple"></v-select>
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