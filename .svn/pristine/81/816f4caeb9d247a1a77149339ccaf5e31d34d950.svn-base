<template>
  <div class="div">
    <div class="div1">
      <div class="div2">
        <div class="div3">
          <h1>受理</h1>
        </div>
        <div class="div4">
          <input id="radio1" class="radio_type" type="radio" name="type" checked="checked" />
          <label for="radio1">确认办理</label>
          <input id="radio2" class="radio_type" type="radio" name="type" />
          <label for="radio2">不予办理</label>
          <input id="radio3" class="radio_type" type="radio" name="type" />
          <label for="radio2">补正</label>
        </div>
        <div class="div5">
          <textarea class="textarea" placeholder="请输入您的意见" />
        </div>
        <div class="div6">
          <span style="text-align:right;width:100%;">
            <el-button
              size="small"
              style="margin-bottom:10px;width:100px;"
              @click="fanHui()"
            >取 消</el-button>
          </span>
          <span style="text-align:right;width:100%;">
            <el-button
              type="primary"
              size="small"
              style="margin-bottom:10px;color:white;margin-left:50px;width:100px;background-color:#0086C2;"
              @click="queRen()"
            >确认提交</el-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./handle.js'></script>

<style lang='css' scoped>
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
  border-radius: 50%;
  vertical-align: middle;
}
.radio_type:checked:before {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px solid#0086C2;
  background: #0086c2;
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
  border-bottom-color: #0086c2;
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
  margin-left: 50px;
  height: 40px;
  border-style: unset;
  background-color: #0086c2;
  color: whitesmoke;
  font-size: 20px;
}
.button1 {
  font-size: 20px;
  width: 150px;
  color: whitesmoke;

  height: 40px;
  border-style: unset;
  background-color: #0086c2;
}
</style>
