<template>
<div id="wow">
    <v-card height="400px" width="300px" class=" bg-white" elevation="0" rounded="">
        <v-container>
        <v-row class=" d-flex justify-center pt-5" >
            <v-col class=" d-flex justify-center" >
<v-img src="http://149.129.55.90/SCNMF_UAT/images/scnmf_logo.png" width="70" height="70"></v-img>
            </v-col>
        </v-row>
        <v-row  class=" d-flex justify-center">
            <v-col cols="12"  class=" d-flex justify-center">
                <p class="text-light-blue-accent-4 text-h5">SCN MF</p>
            </v-col>
        </v-row>

        <div justify="center" align="center">
       
                <v-text-field  type="text" v-model="email" variant hide-details class="border rounded mb-5 mt-3" density="compact" required></v-text-field>
                <v-text-field  type="password" v-model="password" variant hide-details class="border rounded mb-8" density="compact" required></v-text-field>
                <v-btn size="large" 
                 rounded
              elevation="0"
              type="submit"
              class="text-white bg-light-blue-accent-4 font-weight-bold " @click="login()" style="letter-spacing: 0px;">ເຂົ້າສູ່ລະບົບ</v-btn>

                
            </div>
    </v-container>
    </v-card>
</div>
</template>

<script>
import axios from 'axios';
import {ref , onMounted } from 'vue';
/* import { useAuthStore} from '../stores/auth' */


export default {
  data(){
    return {
          email:'',
          password:'',
    }
  },

  methods: {
        login() {

          if( this.email != '' || this.password){
            axios.post('http://149.129.55.90:5050/autherize/login' ,{ user_name:this.email , user_password:this.password})
.then((res) => {
  console.log('data :' ,res.data)
}).catch((err) => {
  console.log('error :' , err)
})
        }
          }


  }
}





/* const user = ref({
    username:"",
    password:"",
})
const userData = async () => {
 await axios.post('149.129.55.90:5050/autherize/login')
    .then((response) => {
      console.log('response:' , response.data);
      response.data.username = user.username;
      response.data.password = user.password;
    })
    .catch((err) => {
        console.log("error:" , err)
    })
}  */



/* const user = ref({
    username:"",
    password:"",
})
const userData = async () => {
  try {
    const response = await axios.post('149.129.55.90:5050/autherize/login', {
      auth: {
        username: user.value.username,
        password: user.value.password,
      },
    });
    console.log('response: ', response.data);
  } catch (error) {
    console.error('error: ', error);
  }
}; */


/* const authStore = useAuthStore();

const user = ref();
onMounted( async () => {

await authStore.getUser

}) */



</script>

<style  scoped>

#wow{
    display: flex;
justify-content: center;
align-items: center;
    background: #ECEFF1 ;
    height: 100vh;
}


</style>