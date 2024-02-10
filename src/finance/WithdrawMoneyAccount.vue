<template>
    <div>
<h1>ຖອນເງີນອອກບັນຊີ</h1>
<v-card height="auto" elevation="0" class="border">
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

      
        <v-card   height="auto" elevation="0" class="border">
          <v-row class="text-center d-flex justify-center">
            <v-col cols="6" >
              <v-row>
                <v-col>
            <h4  class="mt-5">ຄົ້ນຫາ ເລກບັນຊີ ລູກຄ້າ ຫຼື ເບີໂທ</h4>
          </v-col>
            <v-col cols="12" class="d-flex">
            <v-text-field
              type="text"
              class="border"
              density="comfortable"
              hide-details
              variant
            ></v-text-field>
          
            
 <v-btn size="x-large" color="red">ຄົ້ນຫາ</v-btn>
 </v-col>
              </v-row>

            <!-- <v-sheet
              class="w-50 border border-5 d-flex justify-center align-center mt-3 mb-5"
              ><span class="font-weight-black text-h5 py-2">0001</span>
              </v-sheet> -->

        <v-row>
          <v-col cols="12">
        <h4>ປະເພດການເຄື່ອນໄຫວບັນຊີ</h4>
            <v-select variant="outlined"
            :items="withdraw"
            value="ຖອນເງີນ"
            class="mt-2"
            ></v-select>            
          </v-col>
        </v-row>



        <v-row>
          <v-col cols="12">
        <h4>ບັນຊີສະກຸນເງີນ</h4>
        <v-text-field class="border mt-2"
        hide-details
        variant
        density="compact"
        
             >
            </v-text-field>
          </v-col>
        </v-row>


            <v-row>
          <v-col cols="12">
        <h4>ຍອດເງີນຄົງເຫຼືອ</h4>
        <v-text-field class="border mt-2"
        hide-details
        variant
        density="compact"
             >
            </v-text-field>
          </v-col>
        </v-row>


            <v-row>
          <v-col cols="12">
            <h4>ຈຳນວນເງີນມອບເຂົ້າບັນຊີ</h4>
            <v-text-field class="border mt-2"
        hide-details
        variant
        density="comfortable"
             >
            </v-text-field>
      </v-col>
          </v-row>


          <v-row>
          <v-col cols="12">
        <h4>ຍອດເຫຼືອຕົວຈິງ</h4>
        <v-text-field class="border mt-2"
        hide-details
        variant
        density="compact"
             >
            </v-text-field>
          </v-col>
          </v-row>
          


                <v-row>
          <v-col cols="12">
            <v-btn
              elevation="0"
              text="submit"
              type="submit"
              size="large"
              class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 w-100 mt-5 mb-10">ສ້າງບັນຊີ</v-btn>
      </v-col>
          </v-row>
          </v-col>
          </v-row>
        </v-card>





  
        <v-card height="auto" elevation="0" class="border">
          <v-container>
            <v-row no-gutters class="ml-5">
            <v-col cols="3" class="ml-1 mt-7">
              <h4>ເເຕ່ວັນທີ</h4>
            </v-col>
            <v-col cols="3" class="ml-6 mt-7">
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
<v-btn class=" ml-5 bg-green-accent-4 text-grey-lighten-5" size="large" >ຕົກລງ</v-btn>
             </v-col>
          </v-row>


          <hr color="#ECEFF1" class="my-5">
          <hr color="#ECEFF1" class="my-5">


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
         </v-container>
        </v-card>
      </v-container>
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
