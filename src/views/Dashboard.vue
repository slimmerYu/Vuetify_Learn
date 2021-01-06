<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-12-29 10:28:46
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-06 08:52:16
-->
<template>
  <div class="dashboard">
    <h1 class="sub-heading grey--text">Dashboard</h1>
    <v-container  class="my-5">

      <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Button
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip> -->


      <v-row class="mb-3 ml-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn  
              small 
              text 
              color="grey" 
              @click="sortBy('title')" 
              v-bind="attrs"
              v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort Projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn  
              small 
              text 
              color="grey" 
              @click="sortBy('person')" 
              v-bind="attrs"
              v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort Projects by people name</span>
        </v-tooltip>
      </v-row>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-row :class="'pa-3 project '+project.status">
          <v-col xs="12" sm="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <!-- <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div> -->
            <div class="text-right">
              <v-chip small :class="'white--text caption my-2 '+project.status" >{{project.status}}</v-chip>
            </div>
          </v-col>
          
        </v-row>
        <v-divider>

        </v-divider>
      </v-card>
    </v-container>






    
    <!-- 中等屏幕下隐藏  -->
    <!-- 大于等于中等屏幕显示 -->
    <!-- <v-btn class="hidden-md-and-up">click me up</v-btn> -->
    <!-- 小于中等屏幕显示 -->
    <!-- <v-btn class="hidden-md-and-down">click me down</v-btn>
    <v-btn class="hidden-sm-only">hidden-sm-only</v-btn>

    <v-btn class="pink white--text">click me</v-btn> -->
    <!-- 控制背景颜色 -->
    <!-- <v-btn dark color="pink">click me</v-btn> -->
    <!-- 加一个text 控制文字颜色 -->
    <!-- <v-btn text color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon>mdi-home</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn small depressed class="pink white--text">
      <v-icon small left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn fab small depressed dark class="purple">
      <v-icon
      small
      color="green darken-2"
    >
      mdi-domain
    </v-icon>
    </v-btn> -->
    <!-- <p class="red white--text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam cupiditate quas distinctio eum quibusdam molestias! Aspernatur ratione perspiciatis animi! Perspiciatis nisi ipsum eaque soluta sequi obcaecati delectus doloribus ea!
    </p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident maxime perferendis, deleniti totam animi sit quis molestiae! Delectus exercitationem magnam voluptatum rerum culpa quia nostrum. Hic sit eos recusandae magni.</p>
    <h1 class="display-4">Massive Display</h1>
    <p class="font-weight-black">text-test</p> -->

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      projects: [
        // 此处有一个key值唯一性问题的报错, 由于key值设为了title,所以每个title应保证都是唯一的
        {title: 'Design a new website1', person: 'The Net Ninja', due: '5th Jan 2021', status: 'ongoing'},
        {title: 'Aesign a new website2', person: 'The Net Ninja', due: '5th Jan 2021', status: 'complete'},
        {title: 'Besign a new website3', person: 'The Net Ninja', due: '5th Jan 2021', status: 'complete'},
        {title: 'EDesign a new website4', person: 'The Net Ninja', due: '5th Jan 2021', status: 'overdue'}
      ]
    }
  },
  methods: {
    test() {
      for (let index = 0; index < this.projects.length; index++) {
        
        
        console.log(this.projects[index]);
      }
    },
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1
      )
    }
  }
}
</script>
<style>
  .project.complete{
    border-left: 4px solid #3cd1c2;

  }
  .project.ongoing{

    border-left: 4px solid orange;
  }
  .project.overdue{

    border-left: 4px solid tomato;
  }
  .white--text.caption.v-chip.complete{
    background: #3cd1c2;

  }
  .white--text.caption.v-chip.ongoing{

    background: orange;
  }
  .white--text.caption.v-chip.overdue{

    background: tomato;
  }
</style>
