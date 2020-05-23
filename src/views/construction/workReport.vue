<template>
  <div class="process-container" style="margin:20px 0">
    <div>
      <span class="title">工程勘察报告</span>
    </div>
    <el-table
      v-loading="listLoading"
      :data="fileReportList"
      border
      element-loading-text="Loading"
      highlight-current-row
      style="margin-top:20px;line-height:48px"
    >
      <el-table-column type="index" width="50" label="序号" :index="indexMethod" />
      <el-table-column :show-overflow-tooltip="true">
        <template slot="header">文件名</template>
        <template slot-scope="scope">
          <div style="text-align:left;font-weight:600;padding:0 10px">{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" width="200">
        <template slot="header">更新时间</template>
        <template slot-scope="scope">
          <div>{{ scope.row.updateTime }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" :show-overflow-tooltip="true" width="200">
        <template slot-scope="scope">
          <el-button type="text" @click="desk(scope.row)">查看</el-button>
          <!-- <el-button type="text" @click="uploadAddBtn(scope.row)">添加</el-button>
          <el-button type="text" @click="deleteConfirm(scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <div class="left">
        共 {{ total }} 条记录， 当前为 {{ displayLength * (page - 1) + 1 }} -
        {{
        Math.min(
        displayLength * (page - 1) + displayLength,
        displayLength * (page - 1) + fileReportList.length
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
    <span style="text-align:right;width:100%;display:block;margin-top:10px">
      <el-button style="margin:0" size="small" @click="goBack">
        返回
        <i class="el-icon-arrow-right el-icon--right" />
      </el-button>
    </span>
    <el-dialog title="添加文件" :visible.sync="dialogView">
      <span>选择你要添加的文件</span>
      <!--
        <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePictureCardPreview"
        :before-upload="imgType"
        list-type="picture-card"
      >
      </el-upload>
      -->
      <div class="uploadDiv">
        <i class="el-icon-plus" />
        <input class="uploadInput" type="file" ref="inputs" @change="imgType" />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogView = false">取 消</el-button>
        <el-button type="primary" @click="uploadPdf">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看文件" :visible.sync="pdfImgView" :fullscreen="fullscreenSize">
      <div style="width:100%;height:100%">
      <iframe :src="url" type="application/x-google-chrome-pdf" width="100%" frameborder="0" height="800px"></iframe>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="pdfImgView = !pdfImgView">取 消</el-button>
        <el-button type="primary" @click="pdfImgView = !pdfImgView">确 定</el-button>
        <!-- <a ref="downLoadA">下载</a> -->
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "../../store";
import {
  uploadFileReport,
  download,
  getWorkingDetail,
  downloadFile
} from "../../api/workingProj";

// import {
//     getUserList, deleteUser
// } from '../../api/user'
export default {
  name: "Process",
  data() {
    return {
      fullscreenSize:true,
      url:null,
      targetEcode: null,
      pdfImgView: false,
      pdfImageUrl: require("../../assets/timg.png"),
      dialogView: false,
      Decimal: window.Decimal,
      pageArr: [1],
      page: 1,
      maxPage: 1,
      displayLength: 10,
      total: 0,
      fileReportList: [
        {
          td0: "项目负责人",
          td1: "五金配件",
          td2: "2017-510681-41-03-1655130-010 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: 1
        },
        {
          td0: "项目负责人",
          td1: "五金配件",
          td2: "2017-510681-41-03-1655130-006 中型",
          td3: "0",
          td4: "2020-04-15",
          td5: "2020-04-15",
          td6: 2
        }
      ],
      listLoading: false,
      filterForm: {},
      fileBase64: null,
      fileReportName: "工程报告",
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
      approveList: [
        {
          td1: 1,
          td2: "787901178",
          td3: "成都圣图建设工程咨询有限公司",
          td4: "顾女士  18000000000",
          td5: 0
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["name"]),
    ecode() {
      if (this.$store.state.app.ecode) {
        return this.$store.state.app.ecode;
      } else {
        return sessionStorage.getItem("userEcode");
      }
    }
  },
  mounted() {
    this.fetchData();
    // this.fileReportList = this.$store.state.app.fileReportList;
    console.log("this.fileReportList", this.fileReportList);
  },
  methods: {
    imgType(e) {
      let file = e.srcElement.files[0];
      console.log("file", file);
      console.log("file.type", file.type);

      const isIMAGE = file.type === "application/pdf"; // 文件格式限制
      const isLt1M = file.size / 1024 / 1024 < 20; // 文件大小限制
      if (!isIMAGE) {
        this.$message.error("上传图片只能是Pdf格式文件！");
      } else if (!isLt1M) {
        this.$message.error("上传图片大小不能超过20M！");
      } else {
        this.getBase64(file).then(resBase64 => {
          this.fileBase64 = resBase64.split(",")[1];
          console.log(this.fileBase64);
        });
      }
      return isIMAGE;
    },
    uploadAddBtn(item) {
      this.targetEcode = item.ecode;
      this.dialogView = !this.dialogView;
    },
    desk(item) {
      this.pdfImgView = true;
      download(
        "/inEngineering/download/?fileId=" + item.id,
        item.name + ".pdf",this.iframeView
      )
    },
    iframeView(pdfUrl){
      this.url = pdfUrl
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
          fileResult = reader.result;
        };
        reader.onerror = function(error) {
          reject(error);
        }; //转 结束  咱就 resolve 出去
        reader.onloadend = function() {
          resolve(fileResult);
        };
      });
    },
    // 文件上传
    uploadPdf() {
      let img_file = this.$refs.inputs;
      let data = {};
      data.eCode = this.targetEcode;
      data.fileName = img_file.files[0];
      data.fileReportName = this.fileReportName;

      uploadFileReport(data)
        .then(result => {
          console.log("====", result);
          this.$message({
            message: "增加成功",
            type: "success"
          });
          this.dialogView = false;
        })
        .catch(error => {
          console.log("error" + error);
        });
      // this.pdfImgView = !this.pdfImgView;
    },
    handlePictureCardPreview() {},
    goBack() {
      this.$router.push({ path: "process" });
    },
    fetchData() {
      getWorkingDetail(this.ecode)
        .then(result => {
          console.log(this.ecode);
          this.fileReportList = result.data.fileReportList;
          store.dispatch("app/toggleEcontract", result.data.econtract);
          store.dispatch("app/toggleReportList", result.data.fileReportList);
          store.dispatch(
            "app/toggleOperationsList",
            result.data.siteOperationsList
          );
          store.dispatch("app/togglePersonnelList", result.data.personnelList);
        })
        .catch(error => {
          console.log("error" + error);
        });
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
    // 文件下载
    downloadImg(item) {
      downloadFile("1d8ed1d753fc4e1dbc34c2dca75b2260");
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
        path: "detail",
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
@import "../../styles/common2.scss";

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
.title {
  border-bottom: 4px solid black;
  display: block;
  font-size: 1.5em;
  line-height: 2em;
  font-weight: bold;
  color: #2c3447;
}
.uploadDiv {
  margin-top: 10px;
  width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
  border: 2px solid #8d8d8d;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 5px rgba(216, 216, 216, 0.616);
  .uploadInput {
    width: 150px;
    height: 150px;
    // background-color: olive;
    position: absolute;
    opacity: 0;
  }
  i {
    margin-left: -10px;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -10px;
  }
}
</style>
