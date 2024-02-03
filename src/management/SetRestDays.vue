<template>
    <div>
<h1>ກຳນົດວັນພັກ</h1>


    <v-row no-gutters>
      <v-col
     class="mr-10"
        cols="12"
        sm="4"
      >
      <v-card height="500" >

<v-card-item>
<label for="">ເລຶອກສິດນຳໃຊ້</label> 
      <v-select label="ສ້າງສິດ" variant="outlined" :items="date"></v-select>
    </v-card-item>


    <v-card-item>
<label for="" class="font-weight-black">ສິດເຂົ້າເຖິງ</label>
<v-text-field 
variant="outlined"
            label="First name"
            required
            hide-details
          ></v-text-field>
        </v-card-item>

        <v-card-item>
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="event"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
        <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->

        </v-card-item>


<div class="d-flex justify-end px-10 py-10">
<v-btn rounded
color="blue" >
ສ້າງພະເເນກ
</v-btn>
</div>

</v-card>
      </v-col>







      <v-col
        cols="12"
        sm="7"
      >
      <v-card height="650" >
        
      
      <v-table density="compact" height="auto" class=" pt-5">
    <thead>
      <tr>
        <th class="text-left">
          ລຳດັບ
        </th>
        <th class="text-left">
          ໝວດໝູ່ວັນພັກ
        </th>
        <th class="text-left">
          ຊື່ວັນພັກ
        </th>
        <th class="text-left">
          ວັນທີ່ພັກ
        </th>
        <th class="text-left">
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




    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false
    }),



    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },



    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },




    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }


}

</script>






<style lang="scss" scoped>

</style>