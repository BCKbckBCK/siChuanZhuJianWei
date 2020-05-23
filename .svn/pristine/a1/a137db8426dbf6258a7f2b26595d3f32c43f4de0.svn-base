<template>
  <div class="AuditPlan-container">
    <div class="detail">
      <span class="title">项目统一代码验证</span>
      <div style="margin: 25px 0 0 0;">
        <i class="el-icon-info" />
        <span>如无发改委项目统一代码，请进入【四川省投资项目在线审批监管平台】申请</span>
        <el-form :inline="true" :model="formInline" class="demo-form-inline margintop">
          <el-form-item>
            <span ref="title" class="formTitle">项目统一代码</span>
            <input
              v-model="formInline.code"
              style="padding:4px 0;width:16em;height:40px;margin-left:10px;"
              placeholder="请输入发改委项目统一代码"
            >
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">验证</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- <div v-if="ISshow" class="marginBottom"> -->
      <div class="marginBottom">
        <ul>
          <li>
            <label class="li-left">项目名称：</label>
            <span class="li-right">五金配件技术改造项目</span>
          </li>
          <li>
            <label class="li-left">总投资：</label>
            <span class="li-right">4650.0（万元）</span>
          </li>
        </ul>
        <span class="formTitle">本项目代码我申办的审图业务工程列表</span>
        <el-table
          :data="list"
          border
          element-loading-text="Loading"
          highlight-current-row
          style="margin-top:20px;line-height:48px"
        >
          <el-table-column :show-overflow-tooltip="true">
            <template slot="header">项目状态</template>
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.td1 }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true">
            <template slot="header">申办日期</template>
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.td2 }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true">
            <template slot="header">工程编号</template>
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.td3 }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true">
            <template slot="header">工程名称</template>
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.td4 }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="primary"
          style="margin-top:30px;"
          @click="dialogApproveFormVisible=true"
        >申办新业务 》</el-button>
      </div>
      <span style="text-align:right;width:100%;display:block">
        <el-button size="small" style="margin-bottom:10px" @click="goBack">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>

    <el-dialog title="选择审核机构" :visible.sync="dialogApproveFormVisible">
      <el-form :inline="true" :model="formInline" class="demo-form-inline margintop">
        <el-form-item label="名称或代码">
          <el-input v-model="formInline.code" placeholder="请输入名称或代码" />
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
        <el-table-column type="selection" width="55" />
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./codecheck.js"></script>
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

