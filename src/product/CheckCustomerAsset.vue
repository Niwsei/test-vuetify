<template>
    <div>
<h1>ກວດສອບຊັບສິນລູກຄ້າ</h1>

<v-card elevation="0">
  <v-container>
  <v-card-title class=" d-flex justify-end py-5">
      <v-sheet class="w-25">
    <v-text-field
    class="border rounded"
    color="red"
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="comfortable"
        label="Search..."
        single-line
        hide-details
        variant
      ></v-text-field>
    </v-sheet>
     </v-card-title>

<hr color="#ECEFF1">

 
            <v-data-table
            elevation="0"
              :headers="headers"
              :items="displayedGroups"
            >

              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.ຮູບ }}</td>
                  <td>{{ item.ອາຍຸ }}</td>
                  <td>{{ item.ເບີໂທ }}</td>
                  <td>{{ item.ເບີວອດແອັບ }}</td>
                  <td>{{ item.ບ້ານ }}</td>
                  <td>{{ item.ເມືອງ }}</td>
                  <td>{{ item.ເເຂວງ }}</td>
                  <td>{{ item.ມູນຄ່າຫລັກຊັບ }}</td>
                  <td>{{ item.ມູນຄ່າຄ້ຳປະກັນ }}</td>
                  <td>{{ item.ສະຖານະ }}</td>
                  <td>{{ item.ກວດສອບ }}</td>
                  <td>{{ getPreviousGroup(item) }}</td>
                  <td>{{ getNextGroup(item) }}</td>
                </tr>
              </template>
            </v-data-table>

          <v-card-actions class="d-flex justify-center">
            <v-btn @click="previousPage" :disabled="currentPage === 1">
              Previous
            </v-btn>
            <span class="mx-4">
                <v-row>
              <v-btn class="border border-4"
                v-for="page in totalPages"
                :key="page"
                @click="goToPage(page)"
                :disabled="page === currentPage"
              >
                {{ page }}
              </v-btn>
            </v-row> 
            </span>
            <v-btn
              @click="nextPage"
              :disabled="currentPage === totalPages || totalPages === 0"
            >
              Next
            </v-btn>
            
          </v-card-actions>
        </v-container>
</v-card>
   </div>
</template>

<script >
export default {
  data() {
    return {
      headers: [
      {
            align: 'start',
            key: 'ຮູບ',
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
          { title: 'ມູນຄ່າຫລັກຊັບ ', key: 'ມູນຄ່າຫລັກຊັບ' },
          { title: 'ມູນຄ່າຄ້ຳປະກັນ ', key: 'ມູນຄ່າຄ້ຳປະກັນ' },
          { title: 'ສະຖານະ ', key: 'ສະຖານະ' ,value:'ສະຖານະ'},
          { title: 'ກວດສອບ ', key: 'ກວດສອບ' ,value:'ກວດສອບ'},
      ],
      groups: [
      {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
          {
            ຮູບ: 'Frozen Yogurt',
            ຊື່ລູກຄ້າ: 159,
            ອາຍຸ: 6.0,
            ເບີໂທ: 24,
            ເບີວອດແອັບ: 4.0,
            ບ້ານ: 1,
            ເມືອງ: 1,
            ເເຂວງ: 1,
            ມູນຄ່າຫລັກຊັບ: 1,
            ມູນຄ່າຄ້ຳປະກັນ: 1,
            ສະຖານະ:"summit",
            ກວດສອບ: 1,
          },
        // Add more groups as needed
      ],
      itemsPerPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.groups.length / this.itemsPerPage);
    },
    displayedGroups() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.groups.slice(startIndex, endIndex);
    },
  },
  methods: {
    getPreviousGroup(group) {
      const index = this.groups.indexOf(group);
      return index > 0 ? this.groups[index - 1].name : '';
    },
    getNextGroup(group) {
      const index = this.groups.indexOf(group);
      return index < this.groups.length - 1 ? this.groups[index + 1].name : '';
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
};

</script>

<style lang="scss" scoped>

</style>