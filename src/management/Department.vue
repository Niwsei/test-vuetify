<template>
  <div>
    <!-- card -->
    <v-card height="300" elevation="0">
      <v-card-title>
        <h3 class="font-weight-regular mt-5 ml-5">ສ້າງພະເເນກ</h3>
      </v-card-title>

      <v-card-text class="py-10 px-5">
        <label style="font-size: 16px; font-weight: bold">ຊື່ພະເເນກ</label>
        <v-form validate-on="submit lazy" @submit.prevent="submitForm">
          <v-text-field
            v-model.trim="forms.name"
            class="border border-1 border-deep-purple-lighten-2 rounded mt-2"
            variant
            density="compact"
            hide-details
          ></v-text-field>
          <div class="d-flex justify-end px-10 py-10">
            <v-hover v-slot="{isHovering , props}" >  <!-- open-delay="500" close-delay="500" -->
 
            <v-btn  v-bind="props"   :color="isHovering ? 'deep-orange-accent-3' : 'deep-orange-accent-3' " 
              rounded
              elevation="0"
              text="submit"
              type="submit"
              size="large"
              active-class="actives"
              style="letter-spacing: -0.1px"
            >
              ສ້າງພະເເນກ
            </v-btn>

          </v-hover>
          </div>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- table -->
    <v-card height="auto" class="mt-15 " elevation="0">
      <v-container>
        
    <v-table class="mt-15 " theme="">
      <thead>
        <tr>
          <th  class="text-left font-weight-bold pl-15">ເລກທີ</th>
          <th class="text-left font-weight-bold pl-15">ພະເເນກ</th>
          <th class="text-left"></th>
        </tr>
      </thead>


      <tbody>
        <tr v-for=" item in depart" :key="item.depart_id">
          <td>{{ item.depart_id }}</td>
          <td>{{ item.depart_name }}</td>
          <td>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn icon flat dark v-bind="props">
                  <v-icon extended>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list class="d-flex flex-column" width="150px">
                <v-dialog  v-model="dialog" persistent height="auto" width="700">
                  <template v-slot:activator="{ props }">
                    <v-btn class="w-100" flat v-bind="props"> ເເກ້ໄຂ </v-btn>
                  </template>
                  <v-card>
                    <v-container>
                    <v-row>
                      <v-col cols="4">
                      <h2 class=" font-italic text-blue-grey-lighten-3"  >ຂົນສົ່ງ</h2>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="4" class="text-end">
                    <v-btn variant @click="close">Close</v-btn>
                  </v-col>
                  </v-row>
                  
                  <v-row>
                    <v-col cols="11" class="mt-5"  >
                      <h1 class=" font-italic text-blue-grey-lighten-3">ຊື່ພະເເນກ</h1>
                            <v-text-field 
                            class="border border-1"
                           variant
                            v-model="item.name"
                            density="compact"
                            hide-details
                              required
                            ></v-text-field>
                  </v-col>
                  </v-row>




                  <v-row >
                    <v-col cols="12">
                    <v-card-actions class="text-end d-flex justify-end align-end">
                      <v-btn
                        type="submit"
                        size="large"
                        class="text-blue-grey-lighten-5 bg-deep-orange-accent-3"
                        color="deep-orange-accent-3"
                      >
                        ເເກ້ໄຂ
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                  </v-row>
                </v-container>
                  </v-card>
                </v-dialog>

                <!-- <v-list-item> ລືບ </v-list-item> -->

                <v-dialog v-model="dialogDelete" persistent width="1024">
                  <template v-slot:activator="{ props }">
                    <v-btn flat v-bind="props">
                      ລືບ
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
                        
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list>
            </v-menu>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
  </v-card>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '../stores/auth';
// import test from '../alert/test.vue'
export default {
  // components:{test},

  data() {
    return {

      department:'',
      depart: [],
   
      dessert: [
        {
        name: "siyon",
        
      },
      {
        name: "siyon",
        
      },
    ],
     

  

      dialog: false,
      dialogDelete: false,
      
      
     

      forms: {
        name: "",
      },

      employee: [],
    };
  },

setup() {
 const store = useAuthStore();
 return{store};
},


  methods: {
    //  oninput(event) {
    //  this.name = event.target.value;
    //  },

    submitForm(event) {
      this.employee = event.target.value;
      console.log(this.employee);

      // this.loading = true;
      // const results = await event;
      // this.loading = false;
    },
    close(){
        this.dialog = false;
        this.$nextTick(() => {
          this.dessert.name = Object.assign({},this.defaultdessert)
        })
      },

      addUser(){


        try {

          axios.post('http://149.129.55.90:5050/depart/add' , {depart_name:this.department} ,  {headers: { 'authorization':`Bearer ${this.store.get_token}`}})
            
        }
        catch {

        }
      },

   

 


 
      showDepartments(){

      const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXBhcnRfaWQiOjEsImlhdCI6MTcwNzcxODEzOX0.WSTmWd8xs5Tz3H65Do2JX-5QnEKBqmLszvSJvV0xNSk` }
      };
      axios.post( 
      'http://149.129.55.90:5050/masterdata/depart/get',
      config
      ).then(console.log).catch(console.log);

        // axios.post('http://149.129.55.90:5050/masterdata/depart/get' , 
        //  {headers: {Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXBhcnRfaWQiOjEsImlhdCI6MTcwNzcxODEzOX0.WSTmWd8xs5Tz3H65Do2JX-5QnEKBqmLszvSJvV0xNSk"  }})
        //   .then((res) => {
        //     /* this.depart = res.data; */
        //     console.log('data:' , "hello");
            
        //   })
        //   .catch((error) => {
        //     console.log('error:' , error)
        //   })


      }

 
  },

  created(){
    this.showDepartments();
  }
};
</script>


<style scoped>

.actives {
background: black;
color: white;
}


</style>
