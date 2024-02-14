<template>
  <div>
    <h1>ລົງທະບຽນຂໍ້ມູນລູກຄ້າ</h1>

    <v-card height="auto" elevation="0">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="3">
              <v-card class="ml-10 mt-5" height="auto" flat>
                
                <v-img
                  class="rounded-lg"
                  v-if="selectedImage"
                  :src="selectedImage"
                  width="126"
                  height="140"
                  contain
                ></v-img>

                <v-btn
                  @click="openFileInput"
                  elevation="0"
                  style="position: absolute; top: 90px; left: 80px"
                  icon="mdi-camera"
                  class="bg-blue"
                  
                ></v-btn>
                <input
                  ref="fileInput"
                  type="file"
                  style="display: none"
                  @change="handleFileChange"
                />
    
              </v-card>
            </v-col>
            <v-col cols="9">
              <v-row>
            <v-col cols="3">
              <h4>ຊື່</h4>
              <v-text-field
               type="text"
                flat 
                variant
                density="compact"
                hide-details
                class="border rounded mt-2"
                ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ນາມສະກຸນ</h4>
              <v-text-field 
              type="text"
               flat
               variant
                density="compact"
                hide-details
                class="border rounded mt-2"
                ></v-text-field>
            </v-col>

            <v-col cols="2">
              <h4>ເພດ</h4>
              <v-radio-group density="compact" class="mt-2" inline>
                <v-radio value="ຊາຍ">
                  <template v-slot:label>
                 <strong class="text-black" >ຊາຍ</strong>
                </template>
                </v-radio>
                <v-radio value="ຍິງ">
                  <template v-slot:label>
                 <strong class="text-black">ຍິງ</strong>
                </template>
                </v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="3">
              <h4>ດ/ວ/ປ ເກີດ</h4>
              <v-text-field 
              type="date"
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>
          </v-row>


          <v-row>
            <v-col cols="2">
              <h4>ອາຍຸ</h4>
              <v-text-field
               type="text" 
              flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2" 
              ></v-text-field>
            </v-col>

            <v-col cols="2">
              <h4>ສັນຊາດ</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ເບີໂທ</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ເບີວອດເເອັບ</h4>
              <v-text-field type="text" flat
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

          </v-row>



          <v-row>
            <v-col cols="3">
              <h4>ອາຊີບ</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ສະຖານທີ່ເຮັດວຽກ</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ປະເພດທີ່ພັກອາໄສ</h4>
              <v-select
              :items="live"
              class="border rounded mt-2"
              density="compact"
              hide-details
              variant
              v-model="lived"
              > </v-select>
            </v-col>

            <v-col cols="3">
              <h4>ເວລາພັກອາໄສ(ອາໄສຢູ່ມາໃດ)</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

          </v-row>



          <v-row>
            <v-col cols="3">
              <h4>ປະເພດເວລາ</h4>
              <v-select
              :items="time"
              class="border rounded mt-2"
              density="compact"
              hide-details
              variant
              v-model="timed"
              > </v-select>
            </v-col>

            <v-col cols="3">
              <h4>ສະຖານະຄວາມເປັນເຈົ້າຂອງ</h4>
              <v-select
              class="border rounded mt-2"
              density="compact"
              hide-details
              variant
              :items="status"
              v-model="statused"
              
              > </v-select>
            </v-col>

          </v-row>
          </v-col>
          </v-row>



          <v-row>
            <v-col cols="2">
              <h4>ໜ່ວຍ:</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="2">
              <h4>ເຮືອນເລກທີ:</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ບ້ານ</h4>
              <v-text-field type="text" flat
              variant
                density="compact"
                hide-details
                class="border rounded mt-2" 
              ></v-text-field>
            </v-col>

            <v-col cols="2">
              <h4>ເເຂວງ</h4>
              <v-select
              class="border rounded mt-2"
              density="compact"
              hide-details
              variant
              :items="city"
              v-model="cityed"
              
              > </v-select>
            </v-col>

            <v-col cols="2">
              <h4>ເມືອງ</h4>
              <v-select  class="border rounded mt-2"
              density="compact"
              hide-details
              variant> </v-select>
            </v-col>

          </v-row>




          <v-row>
            <v-col cols="2">
              <h4>ເລກບັດປະຈຳຕົວ:</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="2">
              <h4>ວັນທີ່ອອກບັດປະຈຳຕົວ</h4>
              <v-text-field type="date" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2 " 
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ວັນທີ່ໝົດອາຍຸບັດປະຈຳຕົວ</h4>
              <v-text-field type="date" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="2">
              <h4>ຮູບບັດປະຈຳຕົວ:</h4>
              <v-card class="ml-10 mt-5 border rounded-lg" height="auto" elevation="0" >
                <v-img
                
                  v-if="selectedImages"
                  :src="selectedImages"
                  
                  contain
                ></v-img>

                <v-btn
                  @click="openFileInput"
                  elevation="0"
                  style="position: absolute; top: 85px; left: 85px"
                  icon="mdi-camera"
                  class="bg-blue"
                ></v-btn>
                <input
                  ref="fileInput"
                  type="file"
                  style="display: none"
                  @change="handleFileChange"
                />
              </v-card>
            </v-col>

          </v-row>




          <v-row>
            <v-col cols="3">
              <h4>ເລກປື້ມສຳມະໂນຄົວ:</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ວັນທີ່ອອກສຳມະໂນຄົວ</h4>
              <v-text-field type="text" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <h4>ວັນທີ່ໝົດອາຍຸສຳມະໂນຄົວ</h4>
              <v-text-field type="date" flat 
              variant
                density="compact"
                hide-details
                class="border rounded mt-2"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="7">
              <v-sheet class="d-flex mb-5">
            <h4>ເລືອກຮູບພາບປື້ມສຳມະໂນຄົວ</h4>
            <input type="file" multiple accept="image/*" variant="outlined">
          </v-sheet>
            <hr>
            <v-sheet>
              <v-img>
                \\\
              </v-img>
            </v-sheet>
            <hr>
            </v-col>
          </v-row>

          <v-row class="my-5">
            <v-col cols="12" class="  d-flex justify-center">
          <v-btn  class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 w-50" elevation="0" color="red" size="large">ບັນທຶກ</v-btn>
            </v-col>
          </v-row>




        </v-container>
      </v-form>
    </v-card>


    <h3 class="mt-15">ລາຍການຂໍ້ມູນລູກຄ້າ:</h3>
    <v-card height="auto" elevation="0">





      <v-data-table
    
    :headers="headers"
    :items="desserts"
  >
  <template v-slot:top>
      <v-toolbar
        flat
      >
        
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="700px"
          
        >
         
          <v-card flat>
            <v-card-title>
              <span ><h4>ອັບເດດຂໍ້ມູນລູກຄ້າ</h4></span>
            </v-card-title>
            <hr>

            <v-card-text class="py-8">
              <v-container>


              </v-container>
            </v-card-text>
            <hr>

            <v-card-actions class=" py-7 pr-8">
              <v-spacer></v-spacer>
              <v-btn
              height="45px"
              class="bg-pink"
                color="white-darken-3"
                variant="text"
                @click="close"
              >
                <h4 class="px-5">CLOSE</h4>
              </v-btn>
              <v-btn
              height="45px"
              class="bg-purple"
                color="white-darken-3"
                variant="text"
                @click="save"
              >
               <h4 class="px-8">SAVE CHANGES</h4>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="300px">
          <v-card  class="rounded-xl ">
            <v-card-title class=" d-flex justify-center align-center" color="green-lighten-3"><h5>ເເຈ້ງເຕືອນ</h5></v-card-title>
            <hr>
            <v-card-text><p class=" d-flex justify-center align-center">ທ່ານຕ້ອງການທີ່ຈະລົບ ຫຼື ບໍ່?</p></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white-darken-1" variant="text" class="bg-green" @click="closeDelete">ຕົກລົງ</v-btn>
              <v-btn color="white-darken-1" variant="text" @click="deleteItemConfirm">ຍົກເລິກ</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>



    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>





    
    <!-- <template v-slot:item.ud="{ item } ">
      <v-icon color="primary"
        v-model="item.ud"
        readonly
      >mdi-delete</v-icon>
    </template>

    <template v-slot:item.ud="{ item } ">
      <v-icon color="primary"
        v-model="item.ud"
        readonly
      >mdi-pencil</v-icon>
    </template> -->

    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
  </v-data-table>

      
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {

      dialog: false,
      dialogDelete: false,

      lived:["ເລືອກ..."],
      live:["ເລືອກ...","ເຮືອນ","ຫ້ອງເເຖວ","ອາພາດເມັ້ນ"],

      timed:["ລອກປະເພດເວລາ"],
      time:["ລອກປະເພດເວລາ","ວັນ","ເດືອນ","ປີ",],

      statused:["ເລືອກ"],
      status:["ເລືອກ","ເຮືອນຕົນເອງ","ເຮືອນພໍ່ເເມ່","ເຮືອນເຊົ່າ","ເຮືອນພີ່ນ້ອງ",],

      cityed:["ເລືອກເມືອງ...",],
      city:["ເລືອກເມືອງ...","ນະຄອນຫຼວງວຽງຈັນ","ວຽງຈັນ","ອັດຕະປື","ບໍ່ເເກ້ວ","ບໍລິຄຳໄຊ","ຈຳປາສັກ","ຫົວພັນ","ຄຳມ່ວນ","ຫຼວງນ້ຳທາ","ຫຼວງພະບາງ","ອຸດົມໄຊ","ຜົ້ງສາລີ","ສາລະວັນ","ສະຫວັນນະເຂດ","ເຊກອງ","ໄຊຍະບູລີ","ຊຽງຂວາງ","ໄຊສົມບູນ"],








      headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: ' ຮູບ',
          },
          
          { title: 'ຊື່ລູກຄ້າ', key: 'ຊື່ລູກຄ້າ' },
          { title: 'ອາຍຸ ', key: 'ອາຍຸ' },
          { title: 'ເບີໂທ ', key: 'ເບີໂທ' },
          { title: 'ເບີວອດແອັບ ', key: 'ເບີວອດແອັບ' },
          { title: 'ບ້ານ ', key: 'ບ້ານ' },
          { title: 'ເມືອງ ', key: 'ເມືອງ' },
          { title: 'ເເຂວງ ', key: 'ເເຂວງ' },
          { title: 'Actions', key: 'actions', sortable: false },
        
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
      },
      defaultItem: {
        name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
      },


      selectedImage:
        "http://149.129.55.90/SCNMF_UAT/images/User.png",
        selectedImages:
        "http://149.129.55.90/SCNMF_UAT/images/pic.jpg",
      
        
      }
  },

  computed: {
      // formTitle () {
      //   return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      // },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },



  methods: {


    initialize () {
        this.desserts = [
          {
            name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
          },
          {
            name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
          },
          {
            name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
          },
          {
            name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
          },
          {
            name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
          },
          {
            name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
          },
          {
            name: '',
        ຊື່ລູກຄ້າ: 0,
        ອາຍຸ: 0,
        ເບີໂທ: 0,
        ເບີວອດແອັບ: 0,
        ບ້ານ: 0,
        ເມືອງ: 0,
        ເເຂວງ: 0,
          },
          
        ]
      },















    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        // Assuming you have a method to convert the file to a data URL
        this.convertFileToDataURL(file).then((dataURL) => {
          this.selectedImage = dataURL;
        });
      }
    },
    convertFileToDataURL(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          resolve(event.target.result);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    },




    editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },


  },
};
</script>

<style lang="scss" scoped></style>
