<template>
  <div class="process-container">
    <div>
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="10px">
        <el-form-item>
          <input
            v-model="filterForm.key"
            placeholder="输入关键字搜索项目"
            class="explorationInputStyle"
            style="width:16em"
            size="small"
          />
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
      <el-table-column type="index" width="50" label="序号" />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">
          工程名称
          <!-- <br />基本情况 -->
        </template>
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;">
            {{ scope.row.td1 }}
            <br />
          </div>
          <div style="text-align:left;">{{ scope.row.td2 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="合同金额" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.td3 }}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">
          上报日期
          <br />反馈日期
        </template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.td4 }}
            <br />
          </div>
          <!-- <div>{{ scope.row.td5 }}</div> -->
        </template>
      </el-table-column>
      <el-table-column label="进度状态" :show-overflow-tooltip="true" width="150">
        <template style="font-size:20px" slot-scope="scope">
          <el-tag type="warning">退回补正</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <a
            v-if="scope.row.td6===1"
            style="font-size:16px"
            class="a"
            @click="appoint(scope.row)"
          >查看</a>
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
        <el-select :value="displayLength" size="small">
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
  </div>
</template>
<script src="./dispassProcess.js"></script>

<style lang="scss" scoped>
@import "../../styles/index.scss";
.a {
  color: deepskyblue;
}

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
}
</style>
<style lang="scss" scoped>
@import "../../styles/element-ui.scss";
</style>
<style lang="scss" scoped>
@import "../../styles/element-ui.scss";
</style>