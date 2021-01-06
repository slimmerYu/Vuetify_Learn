<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2021-01-06 09:57:05
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-06 16:42:16
-->
<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{on, attrs}">
      <v-btn text 
      v-bind="attrs"
      v-on="on"
      class="success">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder"
          :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit"
          :rules="inputRules"></v-textarea>

          <v-menu>
            <template v-slot:activator="{on, attrs}">
              <v-text-field
                v-bind="attrs"
                v-on="on"
                label="Due date"
                prepend-icon="date_range"
                :rules="inputRules"
                :value="formattedDate"
              ></v-text-field>
              <!-- 此处需要下载npm install date-fns -->
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
  
          <v-btn text class="success mx-0 mt-3"
            @click="submit()">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
export default {
  data(){
    return {
      title: '',
      content: '',
      due: null,
      inputRules:[
        v => v.length >= 3 || 'Minmum length is 3 characters'
      ]
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        console.log(this.title, this.content);
        // const project = {
        //   title: this.title,
        //   content: this.content,
        //   due: format(this.due, 'Do MMM YYYY'),
        //   person: 'slimmerYu',
        //   status: 'ongoing'
        // }
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  }
}
</script>

<style>

</style>