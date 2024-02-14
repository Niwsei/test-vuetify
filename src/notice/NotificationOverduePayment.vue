<template>
    <div>
<h1>ລາຍງານຄ້າງຊຳລະ</h1>
<v-card height="auto" elevation="0">
  <v-container>
  <v-card elevation="0" height="auto">
       <v-sheet >
         <v-card height="auto" elevation="0">
           <v-row no-gutters class="ml-5">
             <v-col cols="3" class="pa-2 ma-2">
               <h4>ສະກຸນເງີນ</h4>
             </v-col>
           </v-row>
           <v-row no-gutters class="ml-5 mb-10">

             <v-col cols="2">
            <v-select :items="currency"
            class="ml-5 border rounded"
            value="ທັ້ງໝົດ"
            variant
            hide-details
            density="compact"
            >

            </v-select>
             </v-col>
 
             <v-col cols="3" >
 <v-btn elevation="0" class="bg-green-accent-4 text-blue-grey-lighten-5  ml-7" size="large">ຕົກລງ</v-btn>
              </v-col>             
           </v-row>

           <hr color="#ECEFF1">
           
           <v-row no-gutters class="d-flex justify-end mr-5 mt-5">
            <v-col cols="3" >
                <v-text-field
                placeholder="Search..."
                variant
                hide-details
                class="border rounded mb-5"
                density="comfortable"
                type="search"
                >
                </v-text-field>
            </v-col>
           </v-row>

           <hr color="#ECEFF1">
          

 
 
           <v-table>
             <thead>
                 <tr>
                     <th class="font-weight-bold">ລ/ດ</th>
                     <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                     <th class="font-weight-bold">ເບີໂທລູກຄ້າ</th>
                     <th class="font-weight-bold">ລະຫັດກູ້ຢືມ</th>
                     <th class="font-weight-bold">ງວດຊຳລະ</th>
                     <th class="font-weight-bold">ມູນຄ່າງວດ</th>
                     <th class="font-weight-bold">ມູນຄ່າດອກເບ້ຍ</th>
                     <th class="font-weight-bold">ມູນຄ່າປັບໄໝ</th>
                     <th class="font-weight-bold">ຈຳນວນລວມ</th>
                     <th class="font-weight-bold">ສະກຸນເງີນ</th>
                     <th class="font-weight-bold">ວັນທີຊຳລະ</th>
                     <th class="font-weight-bold">USER ກົດຊຳລະ</th>

             
 
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="(value , index) in listCIF" :key="index">
                     <td>{{ value.number }}</td>
                     <td>{{ value.username }}</td>
                     <td>{{ value.tellusername }}</td>
                     <td>{{ value.passwordborrow }}</td>
                     <td>{{ value.periodpay }}</td>
                     <td>{{ value.valueperiod }}</td>
                     <td>{{ value.valueinterest }}</td>
                     <td>{{ value.valuefine }}</td>
                     <td>{{ value.total }}</td>
                     <td>{{ value.currency }}</td>
                     <td>{{ value.datepay }}</td>
                     <td>{{ value.userclickpay }}</td>
                     
                 </tr>
             </tbody>
           </v-table>
         </v-card>
       </v-sheet>
     </v-card>
    </v-container>
     </v-card>
   </div>
 </template>
 
 <script >
 export default {
     data() {
         return {

            currency:["ທັ້ງໝົດ","LAK" , "THB" , "USD"],
 
             listCIF : [
                 {
                 number:"0",
                 username:"77",
             tellusername:"0001",
             passwordborrow:"siyon",
             periodpay:"02077912018",
             valueperiod:"02077912018",
             valueinterest:"02077912018",
             valuefine:"100.000.000",
             total:"2024/10/7",
             currency:"100.000.00",
             datepay:"USD",
             userclickpay:"USD",
            
                 }
         ]
         }
     }
 }
 </script>
 
 <style lang="scss" scoped></style>
 