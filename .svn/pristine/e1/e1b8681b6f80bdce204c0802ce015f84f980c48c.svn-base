<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">工程合同信息</span>
      <ul>
        <li>
          <label class="li-left">项目统一代码</label>
          <span class="li-right">2017-510681-41-03-1655130-010</span>
        </li>
        <li>
          <label class="li-left">工程编码</label>
          <span class="li-right">2017-510681-41-03-1655130-010 中型</span>
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
          <span class="li-right">消防，人防</span>
        </li>
        <li>
          <label class="li-left">建设性质</label>
          <span class="li-right">消防，人防</span>
        </li>
        <li>
          <label class="li-left">建设使用性质</label>
          <span class="li-right">消防，人防</span>
        </li>
        <li>
          <label class="li-left">是否存在高边坡和深基坑</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option label="是" value="true"></el-option>
            <el-option label="否" value="false"></el-option>
          </el-select>
        </li>
        <li>
          <label class="li-left">合同内容和范围</label>
          <span class="li-right">
            <input class="explorationInputStyle" v-model="contractText" style="width:40%" />
          </span>
        </li>
        <li>
          <label class="li-left">合同承诺和要求</label>
          <span class="li-right">
            <input class="explorationInputStyle" v-model="promiseText" style="width:40%" />
          </span>
        </li>
      </ul>
      <span style="text-align:right;width:100%;display:block">
        <el-button size="small" style="margin-bottom:10px" @click="goBack">
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

.processDetail {
  &-container {
    margin: 20px 0;
    .detail {
      margin: 40px 0;
      .title {
        border-bottom: 4px solid black;
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
