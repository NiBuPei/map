<template>
  <div class="content">
    <div class="login">
      <div class="log-main">
        <div class="left log-img">
          <img src="../assets/imges/log-img.png" alt="" />
        </div>
        <div class="right">
          <div>
            <i></i>
            <el-input v-model="name" placeholder="请输入用户名"></el-input>
            <i></i>
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:"",
            password:"",

        }
    }
};
</script>

<style>
.content {
  width: 100vw;
  height: 100vh;
}
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/imges/login-bg.png") 0 0 no-repeat;
  background-position: center 0;
  background-size: cover;
}
.log-main {
  position: fixed;
  width: 60%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: #666 0 0 8px 5px;
  background: #fff;
}
.log-img {
  width: 39%;
  height: 100%;
  
}
.log-img img {
  width: 100%;
  height: 100%;
}
</style>