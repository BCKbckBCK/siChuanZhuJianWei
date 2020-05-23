<template>
  <div class="process-container">
    <!-- 年份选择器 -->
    <section style="margin-left:20px;margin-top:20px;">
      时间段：
      <input type="text" /> --
      <input type="text" />
      <el-button type="primary">查询</el-button>
      <el-button type="primary">重置</el-button>
    </section>
    <!-- 表格 -->
    <!-- <el-table id="table" fit border :data="tableData" style="width: 100%">
      <el-table-column prop="num" label="序号" width="180" />
      <el-table-column prop="name" label="审查机构" width="180" />
      <el-table-column prop="item_count" label="审理项目数" />
      <el-table-column prop="did_count" label="完成审查项目数" />
      <el-table-column prop="only_did" label="一次性通过项目审查数" />
      <el-table-column prop="onlyone_rate" label="审查一次性通过率" />

    </el-table>-->
    <el-table
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column style="color: #555555;" prop="one" type="index" width="68" label="序号" />
      <el-table-column label="审查机构" prop="two" style="color:#555555;" />
      <!-- 工程规模 -->
      <el-table-column :show-overflow-tooltip="true" width="200" prop="three">
        <template slot="header" style="height:50px">审理项目数</template>
        <template slot-scope="scope">
          <div
            style="text-align:left;padding:10px;height:50px"
            @click="showProgram(scope.row.three)"
          >{{ scope.row.three }}</div>
        </template>
      </el-table-column>
      <!--  -->
      <el-table-column :show-overflow-tooltip="true" prop="four" width="200">
        <template slot="header">完成审查项目数</template>
        <template slot-scope="scope">
          <div
            style="text-align:left;padding:10px;height:50px"
            @click="showProgram(scope.row.four)"
          >{{ scope.row.four }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" prop="four" width="200">
        <template slot="header">一次性通过项目审查数</template>
        <template slot-scope="scope">
          <div
            style="text-align:left;padding:10px;height:50px"
            @click="showProgram(scope.row.five)"
          >{{ scope.row.five }}</div>
        </template>
      </el-table-column>
      <el-table-column label="审查一次性通过率" prop="six" width="180" />
    </el-table>
    <el-dialog title="项目列表" :visible.sync="dialogApproveFormVisible">
      <el-table
        :data="programList"
        border
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
      >
        <el-table-column type="index" width="100" label="序号" :index="indexMethod" />
        <el-table-column :show-overflow-tooltip="true">
          <template slot="header">项目工程名称</template>
          <template slot-scope="scope">
            <div style="text-align:left;font-weight:600;padding:0 10px">
              {{ scope.row.td1 }}
              <br />
            </div>
            <div style="text-align:left;padding:0 10px;color:555">{{ scope.row.td2 }}</div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" width="100">
          <template slot="header">工程规模</template>
          <template slot-scope="scope">
            <div>{{ scope.row.td3 }}</div>
          </template>
        </el-table-column>
        <el-table-column id="updata" :show-overflow-tooltip="true" width="150">
          <template slot="header">
            <span style="display:block;line-height:35px;">上报日期</span>
            <span style="display:block;line-height: 35px;">受理日期</span>
          </template>
          <template slot-scope="scope">
            <div>
              {{ scope.row.td4 }}
              <br />
            </div>
            <div>{{ scope.row.td5 }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <!-- <el-button style="font-size:16px" v-if="scope.row.td6==1" type="text" @click="view(scope.row)">查看</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button  @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./check_rate.js"></script>
<style lang="scss" scoped>
@import "../../styles/common4.scss";
.el-table td,
.el-table th.is-leaf,
.el-table--border,
.el-table--group {
  border: 1px solid #e2e2e2;
}
input{
  border:1px solid #DCDFE6
}
</style>
