<template>
  <div class="commentsMain">
    <el-form ref="form" class="el-form" style="line-height:75px;font-size:16px" :model="form" label-width="80px">
      <el-form-item label="意见类型">
        <el-select v-model="form.region" disabled>
          <el-option label="意见类型1" value="1" />
          <el-option label="意见类型2" value="2" />
        </el-select>
      </el-form-item><br>
      <el-form-item label="时间">
        <input class="explorationInputStyle" v-model="form.timer" disabled />
      </el-form-item><br>
      <el-form-item label="页码">
        <input class="explorationInputStyle" v-model="form.pageNum" disabled />
      </el-form-item><br>
      <el-form-item label="审查意见">
        <el-input v-model="form.desc" type="textarea" :rows="4" disabled />
      </el-form-item><br>
      <el-form-item label="回复说明">
        <el-input v-model="form.date2" type="textarea" :rows="4" />
      </el-form-item><br>
      <el-form-item>
          <span style="text-align:right;width:100%;">
        <el-button size="small" style="margin-bottom:10px;background-color:#0086C2;width:100px;color:white" @click="queRen()">
          确定
         
        </el-button>
      </span>
           <span style="text-align:right;width:100%;">
        <el-button size="small" style="margin-bottom:10px;margin-left:50px;background-color:white;width:100px" @click="quXiao()">
          取消
        
        </el-button>
      </span>
      </el-form-item><br>
    </el-form>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      form: {
        pageNum: '23',
        region: '意见类型1',
        timer: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '申请人相信，经过修改，已经完全克服了第一次审查意见通知书中关于新颖性、创造性及不清楚的问题，并克服了形式缺陷，符合专利法、实施细则以及审查指南的相关规定，请审查员在修改文本的基础上授权本发明的专利权'
      }
    };
  },
  mounted () {
    this.form.timer = new Date()
  },
  
  methods: {
    onSubmit () {
      console.log('submit!');
    },
    queRen(){

 
this.$router.push({ path: 'ideaSlips' })





    },
    quXiao(){
this.$router.push({ path: 'ideaSlips' })
    }

  }
};
</script>
<style lang="scss">
@import"../../styles/common2.scss";
</style>
