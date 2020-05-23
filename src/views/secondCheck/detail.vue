<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">工程基本信息</span>
      <ul>
        <li>
          <label class="li-left">项目统一代码</label>
          <span class="li-right">2017-510681-41-03-1655130-010</span>
        </li>
        <li>
          <label class="li-left">工程编号</label>
          <span class="li-right">2017-510681-41-03-1655130-010 中型</span>
        </li>
        <li>
          <label class="li-left">工程类别</label>
          <span class="li-right">房屋建筑工程</span>
        </li>
        <li>
          <label class="li-left">审查类别</label>
          <span class="li-right">房屋建筑工程</span>
        </li>
        <li>
          <label class="li-left">工程名称</label>
          <span class="li-right">五金配件技术改造项目-1期</span>
        </li>
        <li>
          <label class="li-left">工程地址</label>
          <span class="li-right">四川</span>
        </li>
        <li>
          <label class="li-left">项目所在地</label>
          <span class="li-right">德阳市-广汉市</span>
        </li>
        <li>
          <label class="li-left">工程规划许可证编号</label>
          <span class="li-right">12311</span>
        </li>
        <li>
          <label class="li-left">用地规划许可证编号</label>
          <span class="li-right">123123</span>
        </li>
        <li>
          <label class="li-left">建设单位</label>
          <span class="li-right" />
        </li>
        <li>
          <label class="li-left">建设性质</label>
          <span class="li-right" />
        </li>
        <li>
          <label class="li-left">建设使用性质</label>
          <span class="li-right" />
        </li>
        <li>
          <label class="li-left">合同金额</label>
          <span class="li-right" />
        </li>
        <li>
          <label class="li-left">是否存在高边坡或深基坑</label>
          <span class="li-right">是</span>
        </li>
        <li>
          <label class="li-left">合同内容和要求</label>
          <span class="li-right" />
        </li>
        <li>
          <label class="li-left">合同承诺好要求</label>
          <span class="li-right" />
        </li>
      </ul>
      <span style="text-align:right;width:100%;display:block">
        <el-button size="small" class="workRecordSave" @click="goBack">
          保存
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>
  </div>
</template>
<script src="./detail.js"></script>
<style lang="scss" scoped>
@import "../../styles/common2.scss";
.workRecordSave {
  background-color: #3e97df;
  color: #ffffff;
}
.workRecordSave:hover {
  background-color: #3784c2;
  color: #ffffff;
}
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
