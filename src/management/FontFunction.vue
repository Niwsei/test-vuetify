<template>
  <div>

    <v-card height="550" elevation="0">
      <v-card-title><h3 class="mt-5 ml-5 font-weight-regular">ຈັດການຫນ້າຟັງຊັ້ນ</h3></v-card-title>

      <v-card-text class="py-10 px-5">
        <form @submit.prevent="submit">
          <div>
            <label for="" class="font-weight-black">ຫົວຂໍ້</label>
            <v-select
              :items="section"
              variant="outlined"
              density="compact"
              hide-details
              label="ເລືອກຫົວຂໍ້"
            ></v-select>
          </div>


          <div class="my-10">
            <label for="" class="font-weight-black">ຊື່ຫນ້າ</label>
            <v-text-field
              class="border border-1 mt-2"
              hide-details
              variant
              density="compact"
            ></v-text-field>
          </div>


          <div>
            <label for="" class="font-weight-black">ຊື່ໄຟຣ</label>
            <v-text-field
              class="border border-1 mt-2"
              hide-details
              variant
              density="compact"
            ></v-text-field>
          </div>


          <div class="d-flex justify-end px-10 py-10">
            <v-btn
              rounded
              size="large"
              type="submit"
              class="text-blue-blue-grey-lighten-5"
              color="deep-orange-accent-3"
            >
              ເພີ່ມຂໍ້ມູນ
            </v-btn>
          </div>
        </form>
      </v-card-text>
    </v-card>
  </div>


  <v-table density="compact" height="auto" class="mt-15">
    <thead>
      <tr>
        <th class="text-left">ເລກລຳດັບ</th>
        <th class="text-left">ຊື່ຫນ້າ</th>
        <th class="text-left">ຊື່ໄຟຣ</th>
        <th class="text-left">ຫົວຂໍ້</th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item , index) in desserts" :key="index">
        <td>{{ item.number }}</td>
        <td>{{ item.namepage }}</td>
        <td>{{ item.namefile }}</td>
        <td>{{ item.section }}</td>
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
                    <v-btn variant @click="close" >Close</v-btn>
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

                <v-dialog v-model="dialogs" persistent width="1024">
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
</template>

<script>
export default {
  data() {
    return {

      section: [
        "ເລືອກຫົວຂໍ້",
        "ຈັດການຂໍ້ມູນ",
        "ຈັດການຄຳຂໍ",
        "ສິນເຊື່ືອ",
        "ການເງີນ",
        "ກົດໝາຍ",
        "ລາຍງານ",
      ],

      dialog: false,
      dialogs:false,







      desserts: [
        {
        number: "0",
        namepage: "siyon",
        namefile: "siyon",
        section: "siyon",
        
      },
      {
        number: "0",
        namepage: "siyon",
        namefile: "siyon",
        section: "siyon",
        
      },
    ],
    }
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
      // this.$nextTick(() => {
      //   this.dessert.name = Object.assign({},this.defaultdessert)
      // })
    },


},
}
</script>

<style lang="scss" scoped></style>



