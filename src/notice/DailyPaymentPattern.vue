<template>
    <div>
<h1>ລາຍການຕ້ອງຊຳລະປະຈຳວັນ</h1>
<v-card height="1300px">
  
  <v-card>
       <v-sheet class="border border-5 mt-10">
         <v-card height="400px">
           <v-row no-gutters class="ml-5">
             <v-col cols="3" class="pa-2 ma-2">
               <h4>ເເຕ່ວັນທີ</h4>
             </v-col>
             <v-col cols="3" class="pa-2 ma-2">
               <h4>ຫາວັນທີ</h4>
             </v-col>
             <v-col cols="3" class="pa-2 ma-2">
               <h4>ສະກຸນເງີນ</h4>
             </v-col>
           </v-row>
           <v-row no-gutters class="ml-5">
             <v-col cols="3" class="mr-5">
               <v-text-field type="date" variant="outlined"> </v-text-field>
             </v-col>
 
             <v-col cols="3">
               <v-text-field type="date" variant="outlined"> </v-text-field>
             </v-col>

             <v-col cols="2">
            <v-select :items="currency"
            class="ml-5"
            value="ທັ້ງໝົດ"
            variant="outlined"
            >

            </v-select>
             </v-col>
 
             <v-col cols="3" >
 <v-btn color="green" class="h-50  ml-5">ຕົກລງ</v-btn>
              </v-col>             
           </v-row>

           <hr>
           
           <v-row no-gutters class="d-flex justify-end mr-5 mt-5">
            <v-col cols="3" >
                <v-text-field
                placeholder="Search..."
                variant="outlined"
                type="search"
                >
                </v-text-field>
            </v-col>
           </v-row>

           <hr>
          

 
 
           <v-table>
             <thead>
                 <tr>
                     <th class="font-weight-bold">ລ/ດ</th>
                     <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                     <th class="font-weight-bold">ເບີໂທລູກຄ້າ</th>
                     <th class="font-weight-bold">ລະຫັດກູ້ຢືມ</th>
                     <th class="font-weight-bold">ງວດທີ່</th>
                     <th class="font-weight-bold">ງວດວັນທີ່</th>
                     <th class="font-weight-bold">ມູນຄ່າງວດ</th>
                     <th class="font-weight-bold">ດອກເບ້ຍ</th>
                     <th class="font-weight-bold">ລວມຈຳນວນຊຳລະ</th>
                     <th class="font-weight-bold">ສະກຸນເງີນ</th>
                     <th class="font-weight-bold">ສະຖານະ</th>
                   

             
 
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="(value , index) in listCIF" :key="index">
                     <td>{{ value.number }}</td>
                     <td>{{ value.username }}</td>
                     <td>{{ value.tellusername }}</td>
                     <td>{{ value.passwordborrow }}</td>
                     <td>{{ value.dayperiod }}</td>
                     <td>{{ value.dateperiod }}</td>
                     <td>{{ value.valueperiod }}</td>
                     <td>{{ value.interest }}</td>
                     <td>{{ value.totalpay }}</td>
                     <td>{{ value.currency }}</td>
                     <td>{{ value.status }}</td>
    
                     
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

            currency:["ທັ້ງໝົດ","LAK" , "THB" , "USD"],
 
             listCIF : [
                 {
                 number:"0",
                 username:"77",
             tellusername:"0001",
             passwordborrow:"siyon",
             dayperiod:"02077912018",
             dateperiod:"02077912018",
             valueperiod:"02077912018",
             interest:"100.000.000",
             totalpay:"2024/10/7",
             currency:"2024/10/7",
             status:"2024/10/7",

            
                 }
         ]
         }
     }
 }
 </script>
 
 <style lang="scss" scoped></style>
 