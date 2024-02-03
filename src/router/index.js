import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

/* management */
import Department from '../management/Department.vue'
import FontFunction from '../management/FontFunction.vue'
import SetRestDays from '../management/SetRestDays.vue'
import User from '../management/User.vue'
import Disciple from '../management/Disciple.vue'
import ManageDisciple from '../management/ManageDisciple.vue'

/* product */
import CheckCustomerAsset from '../product/CheckCustomerAsset.vue'
import CheckLending from '../product/CheckLending.vue'
import CustomerInformation from '../product/CustomerInformation.vue'
import IssueLoanContract from '../product/IssueLoanContract.vue'
import LoanApprovalLetter from '../product/LoanApprovalLetter.vue'
import ReceiveCustomers  from '../product/ReceiveCustomers.vue'
import RegisterCustomerInformation from '../product/RegisterCustomerInformation.vue'
import RegisterGuarantor from '../product/RegisterGuarantor.vue'
import RegisterProperty from '../product/RegisterProperty.vue'
import RequestLoan from '../product/RequestLoan.vue'
import PaymentDetails from '../product/PaymentDetails.vue'


/* finance */
import AddMoneyAccount from '../finance/AddMoneyAccount.vue'
import OpenAccount from '../finance/OpenAccount.vue'
import PayInstallments from '../finance/PayInstallments.vue'
import RegisterUse_CIF from '../finance/RegisterUse_CIF.vue'
import WithdrawMoneyAccount from '../finance/WithdrawMoneyAccount.vue'



/* notice */
import NotificationOverduePayment from '../notice/NotificationOverduePayment.vue'
import DailyPaymentPattern from '../notice/DailyPaymentPattern.vue'
import NotificationLoanContract from '../notice/NotificationLoanContract.vue'
import NotificationPayment from '../notice/NotificationPayment.vue'
import NotifyCustomerAccountInformation from '../notice/NotifyCustomerAccountInformation.vue'








const routes = [
  /* management */
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Department',
    name: 'Department',
    component:Department
  },
  {
    path: '/FontFunction',
    name: 'FontFunction',
    component: FontFunction
  },
  {
    path: '/SetRestDays',
    name: 'SetRestDays',
    component: SetRestDays
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
  {
    path: '/Disciple',
    name: 'Disciple',
    component: Disciple
  },
  {
    path: '/ManageDisciple',
    name: 'ManageDisciple',
    component: ManageDisciple
  },
 


  /* product */

  {
    path: '/CheckCustomerAsset',/*  ກວດສອບຊັບສິນລູກຄ້າ */
    name: 'CheckCustomerAsset',
    component: CheckCustomerAsset
  },
  {
    path: '/CheckLending',   /* ກວດສອບການປ່ອຍກູ້ */
    name: 'CheckLending',
    component: CheckLending
  },
  {
    path: '/PaymentDetails',   /* ລາຍລະອຽດການຊຳລະ */
    name: 'PaymentDetails',
    component: PaymentDetails
  },
  {
    path: '/CustomerInformation',  /* ຂໍ້ມູນລູກຄ້າ */
    name: 'CustomerInformation',
    component: CustomerInformation
  },
  {
    path: '/IssueLoanContract',  /* ອອກສັນຍາປ່ອຍກູ້  */
    name: 'IssueLoanContract',
    component: IssueLoanContract
  },
  {
    path: '/LoanApprovalLetter',  /* ລາຍການອານຸມັດປ່ອຍກູ້ */
    name: 'LoanApprovalLetter',
    component: LoanApprovalLetter
  },
  {
    path: '/ReceiveCustomers', /* ຮັບລູກຄ້າ */
    name: 'ReceiveCustomers',
    component: ReceiveCustomers
  },
  {
    path: '/RegisterCustomerInformation', /* ລົງທະບຽນຂໍ້ມູນລູກຄ້າ */
    name: 'RegisterCustomerInformation',
    component: RegisterCustomerInformation
  },
  {
    path: '/RegisterGuarantor',/* ລົງທະບຽນຜູ້ຄ້ຳປະກັນ */
    name: 'RegisterGuarantor',
    component: RegisterGuarantor
  },
  {
    path: '/RegisterProperty',/* ລົງທະບຽນຊັບສິນ  */
    name: 'RegisterProperty',
    component: RegisterProperty
  },
  {
    path: '/RequestLoan',/* ຂໍປ່ອຍກູ້ */
    name: 'RequestLoan',
    component: RequestLoan
  },


  /* finance */

  {
    path: '/AddMoneyAccount', /* ເພີ່ມເງີນເຂົ້າບັນຊີ */
    name: 'AddMoneyAccount',
    component: AddMoneyAccount
  },
  {
    path: '/OpenAccount',  /* ເປີດບັນຊີ */
    name: 'OpenAccount',
    component: OpenAccount
  },  {
    path: '/PayInstallments', /* ລາຍລະອຽດການຊຳລະ */
    name: 'PayInstallments',
    component: PayInstallments
  },  {
    path: '/RegisterUse_CIF', /* ລົງທະບຽນນຳໃໍຊ້(CIF) */
    name: 'RegisterUse_CIF',
    component: RegisterUse_CIF
  },  {
    path: '/WithdrawMoneyAccount', /* ຖອນເງີນອອກບັນຊີ */
    name: 'WithdrawMoneyAccount',
    component: WithdrawMoneyAccount
  },



  /* notice */

  {
    path: '/NotificationOverduePayment', /* ລາຍງານຄ້າງຊຳລະ */
    name: 'NotificationOverduePayment',
    component: NotificationOverduePayment
  }, {
    path: '/DailyPaymentPattern', /* ລາຍການຕ້ອງຊຳລະປະຈຳວັນ */
    name: 'DailyPaymentPattern',
    component: DailyPaymentPattern
  }, {
    path: '/NotificationLoanContract', /* ລາຍງານສັນຍາກູ້ຢືມ  */
    name: 'NotificationLoanContract',
    component: NotificationLoanContract
  }, {
    path: '/NotificationPayment', /* ລາຍງານການຊຳລະ */
    name: 'NotificationPayment',
    component: NotificationPayment
  }, {
    path: '/NotifyCustomerAccountInformation', /* ລາຍງານຂໍ້ມູນບັນຊີລູກຄ້າ  */
    name: 'NotifyCustomerAccountInformation',
    component: NotifyCustomerAccountInformation
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
