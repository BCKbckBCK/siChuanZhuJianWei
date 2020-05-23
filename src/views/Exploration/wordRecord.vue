<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">现场工作记录</span>
      <el-table
        v-loading="listLoading"
        :data="siteOperationsList"
        :span-method="arraySpanMethod"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="index" width="200" label="设备及作业">
          <template slot-scope="scope">
            <div>{{ scope.row.device }}</div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" label style="width:40%">
          <template slot-scope="scope">
            <div style="text-align:left;font-weight:100;padding:0 10px">
              {{ scope.row.operations }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="型号/单位"
          :show-overflow-tooltip="true"
          style="width:20%"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.attribute }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="工作量"
          :show-overflow-tooltip="true"
          style="width:20%"
        >
          <template slot-scope="scope">
            <input
              class="workRecordInput"
              oninput="value=value.replace(/[^\d]/g,'')"
              v-model="scope.row.workload"
            />
          </template>
        </el-table-column>
        <el-table-column label="备注" style="width:20%">
          <template slot-scope="scope">
            <input
              class="workRecordInput"
              oninput="value=value.replace(/[^\d]/g,'')"
              v-model="scope.row.remark"
            />
          </template>
        </el-table-column>
      </el-table>
      <span style="text-align:right;width:100%;display:block;margin-top:10px">
        <el-button
          size="small"
          class="workRecordSave"
          style="margin-bottom:10px"
          @click="saveWork"
        >
          保存
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
        <el-button size="small" style="margin-bottom:10px" @click="goBack">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { saveWorkRecord } from "../../api/workingProj";
export default {
  name: "Process",
  data() {
    return {
      createTime: null,
      updateTime: null,
      ecode: null,
      Decimal: window.Decimal,
      pageArr: [1],
      spanArr: [],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      siteOperationsList: [
        {
          id: "f4df047719434538baaf02d4d717e0cc",
          createTime: 1587634695576,
          updateTime: 1587634695576,
          device: "测试放孔",
          operations: "钻孔测量",
          attribute: "AE0",
          workload: "2D",
          remark: "我是备注",
          ecode: "4234"
        }
      ],
      listLoading: false,
      filterForm: {},
      wxScope: window.Scope,
      role: window.ROLE,
      form: {
        option3: "1",
        option6: "1",
        option7: "1",
        option10: []
      },
      dialogApproveFormVisible: false,
      approveList: [
        {
          td1: 1,
          td2: "787901178",
          td3: "成都圣图建设工程咨询有限公司",
          td4: "顾女士  18000000000",
          td5: 0
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["name"]),
    ecode() {
      return this.$store.state.app.ecode;
    }
  },
  mounted() {
    this.fetchData();
    this.siteOperationsList = this.$store.state.app.siteOperationsList;
    this.siteOperationsList.sort(this.compare("device"));
    this.getSpanArr(this.siteOperationsList);
  },
  methods: {
    //  element table rowspan colspan
    //  https://www.cnblogs.com/mmzuo-798/p/11686021.html
    getSpanArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i == 0) {
          this.spanArr.push(1);
          this.pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].device == data[i - 1].device) {
            this.spanArr[this.pos] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.pos = i;
          }
        }
        console.log(this.spanArr);
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        console.log(`rowspan:${_row} colspan:${_col}`);
        return {
          // [0,0] 表示这一行不显示， [2,1]表示行的合并数
          rowspan: _row,
          colspan: _col
        };
      }
    },
    fetchData() {},
    // 字符串排序
    compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1.localeCompare(value2, "zh");
      };
    },
    indexMethod(index) {
      if (rowIndex % 2 == 0) {
        if (columnIndex == 0) {
          return [1, 2];
        } else if (columnIndex == 1) {
          return [0, 0];
        }
      }
    },
    handleSizeChange(val) {
      this.displayLength = val;
      this.page = 1;
      this.fetchData();
    },
    pageCurrentChange(val) {
      this.page = val;
      this.fetchData();
    },
    prevPage() {
      this.page -= 1;
      this.fetchData();
    },
    nextPage() {
      this.page += 1;
      this.fetchData();
    },
    clean() {
      this.filterForm = {};
      this.fetchData();
    },
    add() {
      this.$router.push({ path: "userEdit" });
    },
    edit(item) {
      this.$router.push({ path: "userEdit", query: { id: item.dnUserId } });
    },
    view(item) {
      this.$router.push({
        path: "ExplorationDetail",
        query: { id: item.dnUserId }
      });
    },
    goBack() {
      this.$router.push({ path: "process" });
    },
    saveWork(item) {
      this.$confirm("是否保存作业记录 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        saveWorkRecord(this.list[0])
          .then(res => {
            this.$message({
              message: "保存成功",
              type: "success"
            });
            // this.fetchData()
          })
          .catch(error => {
            console.log("error" + error);
          });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/index.scss";

.processDetail {
  &-container {
    margin: 20px 0;
    .detail {
      margin: 40px 0;
      .title {
        border-bottom: 4px solid #2c3447;
        display: block;
        font-size: 1.5em;
        line-height: 2em;
        font-weight: bold;
        color: #2c3447;
      }
      ul {
        list-style-type: none;
        padding: 20px 10px;
        margin: 0px;
        .li-left {
          font-size: 1em;
          line-height: 4em;
          font-weight: bold;
          color: #2c3447;
          width: 200px;
          display: inline-block;
        }
        .li-right {
          font-size: 1em;
          line-height: 4em;
          font-weight: bold;
          color: #999999;
        }
      }
    }
    .operate-button {
      width: 24px;
      height: 24px;
      padding: 4px;
      margin-left: 8px;
    }
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-input {
  width: 90%;
}
.workRecordSave {
  background-color: #3e97df;
  color: #ffffff;
}
.workRecordSave:hover {
  background-color: #3784c2;
  color: #ffffff;
}
</style>
