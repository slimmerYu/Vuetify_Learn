<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2021-01-01 17:59:31
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-05 17:31:16
-->
<template>
  <nav >
    <v-app-bar text app class="grey lighten-4">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">

      </v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text color="white" class="grey--text">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-row justify="center">
        <v-col class="mt-5">
          <v-avatar size="100">
            <img src="avater-1.png" alt="">
          </v-avatar>
          <p class="white--text subheading mt-1">
            The Net Ninja
          </p>
        </v-col>
      </v-row>
      <v-list text>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text"  v-text="link.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data(){
    return{
      drawer: false,
      links: [
        {icon: 'dashboard', text: 'Dashboard', route: '/'},
        {icon: 'folder', text: 'My Projects', route: '/projects'},
        {icon: 'person', text: 'Team', route: '/team'},
      ]
    }
  }
}
</script>

<style>

</style>