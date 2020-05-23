<template>
  <div class="process-container">
    <div>
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <input class="explorationInputStyle" v-model="filterForm.key" placeholder="输入关键字搜索项目" />
        </el-form-item>
      </el-form>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      element-loading-text="Loading"
      highlight-current-row
      he
      style="margin-top:20px;"
    >
      <el-table-column type="index" width="50" label="序号" :index="indexMethod" />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">工程名称</template>
        <template slot-scope="scope">
          <div style="text-align:left;font-size:16px;font-weight:bold;padding:0 10px;width:50px">
            {{ scope.row.td1 }}
            <br />
          </div>
          <div style="font-size:16px;text-align:left;padding:0 10px">{{ scope.row.td2 }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" style="height:20px">
        <template slot="header" style="height:20px">
          上报日期
          <br />受理日期
        </template>
        <template slot-scope="scope" style="font-size:16px;">
          <div>
            {{ scope.row.td4 }}
            <br />
          </div>
          <!-- <div>{{ scope.row.td5 }}</div> -->
        </template>
      </el-table-column>
      <el-table-column label="状态" :show-overflow-tooltip="true" width="150">
        <template slot-scope="scope">
          <el-tag
            v-if="scope.row.td6===1"
            type="success"
            style="width:90%;height:46px;font-size:16px;color:#00428C;background-color: #8CDDFE;"
            disable-transitions
          >已上传</el-tag>
          <el-tag
            v-if="scope.row.td6===2"
            type="success"
            style="width:90%;height:46px;font-size:16px;color:#004D77;background-color:#A6F7BC;"
            disable-transitions
          >已受理</el-tag>
          <el-tag
            v-if="scope.row.td6===3"
            type="success"
            style="width:90%;height:46px;font-size:16px;color:#004D77;background-color:#FFC7C7;"
            disable-transitions
          >待审查</el-tag>
          <el-tag
            v-if="scope.row.td6===4"
            type="success"
            style="width:90%;height:46px;font-size:16px;color:#004D77;background-color:#FFC7C7;"
            disable-transitions
          >审查通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" height="10">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.td6===1"
            style="font-size:16px"
            type="text"
            @click="oprate(scope.row)"
          >受理</el-button>
          <el-button
            v-if="scope.row.td6!=2&&scope.row.td6!=4"
            style="font-size:16px"
            type="text"
            @click="view(scope.row)"
          >查看</el-button>
          <el-button
            v-if="scope.row.td6===2"
            style="font-size:16px"
            type="text"
            @click="appoint(scope.row)"
          >任务指派</el-button>
          <el-button
            v-if="scope.row.td6===4"
            style="font-size:16px"
            type="text"
            @click="qualification(scope.row)"
          >合格证书签发</el-button>
          <el-button
            v-if="scope.row.td6===4"
            style="font-size:16px"
            type="text"
            @click="qualification(scope.row)"
          >签章</el-button>
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
        <el-select :value="displayLength" size="small" @change="handleSizeChange">
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
<script src="./examine.js"></script>


<style lang="scss" scoped>
label {
  line-height: 20px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 15px;
  color: #777;
}
.input212121 {
  padding: 4px;
  width: 16em;
}
.el-table-column {
  height: 20px;
  width: 200px;
}

.radio_type {
  width: 20px;
  height: 20px;
  appearance: none;
  position: relative;
}

.radio_type:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid #7d7d7d;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type:checked:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid blue;
  background: blue;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type:checked:after {
  content: "";
  width: 10px;
  height: 5px;
  border: 2px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  display: block;
  position: absolute;
  top: 6px;
  left: 5px;
  vertical-align: middle;
  transform: rotate(-45deg);
}
.radio_type:checked + label {
  color: #c59c5a;
}
.div {
  width: 100%;
  height: 800px;
  display: flex;

  justify-content: center;
  align-items: center;
}
.div1 {
  width: 1000px;
  height: 500px;
}
.div2 {
  margin-left: 70px;
  margin-right: 70px;
}
.div3 {
  border-bottom-width: 5px;
  border-bottom-style: solid;
}
.div4 {
  margin-top: 50px;
}
.radio {
  float: left;
  left: 20px;
  right: 30px;
}
.div5 {
  clear: both;
  margin-top: 30px;
}
.textarea {
  height: 200px;
  width: 100%;
}
.div6 {
  margin-top: 50px;
}
.button2 {
  width: 150px;
  font-size: 15px;
  margin-left: 50px;
  height: 30px;
  border-style: unset;
}
.button1 {
  width: 150px;
  font-size: 15px;

  height: 30px;
  border-style: unset;
}
.button1:hover {
  background-color: blue;
}
.button2:hover {
  background-color: blue;
}
.process {
  &-container {
    margin: 20px 0;
    .operate-button {
      width: 24px;
      height: 10px;
      padding: 4px;
      margin-left: 8px;
    }
  }

  &-text {
    font-size: 30px;
    line-height: 16px;
  }
}
.explorationInputStyle {
  height: 40px;
  padding: 10px;
  border: 1px solid #bbb;
  box-sizing: border-box;
  font-size: 16px;
  vertical-align: middle;
  width: 16em;
}
</style>
