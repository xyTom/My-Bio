<template>
  <div id="app">
<el-container>
  <el-header  id="NameCard">
  <div class="block" style="display: flex;" id="NameWarp">  
  <el-avatar :size="90" :src="AvatarUrl"></el-avatar>  
  <div id="NameSection">
  <div id="Name">{{Name}}</div>
  <div id="ShortBio">{{ShortBio}}</div>
  </div>
  </div>
     <el-divider></el-divider>
  </el-header>

  <el-main>
  <BioSection :msg="About" SectionName="About" :MsgCard="true"/>
  <el-divider></el-divider>
  <BioSection SectionName="Projects" :ProjectCard="true" :ProjectInfo="ProjectInfo"/>
  <el-divider></el-divider>
  <!--<el-button>默认按钮</el-button>-->
  </el-main>
  <el-footer>© 2022 Yuntao Xie. All rights reserved.</el-footer>
</el-container>

  </div>
</template>
<script>
import Config from './Config.vue'
import BioSection from './components/BioSection.vue'
export default {
    data () {
      return {
        AvatarUrl:Config.AvatarUrl,
        Name:Config.Name,
        ShortBio:Config.ShortBio,
        About:Config.About,
        ProjectInfo:Config.ProjectInfo,
      }
    },
    components: {
    BioSection
    }
  }
</script>
