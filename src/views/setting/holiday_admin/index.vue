<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击选择选手</el-button>
    <el-dialog title="选择选手" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <check-list>
        <template v-slot:default="tips">
          <div>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="getCheckList(tips.data)">确 定</el-button>
            </span>
          </div>
        </template>
      </check-list>
    </el-dialog>

    <el-table :data="tableData" border style="width: 50%; margin: auto;">
      <el-table-column prop="date" label="添加时间"></el-table-column>
      <el-table-column prop="name" label="选手"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from "moment";
import checkList from "@/components/checkList";
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: []
    };
  },
  components: { checkList },
  methods: {
    handleClose(done) {
      done();
    },
    getCheckList(checkList) {
      this.tableData = [];
      //   console.log(checkList);
      checkList.map((item, i) => {
        this.tableData.push(
          Object.assign(
            {},
            { name: item },
            {
              date: moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            }
          )
        );
      });
      this.dialogVisible = false;
      //   this.tableData.filter(item => !checkList.includes(item.name));
      console.log(this.tableData);
    }
  }
};
</script>