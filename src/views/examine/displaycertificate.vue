<!--  -->
<template>
<div>
  <div class="div">
      <div><img src="./img/1.png"></div>
  </div>
  <div class='div2'>
 <span style="text-align:right;width:100%;">
        <el-button size="small" style="margin-bottom:10px;  margin-left: 180px;" @click="fanHui()()">
         返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
         
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
      fanHui () {
        this.$router.push({ path: 'compeleteProcess' })
      }
  }
}

</script>

<style  scoped>
.button{
  background-color: #00B8F2;
  width: 200px;
  font-size: 20px;
}
 .div2{
    margin-left: 500px;
    margin-top: 20px;
    margin-bottom: 30px;
 }
.div{
    width: 100%;
    align-content: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

</style>
