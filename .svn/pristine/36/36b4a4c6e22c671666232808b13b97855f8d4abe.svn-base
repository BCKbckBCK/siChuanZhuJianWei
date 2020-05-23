<template>
  <div class="processDetail-container">
    <div>
      <el-form
        :inline="true"
        :model="filterForm"
        class="form-inline"
        label-width="100px"
      >

        <el-form-item>
          <input style=" padding: 4px;
 width:16em;height:35px"
            v-model="filterForm.key"
            placeholder="输入关键字搜索项目"
            
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
      <el-table-column
        type="index"
        width="50"
        label="序号"
        :index="indexMethod"
      />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">
          项目名称<br>基本情况
        </template>
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;padding:0 10px">{{ scope.row.td1 }}<br></div>
          <div style="text-align:left;padding:0 10px">{{ scope.row.td2 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="工程规模" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.td3 }}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">
          上报日期<br>受理日期
        </template>
        <template slot-scope="scope">
          <div>{{ scope.row.td4 }}<br></div>
          <div>{{ scope.row.td5 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="进度状态" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.td6===2" type="success" style="width:90%" disable-transitions>完成审图</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button v-if="scope.row.td6===2" type="text" @click="view(scope.row)">查看</el-button>
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
        <el-select
          :value="displayLength"
          size="small"
          @change="handleSizeChange"
        >
          <el-option
            v-for="item in [10, 20, 50]"
            :key="item"
            :label="item"
            :value="item"
            size="small"
          />
        </el-select>
        <span>条/页</span>
        <el-button
          icon="el-icon-arrow-left"
          size="mini"
          :disabled="page === 1"
          @click="prevPage"
        />
        <el-select :value="page" size="small" @change="pageCurrentChange">
          <el-option
            v-for="item in pageArr"
            :key="item"
            :label="item"
            :value="item"
          />
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
<script src="./examined.js"></script>
<style lang="scss" scoped>
@import "../../styles/common1.scss"
</style>
