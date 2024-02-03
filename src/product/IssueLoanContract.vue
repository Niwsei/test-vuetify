<template>
    <div>
<h1>ອອກສັນຍາປ່ອຍກູ້</h1>
<v-card height="1000px">

    <v-sheet class="mt-10 ml-10">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>

      <v-sheet>
        <v-card class="d-flex align-center flex-column" height="1000px">
            <v-container>
                <v-row>
                    <v-col cols="2" class="mt-2">
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
                <v-text-field type="date" variant="outlined"></v-text-field>
                </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <h4>ຄົ້ນຫາລູກຄ້າ ຫຼື ເບີໂທ</h4>
                <v-text-field type="text" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-card variant="outlined pb-10">
                            <h3 class="mt-4 ml-6"> ເລືອກຜູ້ຄ້ຳປະກັນ</h3>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-card variant="outlined pb-10">
                            <h3 class="mt-4 ml-6"> ເລືອກມູນຄ່າຂໍ່ກູ້ຢືມ</h3>
                            <v-container>
                            <v-select variant="outlined"> </v-select>
                        </v-container>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-card variant="outlined pb-10">
                            <h3 class="mt-4 ml-6"> ເລືອກຜູ້ຄ້ຳປະກັນ</h3>
                        </v-card>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="3">
                    <h4>ຄ່າທຳນຽມປ່ອຍກູ້</h4>
                    <v-text-field variant="outlined" type="text"></v-text-field>
                    </v-col>

                    <v-col cols="3">
                    <h4>ຄ່າທຳນຽມປະເມີນສັບສິນ</h4>
                    <v-text-field variant="outlined" type="text"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn class="bg-red w-50" height="50px" color="white" ><h2>ຢືນຢັນອອກສັນຍາ</h2></v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

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