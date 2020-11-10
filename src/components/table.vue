<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%" size="small">
      <el-table-column fixed prop="time" label="日期" width="150">
      </el-table-column>
      <div v-for="(item, index) in titleData" :key="index">
        <el-table-column
          :prop="item.prop"
          :label="item.name"
          width=""
        ></el-table-column>
      </div>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small" disabled>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="totalPage"
      :current-page="pageindex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="PageSize"
      @size-change="sizeChange()"
      @current-change="currentChange()"
      small
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      PageSize: 5,
      totalPage: 0,
      value1: "",
      value2: "",
      titleData: [
        {
          prop: "user",
          name: "操作账户",
        },
        {
          prop: "content",
          name: "操作内容",
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },

      tableData: [
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
        {
          time: "2016-05-02",
          user: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    currentChange(val) {
      this.PageSize = val;
      this.pageindex = 1;
    },
    sizechange(val) {
      this.pageindex = val;
    },
  },
};
</script>

<style>
</style>