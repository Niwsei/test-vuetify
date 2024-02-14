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
            <v-form @submit.prevent="login">
                <v-text-field  type="text" v-model="email" variant hide-details class="border rounded mb-5 mt-3" density="compact" required></v-text-field>
                <v-text-field  type="password" v-model="password" variant hide-details class="border rounded mb-8" density="compact" required></v-text-field>
                <v-btn size="large" 
                 rounded
              elevation="0"
              type="submit"
              class="text-white bg-light-blue-accent-4 font-weight-bold " style="letter-spacing: 0px;">ເຂົ້າສູ່ລະບົບ</v-btn>
        </v-form>
                
            </div>
    </v-container>
    </v-card>
</div>
</template>

<script>
export default {
    data(){
            return{
                email:'',
                password:'',

            }
    },

    methods: {
        login(){
            if(this.email === "admin" && this.password === "123456"){
                this.$router.push("/sidebar_navbar")
            }
            else{
                console.log('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
            }
        },

       
    },
}

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