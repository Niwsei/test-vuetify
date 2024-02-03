<template>
    <div>
<h1>ຊຳລະຄ່າງວດ</h1>
<v-card height="1300px">
      <v-sheet class="mt-10 ml-10">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>



      <v-sheet>
        <v-card class="d-flex align-center flex-column " height="800px">
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
            ></v-select>
        </v-sheet>

        <h4>ປະເພດການເຄື່ອນໄຫວບັນຊີ</h4>
            <v-sheet class="w-50">
            <v-select variant="outlined"
            ></v-select>
        </v-sheet>

        <h4>ປະເພດການເຄື່ອນໄຫວບັນຊີ</h4>
            <v-sheet class="w-50">
            <v-select variant="outlined"
            ></v-select>
        </v-sheet>



        <v-sheet class=" d-flex  w-50">
            <v-text-field
              type="text"
        class="mr-5"
              variant="outlined"
            ></v-text-field>
 <v-text-field type="text" variant="outlined"></v-text-field >
            </v-sheet>


            <v-sheet class=" d-flex  w-50">
            <v-text-field
              type="text"
        class="mr-5"
              variant="outlined"
            ></v-text-field>
 <v-text-field type="text" variant="outlined"></v-text-field >
            </v-sheet>


            <v-sheet class=" d-flex  w-50">
            <v-text-field
              type="text"
        class="w-50 mr-5"
              variant="outlined"
            ></v-text-field>
 <v-text-field type="text" variant="outlined" ></v-text-field >
            </v-sheet>


            <v-sheet class=" d-flex  w-50">
            <v-text-field
              type="date"
        class="w-25 mr-5"
              variant="outlined"
            ></v-text-field>
 <v-btn height="55px" color="red" class="w-50">ຄົ້ນຫາ</v-btn >
            </v-sheet>

            <!-- <h4>ຈຳນວນເງີນມອບເຂົ້າບັນຊີ</h4>
            <v-sheet class="w-50">
            <v-text-field type="text" variant="outlined"
            ></v-text-field>
        </v-sheet> -->

        


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
                    <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                    <th class="font-weight-bold">ເບີໂທ</th>
                    <th class="font-weight-bold">ເລກບິນອ້າງອິງ</th>
                    <th class="font-weight-bold">ເລກສັນຍາກູ້ຢືມ</th>
                    <th class="font-weight-bold">ງາດທີ່</th>
                    <th class="font-weight-bold">ມູນຄ່າງວດ</th>
                    <th class="font-weight-bold">ດອກເບ້ຍ</th>
                    <th class="font-weight-bold">ມູນຄ່າປັບໃໝ່</th>
                    <th class="font-weight-bold">ລວມເງີນຕ້ອງຊຳລະ</th>
                    <th class="font-weight-bold">ສະກຸນເງີນ</th>
                    <th class="font-weight-bold">ວັນທີ</th>
                    <th class="font-weight-bold">ACTION</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(value , index) in listCIF" :key="index">
                    <td>{{ value.number }}</td>
                    <td>{{ value.username }}</td>
                    <td>{{ value.tell }}</td>
                    <td>{{ value.numberrefer }}</td>
                    <td>{{ value.numberborrow }}</td>
                    <td>{{ value.period }}</td>
                    <td>{{ value.priceperiod }}</td>
                    <td>{{ value.interest }}</td>
                    <td>{{ value.newprice }}</td>
                    <td>{{ value.total }}</td>
                    <td>{{ value.currency }}</td>
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

            listCIF : [
                {
                number:"0",
                username:"77",
            tell:"0001",
            numberrefer:"siyon",
            numberborrow:"02077912018",
            period:"02077912018",
            priceperiod:"02077912018",
            interest:"100.000.000",
            newprice:"2024/10/7",
            total:"100.000.00",
            currency:"USD",
            date:"2024/5/10",
            action:"success",
                }
        ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
