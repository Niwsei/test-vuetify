import { createRouter, createWebHistory } from 'vue-router'
// import sidebar_navbar from '../components/sidebar_navbar.vue'
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



 /* login */
 import login from '../views/login.vue'

 import {useAuthStore} from '../stores/auth';


 const authMiddleware = (to , from , next) => {


  const token = localStorage.getItem('web_token');
  const user = localStorage.getItem('web_user');
  const store = useAuthStore();

  if(token){
    store.set_token(token);
    store.set_user(user);
    next();
  }
  else {
    next({
      path:'login',
      replace: true
    });
  }
 }



const routes = [
  // /* management */
   {
     path: '/login',
     name: 'login',
    component: login
   }, 

  {
    path: '/',
    name: 'Home',
    component:Home,
    meta: {
      middleware: [authMiddleware]
    }
  },
 
  {
    path: '/Department',
    name: 'Department',
    component:Department,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/FontFunction',
    name: 'FontFunction',
    component: FontFunction,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/SetRestDays',
    name: 'SetRestDays',
    component: SetRestDays,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/User',
    name: 'User',
    component: User,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/Disciple',
    name: 'Disciple',
    component: Disciple,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/ManageDisciple',
    name: 'ManageDisciple',
    component: ManageDisciple,
    meta: {
      middleware: [authMiddleware]
    }
  },
 


  /* product */

  {
    path: '/CheckCustomerAsset',/*  ກວດສອບຊັບສິນລູກຄ້າ */
    name: 'CheckCustomerAsset',
    component: CheckCustomerAsset,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/CheckLending',   /* ກວດສອບການປ່ອຍກູ້ */
    name: 'CheckLending',
    component: CheckLending,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/PaymentDetails',   /* ລາຍລະອຽດການຊຳລະ */
    name: 'PaymentDetails',
    component: PaymentDetails,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/CustomerInformation',  /* ຂໍ້ມູນລູກຄ້າ */
    name: 'CustomerInformation',
    component: CustomerInformation,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/IssueLoanContract',  /* ອອກສັນຍາປ່ອຍກູ້  */
    name: 'IssueLoanContract',
    component: IssueLoanContract,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/LoanApprovalLetter',  /* ລາຍການອານຸມັດປ່ອຍກູ້ */
    name: 'LoanApprovalLetter',
    component: LoanApprovalLetter,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/ReceiveCustomers', /* ຮັບລູກຄ້າ */
    name: 'ReceiveCustomers',
    component: ReceiveCustomers,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/RegisterCustomerInformation', /* ລົງທະບຽນຂໍ້ມູນລູກຄ້າ */
    name: 'RegisterCustomerInformation',
    component: RegisterCustomerInformation,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/RegisterGuarantor',/* ລົງທະບຽນຜູ້ຄ້ຳປະກັນ */
    name: 'RegisterGuarantor',
    component: RegisterGuarantor,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/RegisterProperty',/* ລົງທະບຽນຊັບສິນ  */
    name: 'RegisterProperty',
    component: RegisterProperty,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/RequestLoan',/* ຂໍປ່ອຍກູ້ */
    name: 'RequestLoan',
    component: RequestLoan,
    meta: {
      middleware: [authMiddleware]
    }
  },


  /* finance */

  {
    path: '/AddMoneyAccount', /* ເພີ່ມເງີນເຂົ້າບັນຊີ */
    name: 'AddMoneyAccount',
    component: AddMoneyAccount,
    meta: {
      middleware: [authMiddleware]
    }
  },
  {
    path: '/OpenAccount',  /* ເປີດບັນຊີ */
    name: 'OpenAccount',
    component: OpenAccount,
    meta: {
      middleware: [authMiddleware]
    }
  },  {
    path: '/PayInstallments', /* ລາຍລະອຽດການຊຳລະ */
    name: 'PayInstallments',
    component: PayInstallments,
    meta: {
      middleware: [authMiddleware]
    }
  },  {
    path: '/RegisterUse_CIF', /* ລົງທະບຽນນຳໃໍຊ້(CIF) */
    name: 'RegisterUse_CIF',
    component: RegisterUse_CIF,
    meta: {
      middleware: [authMiddleware]
    }
  },  {
    path: '/WithdrawMoneyAccount', /* ຖອນເງີນອອກບັນຊີ */
    name: 'WithdrawMoneyAccount',
    component: WithdrawMoneyAccount,
    meta: {
      middleware: [authMiddleware]
    }
  },



  /* notice */

  {
    path: '/NotificationOverduePayment', /* ລາຍງານຄ້າງຊຳລະ */
    name: 'NotificationOverduePayment',
    component: NotificationOverduePayment,
    meta: {
      middleware: [authMiddleware]
    }
  }, {
    path: '/DailyPaymentPattern', /* ລາຍການຕ້ອງຊຳລະປະຈຳວັນ */
    name: 'DailyPaymentPattern',
    component: DailyPaymentPattern,
    meta: {
      middleware: [authMiddleware]
    }
  }, {
    path: '/NotificationLoanContract', /* ລາຍງານສັນຍາກູ້ຢືມ  */
    name: 'NotificationLoanContract',
    component: NotificationLoanContract,
    meta: {
      middleware: [authMiddleware]
    }
  }, {
    path: '/NotificationPayment', /* ລາຍງານການຊຳລະ */
    name: 'NotificationPayment',
    component: NotificationPayment,
    meta: {
      middleware: [authMiddleware]
    }
  }, {
    path: '/NotifyCustomerAccountInformation', /* ລາຍງານຂໍ້ມູນບັນຊີລູກຄ້າ  */
    name: 'NotifyCustomerAccountInformation',
    component: NotifyCustomerAccountInformation,
    meta: {
      middleware: [authMiddleware]
    }
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior(){
    window.scrollTo(0,0);
  }
});



router.beforeEach((to, from , next) => {
  const token = localStorage.getItem('web_token');
  if(to.meta.middleware){
    to.meta.middleware.forEach(middleware => middleware(to , from , next))
  }
  else {
    if(to.path == '/login') {
      if(token) {
        next({
          path:'/',
          replace: true
        })
      }
      else {
        next();
      }
    }
    else {
      next();
    }
  }
})

export default router
