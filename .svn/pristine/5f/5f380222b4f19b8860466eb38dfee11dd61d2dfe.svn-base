<template>
  <div class="process-container">
    <div>
      <el-form :inline="true" :model="filterForm" class="form-inline" label-width="100px">
        <el-form-item>
          <span>项目名称：</span>
          {{ projectName }}
          <br />
          <span>工程编号：</span>
          {{ projectNumber }}
          <br />
        </el-form-item>
        <el-form-item />
      </el-form>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="意见回复" name="first">
        <el-table
          v-loading="listLoading"
          :data="list"
          border
          element-loading-text="Loading"
          highlight-current-row
          style="margin-top:20px;line-height:48px"
        >
          <el-table-column type="index" width="50" label="序号" :index="indexMethod" />
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">意见类型</template>
            <template slot-scope="scope" />
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">页码</template>
          </el-table-column>
          <el-table-column label="审查人员" :show-overflow-tooltip="true" width="100">
            <template slot-scope="scope" />
          </el-table-column>
          <el-table-column label="审核人员" width="100">
            <template slot-scope="scope" />
          </el-table-column>
          <el-table-column label="审查意见">
            <template slot-scope="scope" />
          </el-table-column>
          <el-table-column label="意见回复" width="100">
            <template slot-scope="scope" />
          </el-table-column>
          <el-table-column label="回复状态" width="150">
            <template slot-scope="scope">
              <el-tag
                v-if="scope.row.td6===1"
                type="success"
                style="width:90%"
                disable-transitions
              >未回复</el-tag>
              <el-tag
                v-if="scope.row.td6===2"
                type="warning"
                style="width:90%"
                disable-transitions
              >已回复</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button type="text" @click="dialogView = !dialogView">详情</el-button>
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
            <el-button
              icon="el-icon-arrow-left"
              size="mini"
              :disabled="page === 1"
              @click="prevPage"
            />
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
      </el-tab-pane>
      <el-tab-pane label="报告更新" name="second">
        <div style="float:right;padding-bottom:10px">
          <el-button style="margin-left:10px" @click="addPdfView = !addPdfView" type="primary">上传报告</el-button>
          <el-button style="margin-left:10px" type="primary">报告送审</el-button>
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
            <template slot="header">勘察报告</template>
            <template slot-scope="scope">
              <div style="text-align:left;font-weight:600;padding:0 10px">
                {{ scope.row.td1 }}
                <br />
              </div>
              <div style="text-align:left;padding:0 10px">{{ scope.row.td2 }}</div>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" width="200">
            <template slot="header">报告版次</template>
            <template slot-scope="scope">
              <div>
                {{ scope.row.td4 }}
                <br />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="更新状态" :show-overflow-tooltip="true" width="100">
            <template slot-scope="scope">
              <el-tag v-if="!scope.row.td6" type="success" style="width:90%" disable-transitions>已更新</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="更新时间" width="100" />
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                type="text"
                v-if="!scope.row.td6"
                @click="view(scope.row.td1,scope.row.td2)"
              >查看</el-button>
              <el-button
                type="text"
                v-if="!scope.row.td6"
                @click="view(scope.row.td1,scope.row.td2)"
              >删除</el-button>
            </template>
          </el-table-column>s
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="详情" :visible.sync="dialogView">
      <el-form
        ref="form"
        label-position="left"
        class="el-form"
        style="line-height:65px"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="意见类型">
          <el-select v-model="form.region" disabled>
            <el-option label="意见类型1" value="1" />
            <el-option label="意见类型2" value="2" />
          </el-select>
        </el-form-item>
        <br />
        <el-form-item label="时间">
          <input class="explorationInputStyle" v-model="form.timer" disabled />
        </el-form-item>
        <br />
        <el-form-item label="页码">
          <input class="explorationInputStyle" v-model="form.pageNum" disabled />
        </el-form-item>
        <br />
        <el-form-item label="审查意见">
          <textarea
            class="explorationTextarea"
            v-model="form.desc"
            type="textarea"
            :rows="4"
            disabled
          />
        </el-form-item>
        <br />
        <el-form-item label="回复说明">
          <textarea class="explorationTextarea" v-model="form.date2" type="textarea" :rows="4" />
        </el-form-item>
        <br />
        <div style="text-align:center;width:100%">
          <el-button  type="primary" @click="dialogView=!dialogView">保存</el-button>
          <el-button  type="primary" @click="dialogView=!dialogView">取消</el-button>
        </div>
        <br />
      </el-form>
    </el-dialog>
    <el-dialog title="添加文件" :visible.sync="addPdfView">
      <span>选择你要添加的文件</span>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addPdfView = false">取 消</el-button>
        <el-button type="primary" @click="addPdfView = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看文件" :visible.sync="pdfImgView" width="80%">
      <div>
        <img :src="pdfImageUrl" type style=" width:100%" />
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="pdfImgView=!pdfImgView">取 消</el-button>
        <el-button type="primary" @click="pdfImgView=!pdfImgView">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
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
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Investigate",
  data() {
    return {
      pdfImageUrl:"",
      pdfImgView:false,
      addPdfView:false,
      dialogView: false,
      activeName: "first",
      projectName: "1",
      projectNumber: "",
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      list: [
        {
          td1: "五金配件",
          td2: "2017-510681-41-03-1655130-010 中型",
          td3: "0",
          td4: "002",
          td5: "2020-04-15",
          td6: false
        },
        {
          td1: "五金配件",
          td2: "2017-510681-41-03-1655130-006 中型",
          td3: "0",
          td4: "001",
          td5: "2020-04-15",
          td6: false
        }
      ],
      listLoading: false,
      filterForm: {},
      wxScope: window.Scope,
      role: window.ROLE,
      dialogFormVisible: false,
      form: {
        option3: "1",
        option6: "1",
        option7: "1",
        option10: []
      },
      dialogApproveFormVisible: false,
      form: {
        pageNum: "23",
        region: "意见类型1",
        timer: "2020-04-15",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc:
          "申请人相信，经过修改，已经完全克服了第一次审查意见通知书中关于新颖性、创造性及不清楚的问题，并克服了形式缺陷，符合专利法、实施细则以及审查指南的相关规定，请审查员在修改文本的基础上授权本发明的专利权"
      }
    };
  },
  computed: {
    ...mapGetters(["name"])
  },
  components: {},
  mounted() {
    this.projectName = this.$route.query.id;
    this.projectNumber = this.$route.query.number;
    this.fetchData();
  },
  methods: {
    handlePictureCardPreview(){},
    // pdfImgView(){},
    pdfImageUrl() {},
    handleRemove() {},
    handleClick() {},
    fetchData() {
      // const that = this
      // that.listLoading = true
      // getUserList({
      //     pageIndex: that.page,
      //     pageSize: that.displayLength,
      //     ...that.filterForm
      // }).then(res => {
      //     that.list = res.data
      //     that.total = res.total
      //     that.maxPage = Math.ceil(that.total / that.displayLength)
      //     that.pageArr = window.fp.range(1)(that.maxPage + 1)
      //     that.listLoading = false
      // })
    },
    indexMethod(index) {
      return (this.page - 1) * this.displayLength + index + 1;
    },
    handleSizeChange(val) {
      this.displayLength = val;
      this.page = 1;
      this.fetchData();
    },
    pageCurrentChange(val) {
      this.page = val;
      this.fetchData();
    },
    prevPage() {
      this.page -= 1;
      this.fetchData();
    },
    nextPage() {
      this.page += 1;
      this.fetchData();
    },
    clean() {
      this.filterForm = {};
      this.fetchData();
    },
    add() {
      this.$router.push({ path: "userEdit" });
    },
    edit(item) {
      this.$router.push({ path: "userEdit", query: { id: item.dnUserId } });
    },
    view(item) {
      this.$router.push({
        path: "ExplorationDetail",
        query: { id: item.dnUserId }
      });
    },
    deleteConfirm(item) {
      this.$confirm("删除此工程 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // deleteUser(item.dnUserId).then(res => {
        //     this.$message({
        //       message: '删除成功',
        //       type: 'success'
        //     });
        //     this.fetchData()
        // })
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.processDetail {
  &-container {
    margin: 20px 0;
    .detail {
      margin: 40px 0;
      .title {
        border-bottom: 2px solid #2c3447;
        display: block;
        font-size: 1.5em;
        line-height: 2em;
        font-weight: bold;
        color: #2c3447;
      }
      ul {
        list-style-type: none;
        padding: 20px 10px;
        margin: 0px;
        .li-left {
          font-size: 1em;
          line-height: 4em;
          font-weight: bold;
          color: #2c3447;
          width: 200px;
          display: inline-block;
        }
        .li-right {
          font-size: 1em;
          line-height: 4em;
          font-weight: bold;
          color: #999999;
        }
      }
    }
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
