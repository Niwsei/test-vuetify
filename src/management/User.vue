<template>
  <div>

    <v-card height="auto" elevation="0" >
      <v-card-title ><h3 class="font-weight-regular mt-5 ml-5">ສ້າງຜູ້ໃຊ້</h3></v-card-title>

      <v-card-text class="py-5 px-5">
        <form @submit.prevent="submit">
          <p for="" class="font-weight-black">ຊື່ ເເຫລະ ນາມສະກຸນ ພະນັກງານ</p>
          <v-text-field 
          class="border rounded my-3"
          variant
          density="compact"
          hide-details
          ></v-text-field>

          <p class="font-weight-black">ຢູສເຊີ້</p>
          <v-text-field 
          class="border rounded my-3"
          variant
          density="compact"
          hide-details
          ></v-text-field>
          
          <p class="font-weight-black">ສິດເຂົ້າເຖິງ</p>
          <v-select 
          class="my-3 border rounded"
          value="ສ້າງສິດ" 
          variant 
          :items="disciple"
          density="compact"
          hide-details
          ></v-select>

          <p class="font-weight-black">ພະເເນກ</p>
          <v-select 
          class="my-3 border rounded"  
          variant 
          value="ເລຶອກພະເເນກ"
           :items="department" 
          density="compact"
          hide-details
          ></v-select>

          <div class="d-flex justify-end px-10 py-5">
            <v-btn 
            rounded 
            elevation="0"
            type="submit" 
            size="large" 
            class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 mt-5 mr-5"
            > ເພີ່ມຜູ້ໃຊ້ </v-btn>
          </div>
        </form>
      </v-card-text>
    </v-card>
  </div>

  <v-card class="mt-15" elevation="0">
    <v-container>
    <v-row class="d-flex justify-end my-5">
      <v-col cols="3">
      <v-text-field type="search" variant density="comfortable" hide-details class="border rounded" placeholder="search..." ></v-text-field>
  </v-col>
  </v-row>
  <hr color="#ECEFF1">
  <v-table density="compact" height="auto" class="mt-15">
    <thead>
      <tr>
        <th class="text-left font-weight-bold ">ເລກລຳດັບ</th>
        <th class="text-left font-weight-bold ">ຊື່ຜູ້ໃຊ້</th>
        <th class="text-left font-weight-bold ">ຢູສເຊີ້</th>
        <th class="text-left font-weight-bold ">ພະເເນກ</th>
        <th class="text-left font-weight-bold ">ສະຖານະ</th>
        <th class="text-left font-weight-bold ">ສິດຈັດການ</th>
        <th class="text-left font-weight-bold "> </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dessert" :key="index">
        <td>{{ index }}</td>  
        <td>{{ item.username }}</td>
        <td>{{ item.department }}</td>
        <td>{{ item.user }}</td>
        <td class="bg-primary">{{ item.status }}</td>
        <td>{{ item.disciple }}</td>
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
</template>

<script>
export default {
  data() {
    return {

      dialog: false,
      dialogDelete: false,

      disciple:["ເລືອກສິກ", "ຊຸບເປີເເອັດມິນ", "ບັນຊີ", "ເເຄສເຊຍ", "ສິນເຊື່ອ", "ການຕະຫຼາດ", "ບໍລິຫານ"  ],

      department:["ເລືອກພະເເນກ", "ໄອທີ", "ອອກເເບບ", "ຄັງເງິນ", "ສິນເຊື່ອ", "ການຕະຫຼາດ", "ບໍລິຫານ"      ],

      dessert: [
        {
        username:"ທ່ານສີຍົນ",
        user:"siyon",
        department:"ບໍລິຫານ",
        status:"ເປີດນຳໃໍຊ້",
        disciple:"ຜູ້ອຳນວຍການ",
       
        },
      {
        username:"ທ່ານສີຍົນ",
        user:"siyon",
        department:"ບໍລິຫານ",
        status:"ເປີດນຳໃໍຊ້",
        disciple:"ຜູ້ອຳນວຍການ",
      }
      ],
    };
  },
};
</script>

<style scoped>
*{
  letter-spacing: -0.5px;
}
</style>
