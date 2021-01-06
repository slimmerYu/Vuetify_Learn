<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-12-29 10:28:46
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-05 20:25:47
-->
<template>
  <v-app>
    <v-main class="grey lighten-4">
      <Navbar/>
      <!-- 外边距 mx-4 -->
      <v-main class="mx-4 mb-4">
        <router-view></router-view>
      </v-main>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components:{
    Navbar
  },
  data(){
    return{
      
    }
  },
};
</script>
