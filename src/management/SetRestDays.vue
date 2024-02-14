<template>
    <div>
    <v-row no-gutters>
      <v-col
     class="pl-5"
        cols="5"
      >
      <v-card height="auto" elevation="0">
<v-container>
<v-row>
  <v-col>
<p class="font-weight-black">ປະເພດວັນພັກ</p> 
      <v-select value="ເລືອກໝວດໝູ່ວັນພັກ" variant  hide-details density="compact" :items="date" class=" border rounded mt-3" ></v-select>
    </v-col>
    </v-row>


    <v-row >
  <v-col>
<p class="font-weight-black">ຊື່ວັນພັກ</p>
<v-text-field 
class="border mt-3 rounded"
variant 
hide-details 
density="comfortable"
            required
          ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
  <v-col>
    <p class="font-weight-black">ວັນທີ່ກຳນົດພັກ(ດ-ວ-ປ)</p>
 <v-text-field 
 type="date"
 class="border  rounded mt-3"
variant 
hide-details 
density="compact"
 ></v-text-field>
  </v-col>
    </v-row>


<div class=" py-5">
<v-btn 
elevation="0"
class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 "
size="large"
style="letter-spacing: -0.5px;"
>
ບັນທຶກຂໍ້ມູນ
</v-btn>
</div>
</v-container>
</v-card>
      </v-col>

      <v-col
      class="pl-15"
        cols="7"
      >
      <v-card height="650" >
      <v-table  height="auto" class=" pt-5">
    <thead>
      <tr>
        <th class="text-left font-weight-black">
          ລຳດັບ
        </th>
        <th class="text-left  font-weight-black">
          ໝວດໝູ່ວັນພັກ
        </th>
        <th class="text-left font-weight-black">
          ຊື່ວັນພັກ
        </th>
        <th class="text-left font-weight-black">
          ວັນທີ່ພັກ
        </th>
        <th class="text-left font-weight-black">
          ລົບ
        </th>

      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item , index) in forms"
        :key="index"
      >
        <td> {{index}} </td>
        <td>{{item.name}}</td>
        <td>
            <v-btn icon flat>
       
      </v-btn>
      <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon flat
          dark
          v-bind="props"
        >
        <v-icon extended>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        
       
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          v-bind="props"
        >
          ເເກ້ໄຂ
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
             
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>

          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  


            
            <v-list-item>  ລືບ  </v-list-item>

      </v-list>
    </v-menu>
        </td>
      </tr>
    </tbody>
  </v-table>
</v-card>

      </v-col>
    </v-row>


    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {

            date: [
        "ປີໃຫມ່ສາກົນ",
        "ວັນສ້າງຕັ້ງເເມ່ຍິງສາກົນ",
        "ປີໃຫມ່ລາວ",
        "ວັນກຳມະກອນ",
        "ວັນເດັກນ້ອຍສາກົນ",
        "ວັນສ້າງຕັ້ງສະຫະພັນເເມ່ຍິງລາວ",
        "ເຂົ້າພັນສາ",
        "ອອກພັນສາເເລະບຸນຊ່ວງເຮືອ",
        "ບຸນທາດຫຼວງ",
        "ວັນຊາດ",
        "ພັກປະຈຳປີໃຫມ່ສາກົນ",
      ],
        }
    },




    // data: vm => ({
    //   date: new Date().toISOString().substr(0, 10),
    //   dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    //   menu1: false,
    //   menu2: false
    // }),



    // computed: {
    //   computedDateFormatted () {
    //     return this.formatDate(this.date)
    //   }
    // },



    // watch: {
//       date (val) {
//         this.dateFormatted = this.formatDate(this.date)
//       }
//     },




//     methods: {
//       formatDate (date) {
//         if (!date) return null

//         const [year, month, day] = date.split('-')
//         return `${month}/${day}/${year}`
//       },
//       parseDate (date) {
//         if (!date) return null

//         const [month, day, year] = date.split('/')
//         return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
//       }
    }


    
</script>






<style lang="scss" scoped>

</style>