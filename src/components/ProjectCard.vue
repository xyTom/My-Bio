<template>
<el-row style="overflow:hidden" type="flex" justify="space-between">

  <transition-group
    appear
    name="animate__animated animate__fadeInUp"
    appear-class="animate__fadeInUp"
    appear-to-class="animate__fadeInUp"
  >
<el-col :xs="24" :sm="24" :md="{span: 11, offset: 1}" :lg="{span: 11, offset: 1}" :xl="{span: 7, offset: 1}" :span="11" v-for="(item, index) in ProjectInfo" :key="item.id" :class="'animate__delay-'+0.5*index+'s'" :style="'animation-duration:'+(index+1)+'s;'">
 <el-card style="margin-top: 10px;" :body-style="{ padding: '0px'}" >
      <el-image :src="item.ProjectImg[0]" :preview-src-list="item.ProjectImg" style="width: 100%; height:200px; display: block;" fit="cover"></el-image>
      <div style="padding: 14px; ">
        <span>{{item.ProjectDes}}</span>
        <div class="bottom clearfix">
          <time class="time" v-if="item.ProjectDate">{{ item.ProjectDate }}</time>
          <el-link type="primary" :href="item.ProjectLink" class="button" target="_blank" v-if="item.ProjectLink">Learn More</el-link>
          <!--<el-button type="text" class="button" @click="win">Learn More</el-button>-->
        </div>
      </div>
    </el-card>
</el-col>
  </transition-group>
</el-row>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>

<script>
export default {
    name: 'ProjectCard',
    props: {
      ProjectInfo: Array
  }
}
</script>