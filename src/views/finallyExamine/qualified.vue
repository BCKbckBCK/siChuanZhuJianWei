<template>
  <div class="mask">
    <div class="book">
      <img class="certifi" :src="certifi" alt="">
    </div>
    <div class="bounce_block">
      <p class="nav">签章</p>
      <img class="ticket" :src="ticket" alt="图章">
      <select id name>
        <option value>印章原章</option>
        <option value>印章</option>
      </select>
      <!-- 饿了吗弹出框 -->
      <el-button class="read" type="text" @click="open">读取印章</el-button>
      <el-button class="write" type="text">签章</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      certifi:require("../../assets/document.png"),
      ticket:require('../../assets/zhang.gif')
    }
  },
  methods: {
    open () {
      this.$prompt('请输入证书密钥');
    }
  }
};
</script>
<style scoped>
.mask {
  width: 100%;
  height: 100%;
  background-color: #706767;
  position: absolute;
  top: 0;
  left: 0;
}
.book {
  width: 330px;
  height: 400px;
  background: #ffff;
  margin:50px 0 50px 50px;
}
.bounce_block {
  width: 200px;
  height: 300px;
  background: #ffff;
  position: absolute;
  right: 20px;
  top: 20px;
}
.ticket {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 55px;
  margin: 5px auto;

}
select {
  margin: 0 auto;
  display: block;
}
.nav {
  height: 30px;
  margin: 0;
  padding-left: 5px;
  font-size: 15px;
  color: white;
  line-height: 30px;
  background: rgb(15, 158, 214);
}
.read {
  display: block;
  color: white;
  background: rgb(9, 123, 168);
  width: 65px;
  height: 30px;
  margin: 10px auto;
  text-align: center;
  line-height: 30px;
  padding: 0;
}
.write {
  display: block;
  color: white;
  background: rgb(9, 123, 168);
  width: 65px;
  height: 30px;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  border-radius: 10%;
  padding: 0;
}
.certifi{
    width: 100%;
    height: 450px;
}
</style>
