<template>
  <div class="process-container">
    <el-form :inline="true" class="form-inline" label-width="100px">
      <el-form-item>
        <input class="explorationInputStyle" placeholder="搜索项目统一代码或项目名" size="small" />
      </el-form-item>

      <el-form-item>
        <el-button style="margin-left:10px" @click="search" type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;font-size:16px"
    >
      <el-table-column type="index" width="100" label="序号" />
      <el-table-column :show-overflow-tooltip="true" width="400">
        <template slot="header">
          项目名称
          <br />基本情况
        </template>
        <template slot-scope="scope">{{ scope.row.td1 }}</template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">
          上报日期
          <br />受理日期
        </template>
        <template slot-scope="scope">{{ scope.row.td2 }}</template>
      </el-table-column>
      <el-table-column label="进度状态" :show-overflow-tooltip="true" width="150">
        <template :slot-scope="scope">
          <el-tag type="success" style="width:90%" disable-transitions>完成审查</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "qualifiedBook",
  data() {
    return {
      list: [
        {
          td1: "五金配件技术改造项目-1期",
          td2: "2017-510681-41-03-1655130-010 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: 1
        },
        {
          td1: "五金配件技术改造项目",
          td2: "2017-510681-41-03-1655130-006 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: 2
        }
      ]
    };
  },
  methods: {
    search() {}
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/common2.scss";
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
.el-table .cell > span {
  line-height: 46px;
  height: 46px;
  font-size: 16px;
}
</style>