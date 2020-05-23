<template>
  <el-table
    v-loading="listLoading"
    :data="list"
    border
    element-loading-text="Loading"
    highlight-current-row
    style="margin-top:20px;line-height:48px"
  >
    <el-table-column type="index"  width="100" label="序号"/>
    <el-table-column :show-overflow-tooltip="true" width="400">
      <template slot="header">
        意见类型
        <br>基本情况
      </template>
      <template slot-scope="scope">{{ scope.row.td1 }}</template>
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true" width="400">
      <template slot="header">
        上报日期
        <br>反馈日期
      </template>
      <template slot-scope="scope">{{ scope.row.td2 }}</template>
    </el-table-column>
    <el-table-column label="进度状态" :show-overflow-tooltip="true" width="100">
      <template slot-scope="scope">
        <el-tag v-if="scope.row.td6===1" type="success" style="width:90%" disable-transitions>审查通过</el-tag>
        <el-tag v-if="scope.row.td6===2" type="success" style="width:90%" disable-transitions>审查通过</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click="goCheck">合格书签章</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'QualifiedBook',
  data () {
    return {
      list: [
        {
          td1: '五金配件技术改造项目-1期',
          td2: '2017-510681-41-03-1655130-010 中型',
          td3: '0',
          td4: '2020-04-15',
          td5: '2020-04-15',
          td6: 1
        },
        {
          td1: '五金配件技术改造项目',
          td2: '2017-510681-41-03-1655130-006 中型',
          td3: '0',
          td4: '2020-04-15',
          td5: '2020-04-15',
          td6: 2
        }
      ]
    };
  },
  methods: {
    goCheck () {
      this.$router.push({ path: 'qualified' })
    }
  }
};
</script>

<style>
</style>
