<template>
    <div>
<h1>ຖອນເງີນອອກບັນຊີ</h1>
<v-card height="1200px">
      <v-sheet class="mt-10 ml-10">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>



      <v-sheet>
        <v-card class="d-flex align-center flex-column " height="750px">
          <v-sheet class="d-flex align-center flex-column" width="1100px">
            <h4  class="mt-5">ຄົ້ນຫາ ເລກບັນຊີ ລູກຄ້າ ຫຼື ເບີໂທ</h4>
       
            <v-sheet class=" d-flex  w-50">
            <v-text-field
              type="text"
        
              variant="outlined"
            ></v-text-field>
 <v-btn height="55px" color="red">ຄົ້ນຫາ</v-btn >
            </v-sheet>

            <!-- <v-sheet
              class="w-50 border border-5 d-flex justify-center align-center mt-3 mb-5"
              ><span class="font-weight-black text-h5 py-2">0001</span>
              </v-sheet> -->

        
        <h4>ປະເພດການເຄື່ອນໄຫວບັນຊີ</h4>
            <v-sheet class="w-50">
            <v-select variant="outlined"
            :items="withdraw"
            value="ຖອນເງີນ"
            ></v-select>
        </v-sheet>


        <h4>ບັນຊີສະກຸນເງີນ</h4>
        <v-sheet
              class="w-50 border border-5 d-flex justify-center align-center mt-3 mb-5" height="50px">
            </v-sheet>

        <h4>ຍອດເງີນຄົງເຫຼືອ</h4>
        <v-sheet
              class="w-50 border border-5 d-flex justify-center align-center mt-3 mb-5" height="50px">
            </v-sheet>


            <h4>ຈຳນວນເງີນມອບເຂົ້າບັນຊີ</h4>
            <v-sheet class="w-50">
            <v-text-field type="text" variant="outlined"
            ></v-text-field>
        </v-sheet>

        <h4>ຍອດເຫຼືອຕົວຈິງ</h4>
        <v-sheet
              class="w-50 border border-5 d-flex justify-center align-center mt-3 mb-5" height="50px">
            </v-sheet>

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
                    <th class="font-weight-bold">ເລກບິນອ້າງອິງ</th>
                    <th class="font-weight-bold">ເລກບັນຊີເຮັດລາຍການ</th>
                    <th class="font-weight-bold">ເລກບັນຊີຮັບເງີນ</th>
                    <th class="font-weight-bold">ເລກບັນຊີໂອນເງີນ</th>
                    <th class="font-weight-bold">ຈຳນວນເງີນ</th>
                    <th class="font-weight-bold">ປະເພດການເຄື່ອນໄຫວ</th>
                    <th class="font-weight-bold">ວັນທີ</th>
                    <th class="font-weight-bold">ACTION</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(value , index) in listCIF" :key="index">
                    <td>{{ value.number }}</td>
                    <td>{{ value.numberrefer }}</td>
                    <td>{{ value.numberaccountuse }}</td>
                    <td>{{ value.numberaccountget }}</td>
                    <td>{{ value.numberaccountexit }}</td>
                    <td>{{ value.count }}</td>
                    <td>{{ value.gendergo }}</td>
                    <td>{{ value.date }}</td>
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
            withdraw:["ຖອນເງີນ"],

            listCIF : [
                {
                number:"0",
                numberrefer:"77",
            numberaccountuse:"0001",
            numberaccountget:"siyon",
            numberaccountexit:"02077912018",
            count:"02077912018",
            gendergo:"02077912018",
            date:"jack",
            action:"success",
                }
        ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
