<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2021-01-01 19:58:27
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-05 17:10:57
-->
<template>
  <div class="team">
    <h1 class="sub-heading grey--text">team</h1>
    <v-container  class="my-5">
      <v-row>
        <v-col 
        class="col-xs-12"
          xs="12" 
          sm="6" 
          md="4" 
          lg="3"
          v-for="person in team" :key="person.name"
         >
            <v-card text class="text-center white ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-1">
                  <img :src="person.avater">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">
                  {{person.name}}
                </div>
                <div class="grey--text">
                  {{person.role}}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="grey">
                  <v-icon small left>
                    message
                  </v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
            
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avater: '/avater-1.png'},
        { name: 'Slimmer', role: 'Web developer', avater: '/avater-2.png'},
        { name: 'Yu', role: 'Web developer', avater: '/avater-3.png'},
        { name: 'Frank', role: 'Web developer', avater: '/avater-4.png'},
        { name: 'people', role: 'Web developer', avater: '/avater-5.png'}
      ]
    }
  }
}
</script>

<style>

</style>