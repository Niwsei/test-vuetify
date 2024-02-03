// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'


// import colors from 'vuetify/util/color'
 

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  ssr:true,
  theme: {
    themes: {
      light: {
        primary: '#1976D2', // สีหลัก
        secondary: '#424242', // สีรอง
        accent: '#82B1FF', // สีเสริม
        error: '#FF5252', // สีเมื่อเกิดข้อผิดพลาด
        info: '#2196F3', // สีข้อมูล
        success: '#4CAF50', // สีเมื่อทำงานสำเร็จ
        warning: '#FFC107', // สีเตือน
        three:'#ff54ff',
      },
    },
  },
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})











