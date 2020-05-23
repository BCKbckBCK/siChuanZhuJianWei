<template>
  <div class="commentsMain">
    <el-form class="el-form" style="line-height:75px" ref="form" :model="form" label-width="80px">
      <div style="text-align:center;">
        <span>你确定复核完成？</span>
        <br />
        <span>确定后，图纸将进入最终审核阶段，复核意见不可再修改！</span>
      </div>
      <div style="text-align:center;">
        <el-button type="warning" plain>确定</el-button>
        <el-button type="warning" plain>取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pageNum: "23",
        region: "意见类型1",
        timer: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc:
          "申请人相信，经过修改，已经完全克服了第一次审查意见通知书中关于新颖性、创造性及不清楚的问题，并克服了形式缺陷，符合专利法、实施细则以及审查指南的相关规定，请审查员在修改文本的基础上授权本发明的专利权"
      }
    };
  },
  mounted() {
    this.form.timer = new Date();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss">
</style>