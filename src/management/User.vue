<template>
  <div>
    <h1>ຜູ້ໃຊ້</h1>
    <v-card height="600">
      <v-card-title>ຈັດການຫນ້າຟັງຊັ້ນ</v-card-title>

      <v-card-text class="py-10 px-5">
        <form @submit.prevent="submit">
          <label for="" class="font-weight-black">ຊື່ ເເຫລະ ນາມສະກຸນ ພະນັກງານ</label>
          <v-text-field label="Name"></v-text-field>

          <label for="" class="font-weight-black">ຢູສເຊີ້</label>
          <v-text-field label="E-mail"></v-text-field>

          <label for="" class="font-weight-black">ສິດເຂົ້າເຖິງ</label>
          <v-select label="ສ້າງສິດ" variant="outlined" :items="disciple"></v-select>

          <label for="" class="font-weight-black">ພະເເນກ</label>
          <v-select variant="outlined" label="ພະເເນກ" :items="department" ></v-select>

          <div class="d-flex justify-end px-10 py-10">
            <v-btn rounded type="submit" color="blue"> ເພີ່ມຜູ້ໃຊ້ </v-btn>
          </div>
        </form>
      </v-card-text>
    </v-card>
  </div>

  <v-table density="compact" height="auto" class="mt-15">
    <thead>
      <tr>
        <th class="text-left">ເລກລຳດັບ</th>
        <th class="text-left">ຊື່ຜູ້ໃຊ້</th>
        <th class="text-left">ຢູສເຊີ້</th>
        <th class="text-left">ພະເເນກ</th>
        <th class="text-left">ສະຖານະ</th>
        <th class="text-left">ສິດຈັດການ</th>
        <th class="text-left"> </th>
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
</template>

<script>
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
      department: [
        "ໄອທີ",
        "ບັນຊີ",
        "ຄັງເງີນ",
        "ສິນເຊື່ອ",
        "ການຕະຫຼາດ",
        "ບໍລິຫານ",
        "ການເງີນ",
        "ຂົນສົ່ງ",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
