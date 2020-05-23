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
        <template slot="header">报告名</template>
        <template slot-scope="scope">
          <div style="text-align:left;font-size:16px;font-weight:bold;padding:0 10px">
            {{ scope.row.td1 }}
            <br>
          </div>
        </template>
      </el-table-column>
      <el-table-column type="index" width="100px" label="版次" :index="indexMethod" />

      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">时间</template>
        <template slot-scope="scope">
          <div>
            {{ scope.row.td4 }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="审查意见" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <template v-if="scope.row.td6===1" type="success" style="width:90%" disable-transitions>无</template>

          <template v-if="scope.row.td6===3" type="success" style="width:90%" disable-transitions>有</template>
        </template>
      </el-table-column>
      <el-table-column label="复查意见" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <template v-if="scope.row.td6===1" type="success" style="width:90%" disable-transitions>无</template>

          <template v-if="scope.row.td6===3" type="success" style="width:90%" disable-transitions>无</template>
        </template>
      </el-table-column>
      <el-table-column label="状态" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <template v-if="scope.row.td6===1" type="success" style="width:90%" disable-transitions>审查完成</template>
          <template v-if="scope.row.td6===3" type="success" style="width:90%" disable-transitions>正在审查</template>

          </template>
      </el-table-column>
      <el-table-column label="审查结果" :show-overflow-tooltip="true" width="100">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.td6===1" type="success" style="width:90%;color:#484D77;background-color: #8CDDFE;" disable-transitions>通过</el-tag>

          <el-tag v-if="scope.row.td6===3" type="success" style="width:90%;color:#484D77;background-color: #8CDDFE;" disable-transitions>通过</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
         <el-button v-if="scope.row.td6===1" type="text" @click="view(scope.row)"> 查看</el-button>
          <el-button v-if="scope.row.td6===1" type="text" @click="displayCertificate1()" >合格证书</el-button>
           <el-button v-if="scope.row.td6===3" type="text" @click="view(scope.row)"> 查看</el-button>
          <el-button v-if="scope.row.td6===3" type="text" @click="displayCertificate1()">合格证书</el-button>
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
<script src="./compeleteProcess.js"></script>

<style lang="scss"  scoped>
.input121212{
  padding:4px;
  width: 16em;
  height: 30px;
}
.a{
  color:deepskyblue;
  margin-left: 10px;
}
.a:hover{
  color:blue;
}

.process {
  &-container {
    margin: 20px 0;
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

<style lang="scss" scoped>
@import "../../styles/element-ui.scss"
</style>