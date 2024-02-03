<template>
    <div>
        <!-- card -->
    <v-card height="300" >
         <v-card-title>
            <h3 class="font-weight-regular mt-5 ml-5">ສ້າງພະເເນກ</h3>

        </v-card-title> 

            <v-card-text  class="py-10 px-5">
              {{ JSON.stringify(forms) }}
        <label style="font-size: 16px;font-weight: bold;" >ຊື່ພະເເນກ</label>
        <v-form validate-on="submit lazy" @submit.prevent="submitForm">
          <v-text-field
            v-model.trim="forms.name"
            class="border border-1 border-primary"
            color="border-primary"
            required
            variant="outlined"
            hide-details
          ></v-text-field>
          <div class="d-flex justify-end px-10 py-10">
      <v-btn rounded
      text="submit"
      type="submit"
      variant="tonal"
      size="large"
      class="bg-thirteen"
        >
        
        ສ້າງພະເເນກ
      </v-btn>
    </div>
        </v-form>
        
     </v-card-text>
    </v-card>







    <!-- table -->

    <v-table density="compact" height="auto" class="mt-15 pt-5">
    <thead>
      <tr>
        <th class="text-left">
          ເລກທີ
        </th>
        <th class="text-left">
          ພະເເນກ
        </th>
        <th class="text-left">
          
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



    </div>
</template>

<script>
// import test from '../alert/test.vue'
export default {
    // components:{test},

    

    data() {
        return {

         dessert:{
            name:"siyon" , lname:"sithongloun", age:"20" ,
         },

         dialog: false,

         forms:{
       name:""
      },
      
       employee:[],
        }
        
    },
    methods: {

    //  oninput(event) {
    //  this.name = event.target.value;
    //  },

      submitForm(event) {
      this.employee = event.target.value;
      console.log(this.employee)




        // this.loading = true;
        // const results = await event;
        // this.loading = false;

      },


    },
}
</script>

<style lang="scss" scoped>

</style>