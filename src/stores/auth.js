import {defineStore} from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore("auth" , {
    state: () => ({
        authUser:null
    }),
    getters: {
user:(state) => state.authUser
    },
    actions: {
        async getToken() {
            await axios.get("sanctum/csrf-cookie");
        },

        async getUser() {
            this.getToken()
            const userData = await axios.get('149.129.55.90:5050/autherize/login')
            this.authUser = userData.data
        }
    }
})