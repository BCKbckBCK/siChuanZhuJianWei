<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">工程基本信息</span>
      <el-form
        ref="contractInfo"
        :model="contractInfo"
        label-width="175px"
        class="marginBottom"
        style="margin-top:20px;font-size: 16px"
      >
        <el-form-item style="font-size: 16px" label="项目统一代码：">
          <span style="font-size: 16px">2017-510681-41-03-1655130-010</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="工程编号：">
          <span style="font-size: 16px">2017-510681-41-03-1655130-010 中型</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="工程类型：">
          <span style="font-size: 16px">房屋建筑工程</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="审查类别：">
          <span style="font-size: 16px">房屋建筑工程</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="工程名称：">
          <span style="font-size: 16px">五金配件技术改造项目-1期</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="工程地址：">
          <span style="font-size: 16px">四川</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="项目所在地：">
          <span style="font-size: 16px">德阳市-广汉市</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="工程规划许可证编号：">
          <span style="font-size: 16px">12311</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="用地规划许可证编号：">
          <span style="font-size: 16px">123123</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="建设单位：">
          <span style="font-size: 16px">四川</span>
        </el-form-item>
        <el-form-item style="font-size: 16px" label="建设性质：">
          <span style="font-size: 16px">房屋建筑工程</span>
        </el-form-item>
        <el-form-item label="建设使用性质：">
          <span style="font-size: 16px">五金配件技术改造项目</span>
        </el-form-item>
        <el-form-item label="合同金额：">
          <span style="font-size: 16px">10000</span>
        </el-form-item>
        <el-form-item label="是否存在高边坡或深基坑：">
          <el-select v-model="contractInfo.yesNo" placeholder>
            <el-option label="是" value="yes" />
            <el-option label="否" value="no" />
          </el-select>
        </el-form-item>
        <el-form-item label="合同内容和范围：">
          <el-input v-model="contractInfo.range" type="textarea" />
        </el-form-item>
        <el-form-item label="合同承诺和要求：">
          <el-input v-model="contractInfo.range" type="textarea" />
        </el-form-item>
      </el-form>
      <span style="text-align:right;width:100%;display:block">
        <el-button type="primary" size="small" @click="goBack">
          保存
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
        <el-button size="small" @click="goBack">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>
  </div>
</template>
<script src="./edit.js"></script>
<style lang="scss" scoped>
@import "../../styles/common1.scss";
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
      .marginBottom .el-form-item {
        margin-bottom: 10px !important;
      }
      .marginBottom .el-select {
        width: 220px;
      }
    }
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
