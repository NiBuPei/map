<template>
  <div class="error-box">
    <div class="error-body text-center">
      <h1>404</h1>
      <h3 class="text-uppercase">Page Not Found !</h3>
      <p class="text-muted m-t-30 m-b-30">
        YOU SEEM TO BE TRYING TO FIND HIS WAY HOME
      </p>
      <el-button class="btn-ck" @click="black()">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{};
  },
  methods:{
    black(){
      this.$router.push({name:'home'})
    }
  }
};
</script>

<style>
.error-body {
  padding-top: 5%;
}
.text-center {
  text-align: center;
}
.error-box {
  font-family: "Poppins", sans-serif;
  height: 100%;
  position: fixed;
  background: #fff;
  color: #67757c;
  font-weight: 300;
  width: 100%;
}
.error-body h1 {
  font-size: 210px;
  font-weight: 900;
  line-height: 210px;
}
h3 {
  line-height: 30px;
  font-size: 21px;
}
.text-muted {
    color: #99abb4;
}
.m-t-30{
  margin-top: 30px;
}
.m-b-30{
  margin-bottom: 30px;
}
</style>