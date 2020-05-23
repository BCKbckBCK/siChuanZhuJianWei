<template>
  <div class="process-container">
    <div>
      <el-form
        :inline="true"
        :model="filterForm"
        class="form-inline"
        label-width="100px"
      >
        <el-form-item>
          <input
            v-model="text"
            type="text"
            class="search"
            placeholder="请输入关键字搜索项目"
            style="width: 16em;padding-left:8px;font-size:16px"
            size="small"
          />
        </el-form-item>
        <el-form-item>
          <el-button style="width:170px" type="primary" @click="newAuditPlan"
            >新建工程</el-button
          >
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
      <el-table-column type="index" width="100" label="序号" />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header"
          >工程名称</template
        >
        <template slot-scope="scope">
          <div
            style="text-align:left;font-weight:600;padding:0 10px;line-height:70px"
          >
            {{ scope.row.ename }}
            <br />
          </div>
          <div style="text-align:left;padding:0 10px;color:555">
            {{ scope.row.td2 }}
          </div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="150">
        <template slot="header"
          >合同金额</template
        >
        <template slot-scope="scope">
          <div>{{ scope.row.contractAmount }}</div>
        </template>
      </el-table-column>
      <el-table-column id="updata" :show-overflow-tooltip="true" width="200">
        <template slot="header">
          <span style="display:block;line-height:35px;">上报日期</span>
          <span style="display:block;line-height: 35px;">受理日期</span>
        </template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.createTime }}
            <br />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.estate == 0" style="width:90%" type="primary"
            >新建</el-tag
          >
          <el-tag
            v-if="scope.row.estate == 10"
            type="primary"
            style="width:90%"
            disable-transitions
            >待接受委托</el-tag
          >
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 11"
            type="success"
            disable-transitions
            >已接受委托</el-tag
          >
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 1"
            type="primary"
            disable-transitions
            >报告上传</el-tag
          >
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 2"
            type="primary"
            disable-transitions
            >待受理</el-tag
          >
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 3"
            type="primary"
            disable-transitions
            >已受理</el-tag
          >
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 5"
            type="primary"
            disable-transitions
            >待审查</el-tag
          >
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 4"
            type="warning"
            disable-transitions
            >待整改</el-tag
          >
          <!-- <el-tag
            style="width:90%"
            v-if="scope.row.estate==7"
            type="primary"
            disable-transitions
          >已补正</el-tag>-->
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 7"
            type="success"
            disable-transitions
            >审查合格</el-tag
          >
          <el-tag
            style="width:90%"
            v-if="scope.row.estate == 6"
            type="success"
            disable-transitions
            >审图中</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <!-- v-if="scope.row.estate!=1" -->
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.estate != 1"
            style="font-size:16px"
            type="text"
            @click="view(scope.$index)"
            >查看</el-button
          >
          <el-button
            style="font-size:16px"
            v-if="scope.row.estate == 2 || scope.row.estate == 10"
            type="text"
            @click="comfirmrevoke(scope.row)"
            >撤销委托</el-button
          >
          <el-button
            style="font-size:16px"
            v-if="scope.row.estate == 1"
            type="text"
            @click="getProEcode(scope.$index)"
            >提交审核</el-button
          >
          <el-button
            style="font-size:16px"
            v-if="scope.row.estate == 8"
            type="text"
            @click="look(scope.row)"
            >再次申请</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
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
    </div>
    <el-dialog title="选择审核机构" :visible.sync="dialogApproveFormVisible">
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline margintop"
      >
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
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          label="机构代码"
          :show-overflow-tooltip="true"
          width="120"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column label="机构名称" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span>{{ scope.row.td3 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="联系方式"
          :show-overflow-tooltip="true"
          width="200"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.td4 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="审图金额（万元）"
          :show-overflow-tooltip="true"
          width="150"
        >
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.amount"
              size="mini"
              style="width:80px;"
              type="number"
            />万元
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="basicProInfo">
      <basicInfo @cancel="cancel" @dialogTipView="dialogTipView"></basicInfo>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogtip" width="203px">
      <span>是否推送至审图机构</span>
      <div slot="footer" class="dialog-footer">
        <el-button style="display:inline-block" @click="cancel"
          >取 消</el-button
        >
        <el-button
          style="display:inline-block"
          type="primary"
          @click="submitDrawingCon"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="dialogupload" width="400px">
      <span>上传报告</span>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogupload = false">取 消</el-button>
        <el-button type="primary" @click="comfirmupload">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./process.js"></script>
<style lang="scss" scoped>
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
.el-table td th {
  padding: 10px !important;
  box-sizing: border-box;
}
.el-table div {
  height: 35px !important;
  padding-left: 5px;
  text-align: bottom;
  color: #45484b;
}
.el-table div:nth-last-child(1) {
  line-height: 22px;
  // font-size: 12.8px;
  color: #555;
}
.el-table th > .cell {
  height: 69.6px;
}

.el-table .el-table__row .el-table_1_column_3 .el-tooltip:last-child {
  font-size: 16px;
}
.el-button + .el-button {
  margin-left: 0 !important;
}
.pagination .right span {
  line-height: 40px;
}
.search {
  height: 40px;
}
</style>
