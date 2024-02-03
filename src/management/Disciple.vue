<template>
    <div>
<h1 class="red--text" style="color: red;">ສ້າງສີດ</h1>


     <!-- card -->
<v-card height="300" >
<v-card-title>
   <h1 class="d-flex align-start">ພະເເນກ</h1>
</v-card-title> 
   <v-card-text  class="py-10 px-5">
<label for="">ພະເເນກ</label>
 <v-text-field
   v-model="firstname"
   :rules="nameRules"
   :counter="10"
   label="First name"
   required
   hide-details
 ></v-text-field>
</v-card-text>

<div class="d-flex justify-end px-10 py-10">
<v-btn rounded
color="blue" >
ສ້າງພະເເນກ
</v-btn>
</div>
</v-card>





  <v-table density="compact" height="auto" class="mt-15 pt-5">
    <thead>
      <tr>
        <th class="text-left">
          ເລກລຳດັບ
        </th>
        <th class="text-left">
          ຊື່ສິດ
        </th>
        <th class="text-left">
          
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item , index) in disciple"
        :key="index"
      >
        <td> {{index}} </td>
        <td>{{item.name}}</td>
        <td>
            <v-btn icon flat>
       
      </v-btn>
      <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon flat
          dark
          v-bind="props"
        >
        <v-icon extended>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        
       
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          flat
          v-bind="props"
        >
          ເເກ້ໄຂ
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
             
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>

          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  


            
            <v-list-item>  ລືບ  </v-list-item>

      </v-list>
    </v-menu>
        </td>
      </tr>
    </tbody>
  </v-table>
    </div>
</template>

<script>
export default {
data()  {
  return {

    disciple:""
  }
  }
}
</script>

<style  scoped>
 
</style>