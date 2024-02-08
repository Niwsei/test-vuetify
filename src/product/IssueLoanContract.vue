<template>
    <div>
<h1>ອອກສັນຍາປ່ອຍກູ້</h1>
<v-card height="auto" elevation="0">

    <v-sheet class="mt-10 ml-10">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>

      <v-sheet>
        <v-card class="d-flex align-center flex-column" elevation="0" height="auto">
            <v-container>
                <v-row>
                    <v-col cols="2" class="mt-3 text-center">
                        <h4>ເລກທີ່ຊັນຍາ</h4>
                    </v-col>

                    <v-col cols="2">
                        <v-sheet class=" text-center pa-2 border border-2">
                    <span class=" font-weight-bold">0082</span>
                        </v-sheet>
                   </v-col>

                   <v-col cols="2" class="mt-2">
                        <h4>/ສກຈບ ສຈນ</h4>
                    </v-col>

                <v-col cols="3">
                <h4>ວັນທີ່ອອກສັນຍາ(ເດືອນ/ວັນ/ປີ)</h4>
                <v-text-field type="date" hide-details density="compact" variant class="border rounded"></v-text-field>
                </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <h4>ຄົ້ນຫາລູກຄ້າ ຫຼື ເບີໂທ</h4>
                <v-text-field type="text" hide-details density="compact" variant class="border rounded pt-2 mt-2"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-card variant class="pb-10 border">
                            <h3 class="font-weight-regular mt-4 ml-6"> ເລືອກຜູ້ຄ້ຳປະກັນ</h3>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-card variant class="pb-10 border">
                            <h3 class="font-weight-regular mt-4 ml-6"> ເລືອກມູນຄ່າຂໍ່ກູ້ຢືມ</h3>
                            <v-container>
                            <v-select variant class="border" hide-details density="comfortable"> </v-select>
                        </v-container>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-card variant class="pb-10 border">
                            <h3 class=" font-weight-regular mt-4 ml-6"> ເລືອກຜູ້ຄ້ຳປະກັນ</h3>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="3">
                    <h4>ຄ່າທຳນຽມປ່ອຍກູ້</h4>
                    <v-text-field variant class="border mt-2 pt-2 rounded" hide-details density="compact" type="text"></v-text-field>
                    </v-col>

                    <v-col cols="3">
                    <h4>ຄ່າທຳນຽມປະເມີນສັບສິນ</h4>
                    <v-text-field variant class="border mt-2 pt-2 rounded" hide-details density="compact" type="text"></v-text-field>
                    </v-col>
                </v-row>

                <v-row class="mt-10">
                    <v-col cols="12" class="text-center">
                        <v-btn 
                        size="large"
              class="text-blue-grey-lighten-5 bg-deep-orange-accent-3 w-50 "
              color="deep-orange-accent-3" 
              ><h3 class="font-weight-regular">ຢືນຢັນອອກສັນຍາ</h3></v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <v-sheet class="border border-5 mt-10">
        <v-card height="auto" elevation="0">
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
<v-btn color="green" class="h-75 ml-5">ຕົກລງ</v-btn>
             </v-col>
          </v-row>

          <v-table>
            <thead>
                <tr>
                    <th class="font-weight-bold">ລ/ດ</th>
                    <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                    <th class="font-weight-bold">ເບີໂທ</th>
                    <th class="font-weight-bold">ເຫດຜົນກູ້ຢືມ</th>
                    <th class="font-weight-bold">ມູນຄ່າກູ້ຢືມ(LAK)</th>
                    <th class="font-weight-bold">ມູນຄ່າກູ້ຢືມ(THB)</th>
                    <th class="font-weight-bold">ມູນຄ່າກູ້ຢືມ(USD)</th>
                    <th class="font-weight-bold">ຄ່າທຳນຽມອະນຸມັດເງິນກູ້</th>
                    <th class="font-weight-bold">ຄ່າປະເມີນຫຼັກຊັບຄ້ຳປະກັນ</th>
                    <th class="font-weight-bold">ວັນທີ່ອອກສັນຍາ</th>
                    <th class="font-weight-bold">ACTION</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(value , index) in listCIF" :key="index">
                    <td>{{ value.number }}</td>
                    <td>{{ value.numberCIF }}</td>
                    <td>{{ value.userName }}</td>
                    <td>{{ value.tell }}</td>
                    <td>{{ value.exit }}</td>
                    <td>{{ value.dateExit }}</td>
                    <td>{{ value.action }}</td>
                </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-sheet>

      </v-sheet>
</v-card>

   </div>
</template>

<script>

export default {
    data() {
        return {
            listCIF : [
                {
                number:"0",
            numberCIF:"0001",
            userName:"siyon",
            tell:"02077912018",
            exit:"jack",
            dateExit:"2/10/2024",
            action:"success",
                }
        ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>