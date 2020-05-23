<template>
  <div class="AuditPlan-container">
    <div class="detail">
      <span class="title">选择审核机构</span>
      <div :visible.sync="dialogApproveFormVisible">
        <el-form :inline="true" :model="formInline" class="demo-form-inline margintop">
          <el-form-item label="名称或代码">
            <el-input v-model="formInline.code" placeholder="请输入名称或代码"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">清空所选机构</el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="approveList"
          border
          element-loading-text="Loading"
          highlight-current-row
          style="margin-top:20px;line-height:48px"
        >
          <el-table-column type="selection" width="55"/>
          <el-table-column label="机构代码" :show-overflow-tooltip="true" width="120">
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.td2 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="机构名称" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.td3 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="联系方式" :show-overflow-tooltip="true" width="200">
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.td4 }}</span>
            </template>
          </el-table-column>
          <el-table-column label="审图金额（万元）" :show-overflow-tooltip="true" width="150">
            <template slot-scope="scope">
              <el-input v-model="scope.row.td5" size="mini" style="width:80px;" type="number" />万元
            </template>
          </el-table-column>
        </el-table>
        <span class="title">温馨提示</span>
        <p>1.必须选择一家审图机构</p>
        <p>2.注意填写审图金额单位为万元</p>
        <div slot="footer" class="dialog-footer">
          <el-button style="width:200px" type="primary" @click="goprocess()">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./lookimg.js"/>
<style lang="scss" scoped>
@import "../../styles/common1.scss";

@import "../../styles/common2.scss";
.margintop {
  padding-top: 30px;
}
.formTitle {
  color: #0d1c28;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.6em;
}
ul {
  list-style-type: none;
  padding: 20px 0px;
  margin: 0px;
  .li-left {
    font-size: 1em;
    line-height: 3em;
    font-weight: bold;
    color: #0d1c28;
    display: inline-block;
  }
  .li-right {
    font-size: 1em;
    color: #555555;
  }
}
.rowClass {
  line-height: 40px;
}
</style>

