<template>
  <div id="app">
<el-container>
  <el-header  id="NameCard">
  <div class="block">
  <el-row>
  <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1"><el-avatar :size="100" :src="AvatarUrl"></el-avatar></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
  <div id="Name">{{Name}}</div>
  <div id="ShortBio">{{ShortBio}}</div>
  </el-col>
  </el-row>
  </div>
     <el-divider></el-divider>
  </el-header>

  <el-main>
  <BioSection :msg="About" SectionName="About" :MsgCard="true"/>
  <el-divider></el-divider>
  <BioSection SectionName="Projects" :ProjectCard="true" :ProjectInfo="ProjectInfo"/>
  <el-divider></el-divider>
  <BioSection SectionName="Publication" :ProjectCard="true" :ProjectInfo="ProjectInfo"/>
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
