<template>
  <div>
    <h1>ຊຳລະຄ່າງວດ</h1>
    <v-card height="auto" elevation="0">
      <v-sheet class="mt-10 ml-10">
        <v-btn class="text-primary border border-none" variant="outlined">
          ເພີມCIF
        </v-btn>
        <v-btn class="text-primary border border-none" variant="outlined">
          ລາຍການຂໍ້ມູນ(CIF)
        </v-btn>
      </v-sheet>

      <v-card height="auto" elevation="0" class="border">
        <v-row class="d-flex text-center justify-center">
          <v-col cols="6" >
            <v-row>
              <v-col cols="12">
                <h4 class="mt-5">ຄົ້ນຫາ ເລກບັນຊີ ລູກຄ້າ ຫຼື ເບີໂທ</h4>
              </v-col>
              <v-col cols="12" class="d-flex">
                <v-text-field
                  type="text"
                  hide-details
                  density="comfortable"
                  variant
                  class="border ronded"
                ></v-text-field>
                <v-btn size="x-large" class="" color="red">ຄົ້ນຫາ</v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h4>ປະເພດການເຄື່ອນໄຫວບັນຊີ</h4>
                <v-select variant="outlined"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h4>ປະເພດການເຄື່ອນໄຫວບັນຊີ</h4>
                <v-select variant="outlined"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h4>ປະເພດການເຄື່ອນໄຫວບັນຊີ</h4>
                <v-select variant="outlined"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h4>ມູນຄ່າງວດ</h4>
                <v-text-field
                  type="text"
                  class="border bg-blue-grey-lighten-5 rounded"
                  hide-details
                  density="comfortable "
                  variant
                ></v-text-field>
              </v-col>
              <v-col>
                <h4>ມູນຄ້າດອກເບ້ຍ</h4>
                <v-text-field type="text" class="border bg-blue-grey-lighten-5 rounded"
                  hide-details
                  density="comfortable "
                  variant></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h4>ຈຳນວນວັນເກີນກຳນົດ</h4>
                <v-text-field
                  type="text"
                  class="border bg-blue-grey-lighten-5 rounded"
                  hide-details
                  density="comfortable "
                  variant
                ></v-text-field>
              </v-col>
              <v-col>
                <h4>ມູນຄ່າປັບໄໝ</h4>
                <v-text-field type="text"
                class="border rounded"
                  hide-details
                  density="comfortable "
                  variant></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h4>ຍອດຊຳລະຕົວຈີ່ງ</h4>
                <v-text-field
                  type="text"
                  class="border bg-blue-grey-lighten-5 rounded"
                  hide-details
                  density="comfortable "
                  variant
                ></v-text-field>
              </v-col>
              <v-col>
                <h4>ສະກູນເງິນ</h4>
                <v-text-field type="text"
                 class="border bg-blue-grey-lighten-5 rounded"
                  hide-details
                  density="comfortable "
                  variant></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mb-8 mt-5 ">
              <v-col>
                <h4>ວັນທີ່ຊຳລະ</h4>
                <v-text-field
                id="wow"
                  type="date"
                  class="border rounded"
                  hide-details
                  density="compact"
                  variant
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn  color="red w-100"
              elevation="0"
              text="submit"
              type="submit"
              size="large"
              class="text-blue-grey-lighten-5 bg-deep-orange-accent-3"
                >ຄົ້ນຫາ</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>





        <v-card height="auto" elevation="0" class="border">
          <v-container>
            <v-row no-gutters class="ml-5">
            <v-col cols="3" class="ml-1 mt-7">
              <h4>ເເຕ່ວັນທີ</h4>
            </v-col>
            <v-col cols="3" class="ml-6 mt-7">
              <h4>ຫາວັນທີ</h4>
            </v-col>
          </v-row>
          <v-row no-gutters class="ml-5">
            <v-col cols="3" class="mr-5">
              <v-text-field type="date" hide-details density="compact" class="border rounded" variant > </v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field type="date"  hide-details density="compact" class="border rounded" variant > </v-text-field>
            </v-col>

            <v-col cols="3" >
<v-btn class=" ml-5 bg-green-accent-4 text-grey-lighten-5" size="large" >ຕົກລງ</v-btn>
             </v-col>
          </v-row>


          <hr color="#ECEFF1" class="my-5">
          <hr color="#ECEFF1" class="my-5">




          <v-table>
            <thead>
              <tr>
                <th class="font-weight-bold">ລ/ດ</th>
                <th class="font-weight-bold">ຊື່ລູກຄ້າ</th>
                <th class="font-weight-bold">ເບີໂທ</th>
                <th class="font-weight-bold">ເລກບິນອ້າງອິງ</th>
                <th class="font-weight-bold">ເລກສັນຍາກູ້ຢືມ</th>
                <th class="font-weight-bold">ງາດທີ່</th>
                <th class="font-weight-bold">ມູນຄ່າງວດ</th>
                <th class="font-weight-bold">ດອກເບ້ຍ</th>
                <th class="font-weight-bold">ມູນຄ່າປັບໃໝ່</th>
                <th class="font-weight-bold">ລວມເງີນຕ້ອງຊຳລະ</th>
                <th class="font-weight-bold">ສະກຸນເງີນ</th>
                <th class="font-weight-bold">ວັນທີ</th>
                <th class="font-weight-bold">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in listCIF" :key="index">
                <td>{{ value.number }}</td>
                <td>{{ value.username }}</td>
                <td>{{ value.tell }}</td>
                <td>{{ value.numberrefer }}</td>
                <td>{{ value.numberborrow }}</td>
                <td>{{ value.period }}</td>
                <td>{{ value.priceperiod }}</td>
                <td>{{ value.interest }}</td>
                <td>{{ value.newprice }}</td>
                <td>{{ value.total }}</td>
                <td>{{ value.currency }}</td>
                <td>{{ value.date }}</td>
                <td>{{ value.action }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
        </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listCIF: [
        {
          number: "0",
          username: "77",
          tell: "0001",
          numberrefer: "siyon",
          numberborrow: "02077912018",
          period: "02077912018",
          priceperiod: "02077912018",
          interest: "100.000.000",
          newprice: "2024/10/7",
          total: "100.000.00",
          currency: "USD",
          date: "2024/5/10",
          action: "success",
        },
      ],
    };
  },
};
</script>

<style scoped>

#wow {
  border:10px solid red;
}
</style>
