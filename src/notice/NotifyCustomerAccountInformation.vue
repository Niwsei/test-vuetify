<template>
    <div>
<h1>ລາຍງານຂໍ້ມູນບັນຊີລູກຄ້າ</h1>
<v-card height="auto" elevation="0">
  <v-container>
  <v-card height="auto" elevation="0">
       <v-sheet class=" mt-10">
         <v-card height="auto" elevation="0">
           <v-row no-gutters class="ml-5">
             <v-col cols="3" class="pa-2 ma-2">
               <h4>ເເຕ່ວັນທີ</h4>
             </v-col>
             <v-col cols="3" class="pa-2 ma-2">
               <h4>ຫາວັນທີ</h4>
             </v-col>

           </v-row>
           <v-row no-gutters class="ml-5 mb-10">
             <v-col cols="3" class="mr-5">
               <v-text-field type="date" variant hide-details density="compact" class="border rounded"> </v-text-field>
             </v-col>
 
             <v-col cols="3">
               <v-text-field type="date" variant hide-details density="compact" class="border rounded"> </v-text-field>
             </v-col>

 
             <v-col cols="1" >
 <v-btn  class="bg-green-accent-4 text-white  ml-5" size="large">ຕົກລງ</v-btn>
              </v-col>             
           </v-row>

           <hr color="#ECEFF1">
           
           <v-row no-gutters class="d-flex justify-end mr-5 mt-5">
            <v-col cols="3" >
                <v-text-field
                placeholder="Search..."
                variant
                hide-details
                density="comfortable"
                class="border rounded mb-5"
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
                     <th class="font-weight-bold">ເລກບັນຊີ</th>
                     <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                     <th class="font-weight-bold">ເບີໂທ</th>
                     <th class="font-weight-bold">ປະເພດບັນຊີ</th>
                     <th class="font-weight-bold">ບັນຊີສະກຸນເງິນ</th>
                     <th class="font-weight-bold">ຍອດເງິນຄ້າງບັນຊີ</th>
                     <th class="font-weight-bold">ວັນທີເຄື່ອນໄຫວ</th>
                     <th class="font-weight-bold">ການເຄື່ອນໄຫວ</th>

                   

             
 
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="(value , index) in listCIF" :key="index">
                     <td>{{ value.number }}</td>
                     <td>{{ value.numberaccount }}</td>
                     <td>{{ value.username }}</td>
                     <td>{{ value.tell }}</td>
                     <td>{{ value.genderaccount }}</td>
                     <td>{{ value.accountcurrency }}</td>
                     <td>{{ value.moneystillaccount }}</td>
                     <td>{{ value.datemove }}</td>
                     <td>{{ value.mover }}</td>
    
                     
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

 
             listCIF : [
                 {
                 number:"0",
                 numberaccount:"77",
             username:"0001",
             tell:"siyon",
             genderaccount:"02077912018",
             accountcurrency:"02077912018",
             moneystillaccount:"02077912018",
             datemove:"100.000.000",
             mover:"2024/10/7",
            
                 }
         ]
         }
     }
 }
 </script>
 
 <style lang="scss" scoped></style>
 