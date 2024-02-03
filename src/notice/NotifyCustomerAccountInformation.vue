<template>
    <div>
<h1>ລາຍງານຂໍ້ມູນບັນຊີລູກຄ້າ</h1>
<v-card height="1000px">
  
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

           </v-row>
           <v-row no-gutters class="ml-5">
             <v-col cols="3" class="mr-5">
               <v-text-field type="date" variant="outlined"> </v-text-field>
             </v-col>
 
             <v-col cols="3">
               <v-text-field type="date" variant="outlined"> </v-text-field>
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
 