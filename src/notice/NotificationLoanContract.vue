<template>
    <div>
<h1>ລາຍງານສັນຍາກູ້ຢືມ</h1>
<v-card height="auto" elevation="0">
  
 <v-card elevation="0" height="auto">
      <v-sheet class="border border-5 mt-10">
        <v-card height="auto" elevation="0">
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
              <v-text-field type="date" variant density="comfortable" class="border" hide-details> </v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field type="date" variant density="comfortable" class="border" hide-details> </v-text-field>
            </v-col>

            <v-col cols="3" >
<v-btn class=" ml-5 text-blue-grey-lighten-5 bg-green-accent-4" size="x-large" elevation="0" >ຕົກລງ</v-btn>
             </v-col>
          </v-row>

          <hr color="#ECEFF1" class="ma-5">
          <v-row  no-gutters class="ml-5 mb-10 d-flex justify-space-between">
            <v-col cols="3">
              <v-btn  elevation="0"  class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 w-100 " size="large" >PRINT PDF</v-btn>
            </v-col>

            <v-col cols="3" class="mr-10 mt-5">
              <v-text-field type="search" variant hide-details density="comfortable" class="border rounded" placeholder="Search..." ></v-text-field>
            </v-col>
          </v-row>
        
          <hr color="#ECEFF1" class="ma-5">


          <v-table class="pb-15">
            <thead>
                <tr>
                    <th class="font-weight-bold">ລ/ດ</th>
                    <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                    <th class="font-weight-bold">ເບີໂທ</th>
                    <th class="font-weight-bold">ເຫດຜົນກູ້ຢືມ</th>
                    <th class="font-weight-bold">ມູນຄ່າກູ້ຢືມ(LAK)</th>
                    <th class="font-weight-bold">ມູນຄ່າກູ້ຢືມ(THB)</th>
                    <th class="font-weight-bold">ມູນຄ່າກູ້ຢືມ(USD)</th>
                    <th class="font-weight-bold">ຄ່າທຳນຽມອະນຸມັດເງີນກູ້</th>
                    <th class="font-weight-bold">ຄ່າປະເມີນຫຼັກຊັບຄ້ຳປະກັນ</th>
                    <th class="font-weight-bold">ວັນທີ່ອອກສັນຍາ</th>
                    <th class="font-weight-bold">ພິມສັນຍາ</th>
            

                </tr>
            </thead>
            <tbody>
                <tr v-for="(value , index) in listCIF" :key="index">
                    <td>{{ value.number }}</td>
                    <td>{{ value.username }}</td>
                    <td>{{ value.tell }}</td>
                    <td>{{ value.reasonborrow }}</td>
                    <td>{{ value.valueborrowLAK }}</td>
                    <td>{{ value.valueborrowTHB }}</td>
                    <td>{{ value.valueborrowUSD }}</td>
                    <td>{{ value.businessfeesloanmoney }}</td>
                    <td>{{ value.estimatemain }}</td>
                    <td>{{ value.dateoutpromise }}</td>
                    <td>{{ value.printpromise }}</td>
                    
                </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-sheet>
    </v-card>
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
            reasonborrow:"siyon",
            valueborrowLAK:"02077912018",
            valueborrowTHB:"02077912018",
            valueborrowUSD:"02077912018",
            businessfeesloanmoney:"100.000.000",
            estimatemain:"2024/10/7",
            dateoutpromise:"100.000.00",
            printpromise:"USD",
           
                }
        ]
        }
    }
}
</script>

<style lang="scss" scoped></style>
