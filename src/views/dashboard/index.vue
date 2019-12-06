<template>
  <div class="dashboard-container">
    <h1>Todo</h1>
    <!-- 录入框 -->
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="添加项目">
        <el-input
          type="input"
          clearable
          v-model="form.desc"
          :rows="2"
          maxlength="30"
          style="width: 300px;"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="20">
      <el-col :span="12">
        <h2>未开始</h2>
        <!-- 展示表单 -->
        <el-table :data="toDoList" border style="width: 100%">
          <el-table-column prop="creatTime" label="创建时间"></el-table-column>
          <el-table-column prop="date" label="代办项目"></el-table-column>
          <el-table-column label="操作" align="center">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <h2>完成中</h2>
        <!-- 展示表单 -->
        <el-table :data="workList" border style="width: 100%">
          <el-table-column prop="creatTime" label="创建时间"></el-table-column>
          <el-table-column prop="date" label="代办项目"></el-table-column>
          <el-table-column label="操作" align="center">
            <el-button type="info" icon="el-icon-close" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <h2>已完成</h2>
        <el-table :data="doneList" border style="width: 100%">
          <el-table-column prop="creatTime" label="创建时间"></el-table-column>
          <el-table-column prop="doneTime" label="完成时间"></el-table-column>
          <el-table-column prop="date" label="代办项目"></el-table-column>
          <el-table-column label="操作" align="center">
            <el-button type="info" icon="el-icon-close" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  data() {
    return {
      form: {
        desc: ""
      },
      toDoList: [{ creatTime: "", date: "123" }],
      workList: [{ creatTime: "", date: "456" }],
      doneList: [{ creatTime: "", doneTime: "", date: "789" }]
    };
  },
  methods: {
    onSubmit() {
      let date = new Date();
      date = moment(date).format("YYYY-MM-DD hh:mm:ss");
      this.toDoList = [
        ...this.toDoList,
        { creatTime: date, date: this.form.desc }
      ];
      this.form.desc = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
