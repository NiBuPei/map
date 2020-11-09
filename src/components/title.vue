<template>
  <div class="title">
    <div>
      <div class="left title-left">
        <i></i>
        <span>管理系统</span>
      </div>

      <div class="right title-right">
        <el-badge value="3" class="item left">
          <el-button type="danger" size="mini" class="el-icon-message-solid" circle></el-button>
        </el-badge>
        <div class="avatar left">
          <el-avatar :size="35"></el-avatar>
        </div>
        <el-dropdown trigger="click" class="left dropdown">
          <span class="el-dropdown-link">
            个人中心<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="left time">
          <span>
            {{ this.timeday }}<br />
            {{ this.timeyear }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeday: "",
      timeyear: "",
      time: null,
    };
  },
  mounted() {
    this.getNewtime();
    this.time = setInterval(() => {
      this.getNewtime();
    }, 1000);
  },
  methods: {
    getNewtime() {
      let data = new Date();
      let y = data.getFullYear();
      let m = data.getMonth();
      let d = data.getDate();
      let h = data.getHours();
      let mm = data.getMinutes();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      mm = mm < 10 ? "0" + mm : mm;
      this.timeday = h + ":" + mm;
      this.timeyear = y + "/" + m + "/" + d;
    },
  },
  beforeDestroy() {
    clearInterval(this.time);
  },
};
</script>

<style scoped>
.title {
  height: 60px;
  font-size: 12px;
}
.title-right {
  height: 60px;
}
.avatar {
  margin-top: 12.5px;
}
.dropdown {
  line-height: 60px;
  padding: 0 20px;
}
.time {
  margin-top: 14px;
  text-align: center;
}
.title-left span {
  line-height: 60px;
  font-size: 24px;
}
.item {
  margin-top: 15px;
  margin-right: 20px;
  line-height: 30px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>