<template>
  <div class="sidebar">
    <el-menu default-active="2" class="el-menu-vertical-demo"
        router
        :collapse="isCollapse"
    >
      <template v-for="item in items">
        <template v-if="item.childrens">
          <el-submenu :key="item.order" :index="item.order">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subitem in item.childrens">
              <el-menu-item :key="subitem.path" :index="subitem.path">{{
                subitem.title
              }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="item.path" :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      items: [
        {
          icon: "el-icon-s-home",
          order: "1",
          title: "首页",
          path:"dashboard",
        },
        {
          icon: "el-icon-user",
          order: "1",
          title: "系统管理",
          path:"permissionsindex",
        },
        {
          icon: "el-icon-notebook-1",
          order: "1",
          title: "日志记录",
          path:"log",
        },
        {
          icon: "el-icon-pie-chart",
          order: "1",
          title: "系统统计",
          path:"statisticalindex",
        },
      ],
    };
  },
  mounted() {
    this.bus.$on((msg) => {
      this.isCollapse = msg;
    });
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
};
</script>

<style>
.el-menu-vertical-demo {
  padding: 0;
  margin: 0;
  height: 91.5vh;
  width: 200px;
}
</style>