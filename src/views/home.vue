<template>
  <el-container class="conenet">
      <el-header>
          <Title></Title>
      </el-header>
        <el-container>
            <Sidebar></Sidebar>
            <router-view ref="content"></router-view>
        </el-container>
  </el-container>
</template>

<script>
import Title from '@/components/title'
import Sidebar from '@/components/sidebar'

export default {
    data(){
        return{

        };
    },
    components:{
        Title,
        Sidebar
    }

};
</script>

<style>
.el-header{
    color:#fff;
    background: #26c6da;
}

</style>