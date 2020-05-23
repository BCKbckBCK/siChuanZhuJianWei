<template>
  <div class="div">
    <div class="div1">
      <div class="div2">
        <div class="div3">
          <h1>任务指派</h1>
        </div>
        <div class="div5">
          <div class="left">
            <div class="divleft">项目名称</div>
            <div class="divleft">工程类别</div>
            <div class="divleft">审查人</div>
            <div class="divleft">复核人</div>
          </div>
          <div class="right">
            <input class="input" placeholder="请输入项目名称：" />
            <input class="input" placeholder="请输入项目类别：" />
            <el-radio-group v-model="examinantRadio" class="divright" @change="examinantRadioFn">
              <el-radio v-for="item in examinantList" :key="item.id" :label="item.id" :disabled="item.disabled">{{item.name}}</el-radio>
            </el-radio-group>
            <el-radio-group v-model="reviewRadio" class="divright" @change="reviewRadioFn">
              <el-radio v-for="item in reviewList" :key="item.id" :label="item.id" :disabled="item.disabled">{{item.name}}</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="div6">
          <span style="text-align:right;width:100%;">
            <el-button
              size="small"
              style="margin-bottom:10px; background-color:white;width:100px"
              @click="quXiao()"
            >取消</el-button>
          </span>
          <span style="text-align:right;width:100%;">
            <el-button
              size="small"
              style="margin-bottom:10px;color:white;background-color: #0086C2;margin-left:50px;width:100px"
              @click="saveTaskPerson()"
            >确定</el-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./taskappoint.js'></script>
<style lang='css' scoped>
.radio_type1 {
  width: 20px;
  height: 20px;
  appearance: none;
  position: relative;
}

.radio_type1:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid #7d7d7d;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type1:checked:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid #0086c2;
  background: #0086c2;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type1:checked:after {
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

label {
  line-height: 20px;
  display: inline-block;
  margin-left: 5px;
  margin-right: 15px;
  color: #777;
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

  vertical-align: middle;
}
.radio_type:checked:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid #0086c2;
  background: #0086c2;
  display: inline-block;

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

.divright {
  display: flex;

  justify-content: center;
  align-items: center;
  width: 700px;
  height: 75px;
  border-bottom-width: 1px;
  border-bottom-style: ridge;
  border-right-style: ridge;
  border-right-width: 1px;
}
.input {
  margin-left: 20px;
  width: 680px;
  height: 75px;
  border-left-width: 0px;

  border-right-style: ridge;
  border-right-width: 1px;
  border-top-style: ridge;
  border-top-width: 1px;
}
.divleft {
  height: 75px;
  font-size: 25px;
  text-align: center;
  padding-top: 25px;
}
.left {
  width: 200px;
  float: left;
  height: 300px;
  background-color: gainsboro;
}
.right {
  width: 700px;
  float: left;
  height: 300px;
}
.div {
  width: 100%;
  height: 800px;
  display: flex;

  justify-content: center;
  align-items: center;
}
.div1 {
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: lightsteelblue;

  width: 1000px;
  height: 500px;
}
.div2 {
  margin-left: 30px;
  margin-right: 70px;
}
.div3 {
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: #0086c2;
}

.radio {
  float: left;
  left: 20px;
  right: 30px;
}

.div5 {
  width: 900px;
  height: 300px;

  margin-top: 30px;
}
.textarea {
  height: 200px;
  width: 100%;
}
.div6 {
  margin-top: 70px;
}
.button2 {
  width: 150px;
  font-size: 20px;
  margin-left: 50px;
  height: 40px;
  border-style: unset;
  background-color: #0086c2;
  color: whitesmoke;
}
.button1 {
  width: 150px;
  font-size: 20px;
  background-color: #0086c2;
  height: 40px;
  border-style: unset;
  color: whitesmoke;
}
</style>

