<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">现场工作记录</span>
      <el-table
        v-loading="listLoading"
        :data="list"
        :span-method="arraySpanMethod"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="index" width="200" label="设备及作业" :index="indexMethod">
          <template slot-scope="scope">
            <div>{{ scope.row.td0 }}</div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" label style="width:40%">
          <template slot-scope="scope">
            <div style="text-align:left;font-weight:100;padding:0 10px">{{ scope.row.td1 }}</div>
          </template>
        </el-table-column>
        <el-table-column label="型号/单位" :show-overflow-tooltip="true" style="width:20%">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="工作量" :show-overflow-tooltip="true" style="width:20%">
          <template slot-scope="scope">
            <span></span>
          </template>
        </el-table-column>
        <el-table-column label="备注" style="width:20%">
          <template slot-scope="scope">
            <span></span>
          </template>
        </el-table-column>
      </el-table>
      <span style="text-align:right;width:100%;display:block;margin-top:10px">
        <button class="explorationBtn" style="margin:0" size="small" @click="goBack">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import {
//     getUserList, deleteUser
// } from '../../api/user'
export default {
  name: "Process",
  data() {
    return {
      Decimal: window.Decimal,
      pageArr: [1],
      spanArr: [],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      list: [
        {
          td0: "测试放孔",
          td1: "数量",
          td2: null,
          td3: "孔",
          td4: null,
          td5: null,
          td6: 1
        },
        {
          td0: "测试放孔",
          td1: "钻孔测量",
          td2: null,
          td3: "张",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "机械钻探",
          td1: "钻孔数量",
          td2: null,
          td3: "个",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "机械钻探",
          td1: "钻孔进尺",
          td2: null,
          td3: "米",
          td4: null,
          td5: null,
          td6: 2
        },

        {
          td0: "机械钻探",
          td1: "岩心照片",
          td2: null,
          td3: "张",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "机械钻探",
          td1: "钻探班报表",
          td2: null,
          td3: "张",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "机械钻探",
          td1: "钻探野外记录表",
          td2: null,
          td3: "张",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "水文测试",
          td1: "试验孔数",
          td2: null,
          td3: "孔",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "水文测试",
          td1: "抽水试验表",
          td2: null,
          td3: "张",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "水文测试",
          td1: "恢复试验表",
          td2: null,
          td3: "张",
          td4: null,
          td5: null,
          td6: 2
        },
        {
          td0: "水文测试",
          td1: "注水试验表",
          td2: null,
          td3: "张",
          td4: null,
          td5: null,
          td6: 2
        }
      ],
      listLoading: false,
      filterForm: {},
      wxScope: window.Scope,
      role: window.ROLE,
      dialogFormVisible: false,
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
    ...mapGetters(["name"])
  },
  mounted() {
    this.fetchData();
    this.getSpanArr(this.list);
  },
  methods: {
    //  https://www.cnblogs.com/mmzuo-798/p/11686021.html
    getSpanArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1);
          this.pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].td0 === data[i - 1].td0) {
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
      if (columnIndex === 0) {
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
    fetchData() {
      // const that = this
      // that.listLoading = true
      // getUserList({
      //     pageIndex: that.page,
      //     pageSize: that.displayLength,
      //     ...that.filterForm
      // }).then(res => {
      //     that.list = res.data
      //     that.total = res.total
      //     that.maxPage = Math.ceil(that.total / that.displayLength)
      //     that.pageArr = window.fp.range(1)(that.maxPage + 1)
      //     that.listLoading = false
      // })
    },
    indexMethod(index) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
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
         this.$router.push({ path: 'finallyProcess' })
    },
    deleteConfirm(item) {
      this.$confirm("删除此工程 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // deleteUser(item.dnUserId).then(res => {
        //     this.$message({
        //       message: '删除成功',
        //       type: 'success'
        //     });
        //     this.fetchData()
        // })
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common2.scss";

.processDetail {
  &-container {
    margin: 20px 0;
    .detail {
      margin: 40px 0;
      .title {
        border-bottom: 2px solid #2c3447;
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
</style>
