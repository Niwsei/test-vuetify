const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
    
  }
})


// module.exports = {
//   // กำหนดค่า feature flags ที่ต้องการ
//   chainWebpack: (config) => {
//     config.plugin('define').tap((args) => {
//       const env = args[0] || {};
//       env['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = true; // หรือ false ตามที่ต้องการ
//       return [env];
//     });
//   },
// };
