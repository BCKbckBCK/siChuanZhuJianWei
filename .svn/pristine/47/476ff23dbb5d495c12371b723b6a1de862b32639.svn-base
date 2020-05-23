<!--  -->
<template>
  <div class="AuditPlan-container">
    <div
      class="processDetail"
      style="position: fixed;left: 0;top: 0;background: #545454;width: 100%;height: 100%;z-index: 1;"
    >
      <div class="left">
        <div style="width:100%;height:40px;background:#4C4E52">
          <el-button type="text">意见列表</el-button>
          <el-button type="text" @click="finish">终审完成</el-button>
        </div>
        <span style="margin-bottom:15px">意见列表</span>
        <el-button type="primary" style="float:right" size="small" @click="add">新增意见</el-button>
        <div style="width:100%;float: left;">
          <div
            v-for="(item,index) in newData"
            :key="index"
            :label="item"
            style="float: left;width: 100%;"
          >
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#4C4E52"
              text-color="white"
            >
              <el-submenu index="1">
                <template slot="title">
                  <span class="checkBoxSpan">{{ item.index }}</span>
                </template>
                <el-menu-item-group style="padding:0">
                  <el-menu-item index="1-1">
                    {{ item.content }}
                    <div style="float:right">
                      <el-checkbox name="type"></el-checkbox>
                    </div>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
            <!-- <span>{{ item.msgContent }}</span> -->
          </div>
        </div>
      </div>
      <div class="right">
        <div style="width:100%;float:left;margin: 10px;">
          <i class="el-icon-thumb" />
          <i class="el-icon-circle-plus-outline" />
          <i class="el-icon-remove-outline" />
          <i class="el-icon-circle-plus-outline" />
          <span style="border: 1px solid rgb(0, 0, 0);border-radius: 5px;padding: 0 5px;">1:1</span>
          <i class="el-icon-refresh-left" />
        </div>
        <img :src="cad" style />
      </div>
    </div>
    <el-dialog title="新增意见" :visible.sync="dialogView" width="400px">
      <el-form ref="formInline" :model="formInline" label-width="100px" class="marginBottom">
        <el-form-item label="意见类型" style="margin-bottom: 10px">
          <el-select v-model="formInline.value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="时间" style="margin-bottom: 10px">
          <el-input v-model="timer" disabled />
        </el-form-item>
        <el-form-item label="页码" style="margin-bottom: 10px">
          <el-select v-model="formInline.page" placeholder="请选择">
            <el-option
              v-for="item in page"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>/32
        </el-form-item>
        <el-form-item label="审查意见" style="margin-bottom: 10px">
          <el-input v-model="advise" type="textarea" placeholder="审查意见" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sure">确定</el-button>
          <el-button @click="dialogView=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog :visible.sync="dialogtip" width="500px">
      <el-form ref="form" class="el-form" style="line-height:75px" :model="form" label-width="80px">
        <div style="text-align:center;width:100%;float:left">
          <span style="text-align:center;width:100%;float:left;line-height:40px">你确定终审完成？</span>
          <span
            style="text-align:center;width:100%;float:left;line-height:40px"
          >确定后，图纸将通过最终审核阶段，终审意见不可再修改！</span>
        </div>
        <div style="text-align:center;">
          <span style="text-align:right;width:100%;">
            <el-button
              type="primary"
              style="margin-bottom:10px"
              @click="dialogtipShow()"
            >确定</el-button>
          </span>
          <span style="text-align:right;width:100%;">
            <el-button
              type="primary"
              style="margin-bottom:10px;"
              @click="dialogtip = !dialogtip"
            >取消</el-button>
          </span>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialogView: false,
      dialogtip: false,
      cad: require("../../assets/timg.png"),
      options: [
        {
          value: "1",
          label: "强制性条文问题"
        },
        {
          value: "2",
          label: "规范、标准及安全性问题"
        },
        {
          value: "3",
          label: "一般性审查意见"
        }
      ],
      page: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      formInline: {
        value: "",
        value1: "",
        page: ""
      },
      newData: [],
      listNumber: 1,
      advise: "",
      timer: ""
    };
  },
  mounted() {
    this.NewDate();
  },
  computed: {
    ...mapGetters(["name"])
  },
  methods: {
    NewDate: function() {
      let DateNow = new Date();
      let year = DateNow.getFullYear();
      let month = DateNow.getMonth() + 1;
      let day = DateNow.getDate();
      let hour = DateNow.getHours();
      this.timer = year + "年" + month + "月" + day + "日" + hour + "时";
    },
    dialogtipShow() {
      this.dialogtip = !this.dialogtip;
      let item = JSON.parse(sessionStorage.getItem("massage"));
      item[0].progress = 4;
      sessionStorage.setItem("massage", JSON.stringify(item));
      this.$route.query.id = 1;
      this.$router.push({ path: "explorationReport" });
    },
    add() {
      this.dialogView = true;
    },
    sure() {
      let advise = {};
      advise.index = "00" + this.listNumber++;
      advise.content = this.advise;
      this.newData.push(advise);
      console.log(this.newData);
      this.dialogView = false;
    },
    handleSizeChange(val) {
      this.displayLength = val;
      this.page = 1;
    },
    pageCurrentChange(val) {
      this.page = val;
    },
    prevPage() {
      this.page -= 1;
    },
    nextPage() {
      this.page += 1;
    },
    finish() {
      this.dialogtip = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  padding: 0;
}
.checkBoxSpan {
  vertical-align: middle;
}
.AuditPlan {
  &-container {
    margin: 20px 0;
    .left {
      width: 20%;
      float: left;
      padding: 10px;
      box-sizing: border-box;
      background: #616469;
      height: 100%;
    }
    .left span {
      // line-height: 32px;
      float: left;
      color: #fff;
      font-size: 15px;
    }
    .right {
      width: 80%;
      float: left;
    }
    .right img {
      width: 80%;
    }
    .marginBottom .el-select {
      width: 100%;
    }
    .marginBottom .el-date-editor {
      width: 100%;
    }
    .marginBottom .el-form-item:nth-child(3) .el-select {
      width: 100px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
