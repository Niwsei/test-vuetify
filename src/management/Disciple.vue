<template>
  <div>
    <!-- card -->
    <v-card height="auto" elevation="0">
      <v-card-title>
        <h3 class="mt-5 font-weight-regular">ສ້າງສີດ</h3>
      </v-card-title>
      <v-card-text class="pt-10 px-7">
        <p class="font-weight-black pb-2">ຊື່ສິດ</p>
        <v-text-field
          class="border border-1"
          variant
          density="compact"
          hide-details
        ></v-text-field>
      </v-card-text>

      <div class="d-flex justify-end px-10 py-10">
        <v-btn
          rounded
          size="large"
          class="text-blue-grey-lighten-5 bg-deep-orange-accent-3"
        >
          ສ້າງສີດ
        </v-btn>
      </div>
    </v-card>

  
    <v-table density="compact" height="auto" class="mt-15 pt-5 border border-1">
      <thead>
        <tr>
          <th class="text-left">ເລກລຳດັບ</th>
          <th class="text-left">ຊື່ສິດ</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in disciple" :key="index">
          <td>{{ index }}</td>
          <td class="pr-15">{{ item.namedisciple }}</td>
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
                      <h2 class=" font-italic text-blue-grey-lighten-3"  >ຜູ້ອຳນວຍການ</h2>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="4" class="text-end">
                    <v-btn variant @click="close" >Close</v-btn>
                  </v-col>
                  </v-row>
                  
                  <v-row>
                    <v-col cols="11" class="mt-5"  >
                      <h1 class=" font-italic text-blue-grey-lighten-3">ຊື່ສິດ</h1>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      disciple:[

      {
        number:"8",
        namedisciple:"eie",
      }
      ],

      dialog: false,
      dialogs: false,
    }
  },
  methods:{
    close(){
        this.dialog = false;
        // this.$nextTick(() => {
        //   this.dessert.name = Object.assign({},this.defaultdessert)
        // })
      },
  }
};
</script>

<style scoped></style>