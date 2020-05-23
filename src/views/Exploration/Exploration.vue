<template>
  <div class="process-container">
    <div>
      <el-form :inline="true" class="form-inline" label-width="100px">
        <el-form-item>
          <input
            class="explorationInputStyle"
            v-model="text"
            placeholder="搜索项目统一代码或项目名"
            size="small"
          />
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:10px" @click="search" type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="listLoading"
      :data="frontList"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column type="index" width="50" label="序号" />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">
          <div>工程名称</div>
          <!-- <span>基本情况</span> -->
        </template>
        <template slot-scope="scope">
          <div
            style="text-align:left;font-weight:600;padding:0 10px;font-size:16px"
          >{{ scope.row.ename }}</div>
          <!-- <div style="text-align:left;padding:0 10px;color:#555555">{{ scope.row.td2 }}</div> -->
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">
          上报日期
          <br />受理日期
        </template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.createTime |dateFilter }}
            <br />
          </div>
          <!-- <div>{{ scope.row.updateTime |dateFilter }}</div> -->
        </template>
      </el-table-column>
      <el-table-column label="状态" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-tag
            v-if="scope.row.estate==6"
            type="success"
            style="width:90%"
            disable-transitions
          >已接受委托</el-tag>
          <el-tag
            v-if="scope.row.estate==1"
            type="primary"
            style="width:90%"
            disable-transitions
          >待接收委托</el-tag>
          <el-tag
            v-if="scope.row.estate==0"
            type="primary"
            style="width:90%"
            disable-transitions
          >报告上传</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" @click="view(scope.$index)">查看</el-button>
          <el-button v-if="scope.row.estate==1" type="text" @click="oprate(scope.row)">受理</el-button>
          <el-button v-if="scope.row.estate==6" type="text" @click="dispatch(scope.row)">指派劳务</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        :current-page.sync="pageNum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size.sync="maxPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <el-dialog title="提交审核" :visible.sync="dialogApproveFormVisible">
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogApproveFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="选择劳务机构" :visible.sync="laborView">
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <input
            class="explorationInputStyle"
            v-model="filterForm.key"
            placeholder="搜索项目统一代码或项目名"
            size="small"
          />
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:10px" @click="search" type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
      <el-table
        v-loading="listLoading"
        :data="laborUnitList"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="selection" width="50" label :index="indexMethod"></el-table-column>
        <el-table-column :show-overflow-tooltip="true">
          <template slot="header">
            <span>机构代码</span>
          </template>
          <template slot-scope="scope">
            <div
              style="text-align:left;font-weight:600;padding:0 10px;font-size:16px"
            >{{ scope.row.td1 }}</div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" width="200">
          <template slot="header">
            <span>机构名称</span>
          </template>
          <template slot-scope="scope">
            <div>{{ scope.row.td4 }}</div>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" :show-overflow-tooltip="true" width="150">
          <template slot-scope="scope">{{ scope.row.td2 }}</template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="laborView = false">取 消</el-button>
        <el-button type="primary" @click="laborView = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./Exploration.js"></script>
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
.el-table .el-table__row .el-table_1_column_2 .el-tooltip:last-child {
  font-size: 12.8px;
}
.el-table .el-table__row .el-table_1_column_3 .el-tooltip:last-child {
  font-size: 16px;
}
.el-tag.el-tag--success {
  color: #004c77;
  background-color: #baf5b9;
}
.el-table .cell > span {
  line-height: 46px;
  height: 46px;
  font-size: 16px;
}
</style>
