<template>
  <el-main class="main">
    <div class="h-input">
      <div class="left p-l10" v-show="radio==='table'">
        <el-input
          v-model="input"
          placeholder="请输入账户名称"
          size="small"
        ></el-input>
      </div>
      <el-button v-show="radio==='table'"
        class="left m-l10 btn-ck"
        icon="el-icon-search"
        :loading="loading"
        size="small"
        >搜索</el-button
      >
      <div class="right">
        <el-radio-group v-model="radio" size="small" fill="#1eb9ce">
          <el-radio-button label="photo">图</el-radio-button>
          <el-radio-button label="table">表</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div>
      <div v-show="radio==='photo'">
        <Photo></Photo>
      </div>
      <div v-show="radio==='table'">
        <Table></Table>
      </div>
    </div>
  </el-main>
</template>

<script>
import Table from '@/components/table'
import Photo from '@/components/photo'
import "../../assets/css/list.css";

export default {
  data() {
    return {
      radio:"photo",
      input: "",
      loading: false, 
    };
  },
  components:{
    Table,
    Photo
  }
};
</script>

<style>
</style>