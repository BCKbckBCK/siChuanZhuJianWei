<template>
  <div class="process-container" style="margin:20px 0">
    <div>
      <span class="title">工程勘察报告</span>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column type="index" width="150" label="报告名">
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;padding:0 10px">
            {{ scope.row.td1 }}
            <br />
          </div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">版次</template>
        <template slot-scope="scope">
          <div>{{ scope.row.td3 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="150">
        <template slot="header">时间</template>
        <template slot-scope="scope">
          <div>{{ scope.row.td5 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="150">
        <template slot="header">审核意见</template>
        <template slot-scope="scope">
          <div>{{ scope.row.td0 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="150">
        <template slot="header">审核意见</template>
        <template slot-scope="scope">
          <div>{{ scope.row.td0 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="150">
        <template slot="header">状态</template>
        <template slot-scope="scope">
          <el-tag type="primary" v-if="scope.row.progress ==1">待终审</el-tag>
          <el-tag type="success" v-if="scope.row.progress ==2">已完成终审</el-tag>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="150">
        <template slot="header">审核结果</template>
        <template slot-scope="scope">
          <div>{{ scope.row.td0 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-button type="text" @click="view(scope.row)">查看</el-button>
          <el-button type="text" v-if="scope.row.progress==2" @click="dialogView =!dialogView">提交意见单</el-button>
        </template>
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
        <el-button icon="el-icon-arrow-left" size="mini" :disabled="page === 1" @click="prevPage" />
        <el-select :value="page" size="small" @change="pageCurrentChange">
          <el-option v-for="item in pageArr" :key="item" :label="item" :value="item" />
        </el-select>
        <el-button
          icon="el-icon-arrow-right"
          size="mini"
          :disabled="page === maxPage"
          @click="nextPage"
        />
      </div>
    </div>
    <span style="text-align:right;width:100%;display:block;margin-top:10px">
      <el-button size="small" @click="goBack"/>
      <el-button style="margin:0" size="small" @click="goBack">
        返回
        <i class="el-icon-arrow-right el-icon--right" />
      </el-button>
    </span>
    <el-dialog title="意见单" :visible.sync="dialogView" width="80%">
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <span>项目名称：</span>

          <br />
          <span>工程编号：</span>

          <br />
          <span>意见内容：</span>
          <br />
        </el-form-item>
        <el-table
          v-loading="listLoading"
          :data="list"
          border
          element-loading-text="Loading"
          highlight-current-row
          style="margin-top:20px;line-height:48px"
        >
          <el-table-column type="index" width="50" label="序号" :index="indexMethod" />
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">意见类型</template>
            <template slot-scope="scope"></template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">页码</template>
          </el-table-column>
          <el-table-column label="日期" :show-overflow-tooltip="true" width="100">
            <template slot-scope="scope"></template>
          </el-table-column>
          <el-table-column label="审查意见">
            <template slot-scope="scope"></template>
          </el-table-column>
        </el-table>
        <br />
        <div class="leftSgin">
          <el-form-item>
            <span>审查人：</span>

            <br />
            <span>核查人：</span>

            <br />
            <span>日期：</span>

            <br />
          </el-form-item>
        </div>
        <div style="clear:both"></div>
        <div style="width:100%;text-align:center">
          <el-form-item>
            <span style="text-align:right;width:100%;">
        <el-button size="small" style="margin-bottom:10px;background-color:#0086C2;width:100px;color:white" @click="dialogView = !dialogView">
          确定
         
        </el-button>
      </span>
           <span style="text-align:right;width:100%;">
        <el-button size="small" style="margin-bottom:10px;margin-left:50px;background-color:white;width:100px" @click="dialogView = !dialogView">
          取消
        
        </el-button>
      </span>
            
          </el-form-item>
        </div>

        <br />
      </el-form>
    </el-dialog>
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
      projectName: "",
      projectNumber: "",
      dialogView: false,
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      list: [
        {
          td0: "---",
          td1: "项目001勘察报告",
          td2: "",
          td3: "001",
          td4: "2020-04-15",
          td5: "2020-04-15",
          progress: 1
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
    let item = sessionStorage.getItem("massage");
    console.log(JSON.parse(item));

    if (JSON.parse(item)[0].progress == 4) {
      this.list[0].progress = 2;
    }
  },
  methods: {
    goBack() {
      sessionStorage.setItem("massage", JSON.stringify(this.list));
      this.$router.push({ path: "finallyprocess" });
    },
    fetchData() {},
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
        path: "checkDetail",
        query: { id: item.dnUserId }
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
.title {
  border-bottom: 4px solid black;
  display: block;
  font-size: 1.5em;
  line-height: 2em;
  font-weight: bold;
  color: #2c3447;
}
.leftSgin {
  float: right;
  padding-right: 100px;
  padding-top: 100px;
}
.explorationBtn {
  vertical-align: middle;
  width: 6em;
  border: 0;
  background-color: #3e97df;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  color: white;
  margin-right: 50px;
}
</style>
