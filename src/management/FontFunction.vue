<template>
  <div>
    <h1>ຫນ້າຟັງຊັນ</h1>
    <v-card height="550">
      <v-card-title>ຈັດການຫນ້າຟັງຊັ້ນ</v-card-title>

      <v-card-text class="py-10 px-5">
        <form @submit.prevent="submit">
          <div>
            <label for="" class="font-weight-black">ຫົວຂໍ້</label>
            <v-select
              :items="section"
              class="border border-1"
              density="compact"
              hide-details
              label="ເລືອກຫົວຂໍ້"
            ></v-select>
          </div>


          <div class="my-10">
            <label for="" class="font-weight-black">ຊື່ຫນ້າ</label>
            <v-text-field
              class="border border-1"
              hide-details
              variant
              density="compact"
            ></v-text-field>
          </div>


          <div>
            <label for="" class="font-weight-black">ຊື່ໄຟຣ</label>
            <v-text-field
              class="border border-1"
              hide-details
              variant
              density="compact"
            ></v-text-field>
          </div>


          <div class="d-flex justify-end px-10 py-10">
            <v-btn
              rounded
              size="large"
              type="submit"
              class="text-blue-blue-grey-lighten-5"
              color="deep-orange-accent-3"
            >
              ເພີ່ມຂໍ້ມູນ
            </v-btn>
          </div>
        </form>
      </v-card-text>
    </v-card>
  </div>

  
  <v-table density="compact" height="auto" class="mt-15">
    <thead>
      <tr>
        <th class="text-left">ເລກລຳດັບ</th>
        <th class="text-left">ຊື່ຫນ້າ</th>
        <th class="text-left">ຊື່ໄຟຣ</th>
        <th class="text-left">ຫົວຂໍ້</th>
        <th class="text-left"></th>
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
      section: [
        "ເລືອກຫົວຂໍ້",
        "ຈັດການຂໍ້ມູນ",
        "ຈັດການຄຳຂໍ",
        "ສິນເຊື່ືອ",
        "ການເງີນ",
        "ກົດໝາຍ",
        "ລາຍງານ",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
