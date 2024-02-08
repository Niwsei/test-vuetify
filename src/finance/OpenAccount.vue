<template>
    <div>
<h1>ເປີດບັນຊີ</h1> 
<v-card height="auto" elevation="0">
  <v-container>
    
 
      <v-sheet class="mt-10 ">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>
      <hr color="#ECEFF1">

      
        <v-card  height="auto" elevation="0" class="border">
          
          <v-row class=" d-flex justify-center ">
            <v-col cols="6" class=" d-flex flex-column align-center">
            <h4  class="mt-5">ລະຫັດເລກບັນຊີ</h4>
       
            <v-sheet
              class="w-100  border border-5 d-flex justify-center align-center mt-3 mb-5"
              ><span class="font-weight-black text-h5 py-2">0001</span>
              </v-sheet>
            </v-col>
            </v-row>

            <v-row class=" d-flex justify-center text-center"> 
              <v-col cols="6">
                <h4>ຂໍ້ມູນລູກຄ້າ</h4>
                <v-row>
            <v-col cols="10" class="">
            <v-text-field
              type="text"
            class="border mt-3"
              variant
              hide-details
              density="compact"
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="d-flex justify-center align-end">
        <v-btn size="large" color="red">ຄົ້ນຫາ</v-btn >
        </v-col>
      </v-row>
      </v-col>
            </v-row>

            <v-row class=" d-flex justify-center text-center">
              <v-col cols="6">
            <h4>CIF</h4>
            <v-select  class="border mt-3"
              variant
              hide-details
              density="compact"
              >asdasd</v-select>
          </v-col>
          </v-row>
        

          <v-row class=" d-flex justify-center text-center">
              <v-col cols="6">
        <h4>ປະເພດບັນຊີ</h4>
            <v-select  class="border mt-3"
              variant
              hide-details
              density="compact"
            :items="gender"
            value="ເລືອກ..."
            ></v-select>
          </v-col>
          </v-row>
        

          <v-row class=" d-flex justify-center text-center">
              <v-col cols="6">
        <h4>ສະກຸນເງີນ(Currency)</h4>
            <v-select  class="border mt-3"
              variant
              hide-details
              density="compact"
            :items="Currency"
            value="ເລືອກ..."
            ></v-select>
          </v-col>
          </v-row>


          <v-row class=" d-flex justify-center text-center mb-10">
              <v-col cols="6">
        <h4>ສະກຸນເງີນ(Currency)</h4>
            
            <v-btn 
              elevation="0"
              text="submit"
              type="submit"
              size="large"
              class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 w-100 mt-3">ສ້າງບັນຊີ</v-btn>
          </v-col>
          </v-row>

        </v-card>
      





      <v-sheet class="border border-5 mt-10">
        <v-card height="auto" elevation="0">
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
