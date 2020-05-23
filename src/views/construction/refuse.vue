<template>
  <div class="processDetail-container">
    <div>
      <el-form :inline="true" class="form-inline" label-width="100px">
        <el-form-item>
          <input
            id="search"
            v-model="text"
            placeholder="请输入关键字搜索项目"
            style="width: 16em;font-size:16px;padding-left:10px"
            size="small"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="margin-left:15px" size="small" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column type="index" width="50" label="序号" :index="indexMethod" />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">
          项目名称
          <br />基本情况
        </template>
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;padding:0 10px">
            {{ scope.row.ename }}
            <br />
          </div>
          <!-- <div style="text-align:left;padding:0 10px;color:#555">{{ scope.row.td2 }}</div> -->
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">
          上报日期
          <br />受理日期
        </template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.createTime }}
            <br />
          </div>
          <div style="padding:0 10px;color:#555">{{ scope.row.updateTime }}</div>
        </template>
      </el-table-column>
      <el-table-column label="状态" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-tag type="warning" v-if="scope.row.estate == 9">退回补正</el-tag>
          <el-tag type="warning" v-if="scope.row.estate == 8">不予受理</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" @click="view(scope.row)">查看</el-button>
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
        <el-button icon="el-icon-arrow-left" size="mini" :disabled="page == 1" @click="prevPage" />
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
    <el-dialog title="查看" :visible.sync="dialogView">
      <span>退回补正或不予受理的原因</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogView = false">取 消</el-button>
        <el-button type="primary" @click="dialogView = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="选择审核机构" :visible.sync="dialogApproveFormVisible">
      <el-form :inline="true" :model="formInline" class="demo-form-inline margintop">
        <el-form-item label="名称或代码">
          <el-input v-model="formInline.code" placeholder="请输入名称或代码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">清空</el-button>
        </el-form-item>
      </el-form>
      <el-table
        v-loading="listLoading"
        :data="approveList"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="机构代码" :show-overflow-tooltip="true" width="120">
          <template slot-scope="scope">
            <span>{{ scope.row.td2 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="机构名称" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" :show-overflow-tooltip="true" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.td4 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审图金额（万元）" :show-overflow-tooltip="true" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.td5" size="mini" style="width:80px;" type="number" />万元
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="certain">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogtip" width="203px">
      <span>是否推送至审图机构</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogtip = false">取 消</el-button>
        <el-button type="primary" @click="dialogtip = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./refuse.js"></script>
<style lang="scss" scoped>
// @import "../../styles/common1.scss";
.processDetail {
  &-container {
    margin: 20px 0;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
input {
  height: 40px !important;
}

.search {
  width: 170px !important;
  height: 40px !important;
  color: #ffffff;
  font-size: 16px !important;
  margin-left: 20px !important;
  background-color: #3784c2 !important;
  border: none;
}
.el-table .el-button--text[data-v-7ca3bbe8] {
  font-size: 16px !important;
}
</style>
