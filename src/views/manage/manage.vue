<template>
  <div class="process-container">
    <!-- 年份选择器 -->
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
    <!-- 市级选择器 -->
    <dropDownBox style="margin-top:30px"></dropDownBox>
    <!-- <span style="margin-left:20px">请选择城市:</span>
    <select v-model="selected" class="data-picker" style="margin:35px 10px 30px 0px;">
      <option v-for="(item,index) in citys" :key="index" :value="item.name">{{ item.name }}</option>
    </select>
    <span style="margin-left:0">请选择地区:</span>
    <select v-model="country" class="data-picker" style="margin:35px 30px 30px 0px;">
      <option value="成华区">成华区</option>
    </select>
    <el-button style="margin-right:20px" type="primary">查询</el-button>
    <el-button type="primary">重置</el-button>-->
    <!-- 区级选择器 -->

    <!-- 表格 -->
    <!-- <el-table :data="tableData"  border style="width: 100%">
      <el-table-column prop="total" label="序号" width="100"/>
      <el-table-column prop="name" label="月份" width="100"/>
      <el-table-column prop="address" label="勘察项目数" />
      <el-table-column prop="address" label="合同金额(万元)"/>
      <el-table-column prop="pass" label="一次性通过审查项目数"/>
    </el-table>-->
    <el-table
      class="tableBox"
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column style="color: #555555;" prop="one" type="index" width="68" label="序号" />
      <el-table-column label="月份" prop="two" style="color: #555555;" />
      <!-- 工程规模 -->
      <el-table-column prop="three" :show-overflow-tooltip="true" width="200">
        <template slot="header">勘察项目数</template>
        <template slot-scope="scope">
          <div @click="dialogApproveFormVisible=true">{{ scope.row.three }}</div>
        </template>
      </el-table-column>
      <!--  -->
      <el-table-column prop="four" :show-overflow-tooltip="true" width="200" style>
        <template slot="header">合同金额(万元)</template>
        <template slot-scope="scope">
          <div>{{ scope.row.four }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="five" :show-overflow-tooltip="true" width="200" style>
        <template slot="header">一次性通过审查项目数</template>
        <template slot-scope="scope">
          <div
            class="pointblue"
            style="cursor: pointer;"
            @click="dialogApproveFormVisible=true"
          >{{ scope.row.five }}</div>
        </template>
      </el-table-column>
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
          <template slot="header">工程名称</template>
          <template slot-scope="scope">
            <div style="text-align:left;font-weight:600;padding:0 10px">
              {{ scope.row.td1 }}
              <br />
            </div>
            <div style="text-align:left;padding:0 10px;color:555">{{ scope.row.td2 }}</div>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" width="100">
          <template slot="header">合同金额</template>
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
            <el-button style="font-size:16px" type="text" @click="view(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogApproveFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./manage.js">

</script>

<style lang="scss" scoped>
.selectLeft {
  width: 30%;
  float: left;
}

.el-table .warning-row {
  background: none;
}
.pointblue:hover {
  color: lightblue;
}
</style>
