<template>
  <div>
    <h1>ລົງທະບຽນນຳໃໍຊ້(CIF)</h1>

    <v-card height="auto" elevation="0">
      <v-container>
      <v-sheet class="mt-10 ml-10">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>

      <hr color="#ECEFF1">

      <v-sheet>
        <v-card class="d-flex align-center flex-column border" height="auto" elevation="0">
          <v-container>
          <v-sheet class="d-flex align-center flex-column w-100">
            <h4 class="mt-5 text-blue-grey-lighten-3">ລະຫັດເລກຕົວເເທນ(CIF)</h4>
            <v-sheet 
              class="w-50 border border-5 d-flex justify-center align-center mt-3 mb-5 rounded"
              ><span class="font-weight-black text-h5 py-2 ">0001</span></v-sheet
            >

            <h4 class="text-blue-grey-lighten-3">ຂໍ້ມູນລູກຄ້າ</h4>
            <v-text-field
            
            density="comfortable"
            hide-details
              type="text"
              class="w-100 border mt-3 mb-7 rounded"
              variant
            ></v-text-field>
            <v-btn crounded
            style="letter-spacing:0px;"
              elevation="0"
              text="submit"
              type="submit"
              size="large"
              class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 w-100 "
              ><h3 class="font-weight-regular ">ສ້າງເລກຕົວເເທນລູກຄ້າ</h3></v-btn
            >
          </v-sheet>
        </v-container>
        </v-card>
      </v-sheet>

      <v-sheet class="border border-5 mt-10">
        <v-card height="auto" elevation="0">
          <v-container>
          <v-row no-gutters class="ml-5">
            <v-col cols="3" class="pa-2 ma-2">
              <h4>ເເຕ່ວັນທີ</h4>
            </v-col>
            <v-col cols="3" class="pa-2 ma-2">
              <h4>ຫາວັນທີ</h4>
            </v-col>
          </v-row>
          <v-row no-gutters class="ml-5">
            <v-col cols="3" class="mr-5">
              <v-text-field type="date" hide-details density="compact" class="border rounded" variant > </v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field type="date"  hide-details density="compact" class="border rounded" variant > </v-text-field>
            </v-col>

            <v-col cols="3" >
<v-btn class=" ml-5 bg-green-accent-4 text-grey-lighten-5" size="large"  elevation="0">ຕົກລງ</v-btn>
             </v-col>
          </v-row>

          <hr color="#ECEFF1" class="my-5">
          <hr color="#ECEFF1" class="my-5">

          <v-table>
            <thead>
                <tr>
                    <th class="font-weight-bold">ລ/ດ</th>
                    <th class="font-weight-bold">ເລກລະຫັດ CIF</th>
                    <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                    <th class="font-weight-bold">ເບີໂທ</th>
                    <th class="font-weight-bold">ອອກໂດຍ</th>
                    <th class="font-weight-bold">ວັນທີອອກ</th>
                    <th class="font-weight-bold">ACTION</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(value , index) in listCIF" :key="index">
                    <td>{{ value.number }}</td>
                    <td>{{ value.numberCIF }}</td>
                    <td>{{ value.userName }}</td>
                    <td>{{ value.tell }}</td>
                    <td>{{ value.exit }}</td>
                    <td>{{ value.dateExit }}</td>
                    <td>{{ value.action }}</td>
                </tr>
            </tbody>
          </v-table>
        </v-container>
        </v-card>
      </v-sheet>
    </v-container>
    </v-card>
  </div>
</template>

<script >
export default {
    data() {
        return {
            listCIF : [
                {
                number:"0",
            numberCIF:"0001",
            userName:"siyon",
            tell:"02077912018",
            exit:"jack",
            dateExit:"2/10/2024",
            action:"success",
                }
        ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
