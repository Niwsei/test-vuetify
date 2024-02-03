<template>
    <div>
<h1>ເປີດບັນຊີ</h1>
<v-card height="1000px">
      <v-sheet class="mt-10 ml-10">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>



      <v-sheet>
        <v-card class="d-flex align-center flex-column " height="650px">
          <v-sheet class="d-flex align-center flex-column" width="1100px">
            <h4  class="mt-5">ລະຫັດເລກບັນຊີ</h4>
       
            <v-sheet
              class="w-50 border border-5 d-flex justify-center align-center mt-3 mb-5"
              ><span class="font-weight-black text-h5 py-2">0001</span>
              </v-sheet>

            <h4>ຂໍ້ມູນລູກຄ້າ</h4>
            <v-sheet class=" d-flex  w-50">
            <v-text-field
              type="text"
            class="mr-5 "
              variant="outlined"
            ></v-text-field>
 <v-btn height="55px" color="red">ຄົ້ນຫາ</v-btn >
            </v-sheet>


            <h4>CIF</h4>
            <v-sheet class="w-50">
            <v-select class="" variant="outlined">asdasd</v-select>
        </v-sheet>
        
        <h4>ປະເພດບັນຊີ</h4>
            <v-sheet class="w-50">
            <v-select variant="outlined"
            :items="gender"
            label="ເລືອກ..."
            >asdasd</v-select>
        </v-sheet>

        <h4>ສະກຸນເງີນ(Currency)</h4>
            <v-sheet class="w-50">
            <v-select variant="outlined"
            class=""
            :items="Currency"
            label="ເລືອກ..."
            >asdasd</v-select>
        </v-sheet>

        <h4>ສະກຸນເງີນ(Currency)</h4>
            <v-sheet class="w-50">
            <v-btn color="red" class="w-100 " height="50px">ສ້າງບັນຊີ</v-btn>
        </v-sheet>


          </v-sheet>
        </v-card>
      </v-sheet>





      <v-sheet class="border border-5 mt-10">
        <v-card height="400px">
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
              <v-text-field type="date" variant="outlined"> </v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field type="date" variant="outlined"> </v-text-field>
            </v-col>

            <v-col cols="3" >
<v-btn color="green" class="h-75 ml-5">ຕົກລງ</v-btn>
             </v-col>
          </v-row>

          <v-table>
            <thead>
                <tr>
                    <th class="font-weight-bold">ລ/ດ</th>
                    <th class="font-weight-bold">ເລກບັນຊີ</th>
                    <th class="font-weight-bold">ເລກລະຫັດ CIF</th>
                    <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                    <th class="font-weight-bold">ເບີໂທ</th>
                    <th class="font-weight-bold">ປະເພດບັນຊີ</th>
                    <th class="font-weight-bold">ສະກຸນເງີນ</th>
                    <th class="font-weight-bold">ອອກໂດຍ</th>
                    <th class="font-weight-bold">ວັນທີອອກ</th>
                    <th class="font-weight-bold">ACTION</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(value , index) in listCIF" :key="index">
                    <td>{{ value.number }}</td>
                    <td>{{ value.numberaccount }}</td>
                    <td>{{ value.numberCIF }}</td>
                    <td>{{ value.userName }}</td>
                    <td>{{ value.tell }}</td>
                    <td>{{ value.genderaccount }}</td>
                    <td>{{ value.currency }}</td>
                    <td>{{ value.exit }}</td>
                    <td>{{ value.dateExit }}</td>
                    <td>{{ value.action }}</td>
                </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-sheet>
    </v-card>
  </div>
</template>

<script >
export default {
    data() {
        return {
            gender:["ເລືອກ...","ບັນຊີເງີນກູ້"],
            Currency:["ເລືອກ...","LAK","THB","USD"],

            listCIF : [
                {
                number:"0",
                numberaccount:"77",
            numberCIF:"0001",
            userName:"siyon",
            tell:"02077912018",
            genderaccount:"02077912018",
            currency:"02077912018",
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
