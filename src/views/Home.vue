<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card elevation="6" class="mt-10">
          <v-window>
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center"> Login in to your Account</h4>
                    <h6 class="text-center grey--text">Login in building
                      <br>andditing your onboarding flows
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                            <c-text-field aria-label="Email" outlined dense color="blue" aria-autocomplete="false" class="mt-6"> email</c-text-field>
                            <c-text-field aria-label="password" outlined dense color="blue" aria-autocomplete="false" class="mt-6" type="password"> email</c-text-field>
                      </v-col>
                      <v-col cols="12" sm="7">
                        <v-checkbox label="Remember Me" class="mt-n1" color="blue"></v-checkbox>
                      </v-col>

                      <v-col cols="12" sm="5">
                        <span class="caption blue--text"> Forget Password</span>
                      </v-col>
                    </v-row>
                    <v-btn color="blue" dark block tile>Login in</v-btn>
                    <h5 class="text-center grey--text mt-4 mb-3">Or Log in using</h5>
                    <div class="d-flex justify-space-between align-center mx-10 mb-16"></div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6"></v-col>
              </v-row>
            </v-window-item>

          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script >

</script>

<style lang="scss" scoped>

</style>