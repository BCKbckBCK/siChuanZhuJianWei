<template>
  <div class="process-container">
    <div>
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <el-input v-model="filterForm.key" placeholder="请输入关键字搜索项目" size="small" />
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:10px" @click="search" type="primary">搜索</el-button>
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
          <div>工程名称</div>
          <!-- <span>基本情况</span> -->
        </template>
        <template slot-scope="scope">
          <div
            style="text-align:left;font-weight:600;padding:0 10px;font-size:16px"
          >{{ scope.row.td1 }}</div>
          <div style="text-align:left;padding:0 10px;color:#555555">{{ scope.row.td2 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">
          上报日期
          <br />受理日期
        </template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.td4 }}
            <br />
          </div>
          <div>{{ scope.row.td5 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="状态" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-tag
            v-if="scope.row.td6===1"
            type="success"
            style="width:90%;height:46px;font-size:16px;"
            disable-transitions
          >已接受委派</el-tag>
          <el-tag
            v-if="scope.row.td6===2"
            type="primary"
            style="width:90%;height:46px;font-size:16px;"
            disable-transitions
          >未接受委派</el-tag>
          <el-tag
            v-if="scope.row.td6===3"
            type="primary"
            style="width:90%;height:46px;font-size:16px;"
            disable-transitions
          >已补正</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" v-if="scope.row.td6!=3" @click="check(scope.row)">查看</el-button>
          <el-button type="text" v-if="scope.row.td6===2" @click="accept(scope.row)">受理</el-button>
          <el-button type="text" v-if="scope.row.td6===3" @click="view(scope.row)">编辑</el-button>
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
<script src="./workingProj.js"></script>

<style lang="scss" scoped>
@import "../../styles/index.scss";

.a {
  color: deepskyblue;
}
.a:hover {
  color: blue;
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

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

