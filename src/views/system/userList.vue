<template>
  <div class="userList-container">
    <div>
      <el-form
        :inline="true"
        :model="filterForm"
        class="form-inline"
        label-width="100px"
      >
        <el-form-item>
          <el-button
            type="primary"
            size="small"
            @click="add"
          >添加</el-button>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input
            v-model="filterForm.key"
            placeholder="请输入内容"
            style="width: 200px"
            size="small"
          />
        </el-form-item>
        <el-form-item label=" ">
          <el-button
            type="primary"
            size="small"
            @click="fetchData"
          >查询</el-button>
          <el-button size="small" @click="clean">清理</el-button>
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
      <el-table-column label="用户名" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="真实姓名" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <span>{{ scope.row.realName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="公司" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <span>{{ scope.row.company }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile }}</span>
        </template>
      </el-table-column>
      <el-table-column label="权限" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <template v-for="item in role">
            <span
              v-if="scope.row.roleId === item.value"
              :key="item.value"
            >{{ item.text }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" class="operate-button" icon="el-icon-edit" circle @click="edit(scope.row)" />
          <el-button type="danger" class="operate-button" icon="el-icon-delete" circle @click="deleteConfirm(scope.row)" />
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
<script src="./userList.js"></script>
<style lang="scss" scoped>
.userList {
  &-container {
    margin: 30px;
    .operate-button{
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
