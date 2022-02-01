<template>
<el-container id="BioContainer">
  <el-aside width="20%" style="text-align: center;font-size: larger;font-weight: bolder;" class="SectionName">{{SectionName}}</el-aside>
  <el-main style="padding-top:0px;">   
    <el-card shadow="always" v-if="MsgCard">
      <div v-html="msg"></div>
    </el-card>
    <ProjectCard v-if="ProjectCard" :ProjectInfo="ProjectInfo"/>
  </el-main>
</el-container>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  name: 'BioSection',
  components: {
    ProjectCard
    },
  props: {
    msg: String,
    SectionName: String,
    MsgCard: Boolean,
    ProjectCard: Boolean,
    ProjectInfo: Array,
  }
}
</script>