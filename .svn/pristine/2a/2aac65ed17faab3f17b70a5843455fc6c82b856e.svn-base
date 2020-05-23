<template>
  <div class="process-container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="人员统计" name="first">
        <div class="block">
          <span class="demonstration">时间段：</span>
          <el-date-picker
            v-model="value"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width:35%"
          ></el-date-picker>
          <el-button style="margin-left:10px" @click="search" type="primary">查询</el-button>
          <el-button style="margin-left:10px" @click="search" type="primary">重置</el-button>
        </div>
        <el-table
          :data="list"
          border
          element-loading-text="Loading"
          highlight-current-row
          style="margin-top:20px;line-height:48px"
        >
          <el-table-column type="index" width="50" label="序号" :index="indexMethod"/>
          <el-table-column :show-overflow-tooltip="true" width="150">
            <template slot="header">姓名</template>
            <template :slot-scope="scope"></template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">身份证</template>
            <template :slot-scope="scope"></template>
          </el-table-column>
          <el-table-column label="联系电话" :show-overflow-tooltip="true" width="200">
            <template :slot-scope="scope"></template>
          </el-table-column>
          <el-table-column label="负责的勘察项目" width="300">
            <template :slot-scope="scope"></template>
          </el-table-column>
          <el-table-column label="参与的勘察项目">
            <template :slot-scope="scope"></template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <div class="left">
            共 {{ total }} 条记录， 当前为 {{ displayLength * (page - 1) + 1 }} -
            {{
            Math.min(
            displayLength * (page - 1) + displayLength,
            displayLength * (page - 1) + list.length
            )
            }}
            条
          </div>
          <div class="right">
            <el-select :value="displayLength" size="small" @change="handleSizeChange">
              <el-option
                v-for="item in [10, 20, 50]"
                :key="item"
                :label="item"
                :value="item"
                size="small"
              />
            </el-select>
            <span>条/页</span>
            <el-button
              icon="el-icon-arrow-left"
              size="mini"
              :disabled="page == 1"
              @click="prevPage"
            />
            <el-select :value="page" size="small" @change="pageCurrentChange">
              <el-option v-for="item in pageArr" :key="item" :label="item" :value="item" />
            </el-select>
            <el-button
              icon="el-icon-arrow-right"
              size="mini"
              :disabled="page == maxPage"
              @click="nextPage"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="业务量统计" name="second">
        <div class="selectLeft">
          <el-select v-model="value" placeholder="请选择" style>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span>年</span>
        </div>
        <dropDownBox></dropDownBox>
        <el-table
          :data="list"
          border
          element-loading-text="Loading"
          highlight-current-row
          :span-method="arraySpanMethod"
          style="margin-top:20px;line-height:48px;"
        >
          <el-table-column type="index" width="50" label="序号">
            <template slot-scope="scope">{{ scope.row.td0 }}</template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true">
            <template slot="header">月份</template>
            <template slot-scope="scope">
              <div
                @click="dialogView = !dialogView"
                style="text-align:center;font-weight:600;padding:0 10px"
              >
                {{ scope.row.td1 }}
                <br />
              </div>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" width="300">
            <template slot="header">已受理勘察项目数</template>
            <template slot-scope="scope">
              <div @click="dialogView = !dialogView">
                {{ scope.row.td4 }}
                <br />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="不予受理勘察项目数" :show-overflow-tooltip="true" width="200">
            <template slot-scope="scope">
              <div @click="dialogView = !dialogView">{{scope.row.td4}}</div>
            </template>
          </el-table-column>
          <el-table-column label="一次性通过审查项目数" width="200"></el-table-column>
          <el-table-column label="审查通过项目数" width="200">
            <template slot-scope="scope">
              <div
                @click="dialogView = !dialogView"
                style="text-align:center;font-weight:600;padding:0 10px"
              >
                {{ scope.row.td4 }}
                <br />
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title :visible.sync="dialogView" width="80%">
      <statisticeList></statisticeList>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
@import "../../styles/index.scss";
.process {
  &-container {
    margin: 20px 0;
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
<script>
import { mapGetters } from "vuex";
import statisticeList from "../Exploration/statisticsList.vue";
import dropDownBox from "../Exploration/dropDownBox.vue";

export default {
  name: "investigate",
  data() {
    return {
      options: [
        {
          value: "1998",
          label: "1998"
        },
        {
          value: "1999",
          label: "1999"
        },
        {
          value: "2000",
          label: "2000"
        },
        {
          value: "2001",
          label: "2001"
        },
        {
          value: "2002",
          label: "2002"
        }
      ],
      value: "2002",
      dialogView: false,
      activeName: "first",
      projectName: "1",
      projectNumber: "",
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      spanArr: [],
      list: [
        {
          td0: "1",
          td1: "二月",
          td2: "2017-510681-41-03-1655130-010 中型",
          td3: "0",
          td4: "88",
          td5: "2020-04-15",
          td6: 1
        },
        {
          td0: "2",
          td1: "二月",
          td2: "2017-510681-41-03-1655130-006 中型",
          td3: "0",
          td4: "33",
          td5: "2020-04-15",
          td6: 2
        },
        {
          td0: "合计",
          td1: "合计",
          td2: "合计",
          td3: "0",
          td4: "126",
          td5: "",
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
  components: {
    statisticeList,
    dropDownBox
  },
  mounted() {
    this.projectName = this.$route.query.id;
    this.projectNumber = this.$route.query.number;
    this.fetchData();
    this.getSpanArr(this.list);
  },
  methods: {
    search(){},
    getSpanArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i == 0) {
          this.spanArr.push(1);
          this.pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].td1 == data[i - 1].td0) {
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
      if (rowIndex == 2) {
        if (columnIndex == 0) {
          return [0, 2];
        } else if (columnIndex == 1) {
          return [1, 2];
        }
      }
    },
    handleClick() {},
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
      return (this.page - 1) * this.displayLength + index + 1;
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
.selectLeft {
  width: 30%;
  float: left;
}
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
