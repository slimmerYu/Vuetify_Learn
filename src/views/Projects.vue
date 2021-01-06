<!--
 * @Description: 
 * @version: 
 * @Author: slimmerYu
 * @Date: 2020-12-29 10:28:46
 * @LastEditors: slimmerYu
 * @LastEditTime: 2021-01-06 08:39:25
-->
<template>
  <div class="projects">
    <h1 class="sub-heading grey--text">projects</h1>

  <v-container class="my-5">
    <v-expansion-panels>
    <v-expansion-panel
      v-for="project in myProjects"
      :key="project.title"
    >
      <v-expansion-panel-header>
        {{project.title}}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="px-4 grey--text">
        <div class="font-weight-bold">
          due by {{project.due}}
        </div>
        <div>{{project.content}}</div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      projects: [
        // 此处有一个key值唯一性问题的报错, 由于key值设为了title,所以每个title应保证都是唯一的
        {title: 'Design a new website1', person: 'The Net Ninja', due: '5th Jan 2021', status: 'ongoing', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam cupiditate quas distinctio eum quibusdam molestias! Aspernatur ratione perspiciatis animi! Perspiciatis nisi ipsum eaque soluta sequi obcaecati delectus doloribus ea!'},
        {title: 'Aesign a new website2', person: 'The Net Ninja', due: '5th Jan 2021', status: 'complete', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam cupiditate quas distinctio eum quibusdam molestias! Aspernatur ratione perspiciatis animi! Perspiciatis nisi ipsum eaque soluta sequi obcaecati delectus doloribus ea!'},
        {title: 'Besign a new website3', person: 'The Net Ninja2', due: '5th Jan 2021', status: 'complete', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam cupiditate quas distinctio eum quibusdam molestias! Aspernatur ratione perspiciatis animi! Perspiciatis nisi ipsum eaque soluta sequi obcaecati delectus doloribus ea!'},
        {title: 'EDesign a new website4', person: 'The Net Ninja4', due: '5th Jan 2021', status: 'overdue', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam cupiditate quas distinctio eum quibusdam molestias! Aspernatur ratione perspiciatis animi! Perspiciatis nisi ipsum eaque soluta sequi obcaecati delectus doloribus ea!'}
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
    }
  }
}
</script>

<style>

</style>
