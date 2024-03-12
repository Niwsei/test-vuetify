<template>
    <VApp id="inspire">
        
        <VNavigationDrawer  v-model="drawer" class="bg-pink lighten-5" v-if="store.get_token">
        <!--  -->
   <VList class="justify-center align-content-center text-center pt-5">
    <VListItem title="SCN NF" prepend-avatar="https://png.pngtree.com/png-clipart/20190116/ourmid/pngtree-hand-painted-dolphins-cartoon-dolphin-q-version-of-dolphin-lovely-png-image_387165.jpg"></VListItem>
</VList>
<VDivider></VDivider>
<v-list>
      <p class="my-5 ml-8 text-caption">ຂໍ້ມູນລະບົບ</p>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="ຈັດການຂໍ້ມູນ"
            class="bg-darks"
          ></v-list-item>
        </template>
        
      
          <v-list-item
            v-for="([title, router], index) in management"
            :key="index"
            :value="title"
            :title="title"
            :to="router"
          >
        </v-list-item>

      </v-list-group>


      <v-list-group >
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="ສິນເຊື່ອ"
          ></v-list-item>
        </template>

          <v-list-item
            v-for="([title,  router], index) in product"
            :key="index"
            :value="title"
            :title="title"
            :to="router"
           
          ></v-list-item>

             
      </v-list-group>


      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="ການເງີນ"
          ></v-list-item>
        </template>

          <v-list-item
            v-for="([title,  router], index) in finance"
            :key="index"
            :value="title"
            :title="title"
            :to="router"
           
          ></v-list-item>
      </v-list-group>


      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="ລາຍງານ"
          ></v-list-item>
        </template>

          <v-list-item
            v-for="([title,  router], index) in notice"
            :key="index"
            :value="title"
            :title="title"
            :to="router"
           
          ></v-list-item>
      </v-list-group>


    </v-list>
        </VNavigationDrawer>





        <VAppBar elevation="0" class="pt-3 bg-grey-lighten-5 border-bottom" v-if="store.get_token">
            <VAppBarNavIcon @click="drawer = !drawer"></VAppBarNavIcon>
            <VAppBarTitle>Application</VAppBarTitle>
            <v-spacer></v-spacer>
        </VAppBar>



        




        
        <VMain class="h-100 mt-10 ">
            <!--  -->
            <VContainer fluid class="h-100" height="100%">
            <router-view></router-view>
          </VContainer>
        </VMain>



        <v-footer  class="d-flex justify-center align-content-center " v-if="store.get_token">
      <v-sheet>
        © 2024 Copyright SCN NON DEPOSITS TAKING MICROFINANCE INSTITUTIONS SOLE CO., LTD by CTech.
      </v-sheet>
    </v-footer>


    
    </VApp>
</template>

<script>
import { useAuthStore } from '../stores/auth';

export default {
    data() {
    return {
        drawer:null,

      management: [
      ['ພະເເນກ'  ,'/Department'],
        ['ຫນ້າຟັງຊັນ' ,'/FontFunction'],
        ['ສ້າງສີດ' ,'/Disciple'],
        ['ຜູ້ໃຊ້','/User'],
        ['ຈັດການສິດ' ,'/ManageDisciple'],
        ['ກຳນົດວັນພັກ' ,'/SetRestDays'],
      ],

      product:[
        ['ລົງທະບຽນຂໍ້ມູນລູກຄ້າ','/RegisterCustomerInformation'],
        ['ຂໍ້ມູນລູກຄ້າ',  '/CustomerInformation'],
        ['ລົງທະບຽນຊັບສິນ',  '/RegisterProperty'],
        ['ຂໍປ່ອຍກູ້', '/RequestLoan'],
        ['ຮັບລູກຄ້າ','/ReceiveCustomers'],
        ['ກວດສອບຊັບສິນລູກຄ້າ',  '/CheckCustomerAsset'],
        ['ກວດສອບການປ່ອຍກູ້','/CheckLending'],
        ['ລາຍລະອຽດການຊຳລະ','/PaymentDetails'],
        ['ລົງທະບຽນຜູ້ຄ້ຳປະກັນ', '/RegisterGuarantor'],
        ['ລາຍການອານຸມັດປ່ອຍກູ້', '/LoanApprovalLetter'],
        ['ອອກສັນຍາປ່ອຍກູ້', '/IssueLoanContract'],
      ],

      
      finance: [
        ['ລົງທະບຽນນຳໃໍຊ້(CIF)', '/RegisterUse_CIF'],
        ['ເປີດບັນຊີ', '/OpenAccount'],
        ['ເພີ່ມເງີນເຂົ້າບັນຊີ', '/AddMoneyAccount'],
        ['ຖອນເງີນອອກບັນຊີ', '/WithdrawMoneyAccount'],
        ['ຊຳລະຄ່າງວດ', '/PayInstallments'],
      ],

      notice: [
        ['ລາຍງານສັນຍາກູ້ຢືມ', '/NotificationLoanContract'],
        ['ລາຍງານການຊຳລະ','/NotificationPayment'],
        ['ລາຍງານຄ້າງຊຳລະ','/NotificationOverduePayment'],
        ['ລາຍການຕ້ອງຊຳລະປະຈຳວັນ', '/DailyPaymentPattern'],
        ['ລາຍງານຂໍ້ມູນບັນຊີລູກຄ້າ','/NotifyCustomerAccountInformation'],
       
        
      ],
    }
},

  setup(){
    const store = useAuthStore();
    return { store }
  }
}
</script>

<style lang="scss" scoped>

</style>