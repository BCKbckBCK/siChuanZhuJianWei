<template>
  <div class="userEdit-container">
    <div>
      <el-form
        ref="filterForm"
        :model="filterForm"
        class="form-inline"
        label-width="180px"
        :rules="rules"
      >
        <el-form-item
          label="用户名"
          prop="username"
          required
        >
          <el-input
            v-model="filterForm.username"
            placeholder="请输入用户名"
            style="width: 150px"
            size="small"
            maxlength="11"
            show-word-limit
          /> 请输入手机号码
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="filterForm.password"
            placeholder="请输入密码"
            style="width: 150px"
            size="small"
            maxlength="16"
            type="password"
            show-word-limit
          /> 请输入6-15位数字或字母{{ filterForm.dnUserId&&filterForm.dnUserId!==''?'，不填写表示不修改密码':'' }}
        </el-form-item>
        <el-form-item
          label="真实姓名"
          prop="realName"
          required
        >
          <el-input
            v-model="filterForm.realName"
            placeholder="请输入真实姓名"
            style="width: 200px"
            size="small"
            maxlength="50"
            show-word-limit
          />
        </el-form-item>
        <el-form-item
          label="公司名称"
          prop="company"
          required
        >
          <el-input
            v-model="filterForm.company"
            placeholder="请输入公司名称"
            style="width: 300px"
            size="small"
            maxlength="100"
            show-word-limit
          />
        </el-form-item>
        <el-form-item
          label="联系电话"
          prop="mobile"
        >
          <el-input
            v-model="filterForm.mobile"
            placeholder="请输入联系电话"
            style="width: 200px"
            size="small"
            maxlength="100"
            show-word-limit
          />
        </el-form-item>
        <el-form-item
          label="权限"
          prop="roleId"
          required
        >
          <el-select
            v-model="filterForm.roleId"
            placeholder="请选择"
            style="width: 100px"
            size="small"
          >
            <el-option
              v-for="item in role"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-divider v-if="filterForm.roleId!=='admin'">可管理调查表</el-divider>
        <div v-if="filterForm.roleId!=='admin'" style="text-align: center; min-height:100%;">
          <el-transfer
            v-model="feedbackIds"
            style="text-align: left; display: inline-block; min-height:100%;"
            filterable
            :titles="['未选择', '已选择']"
            :button-texts="['删除', '添加']"
            :format="{
              noChecked: '${total}',
              hasChecked: '${checked}/${total}'
            }"
            :props="{
              key: 'feedbackId',
              label: 'showTitle'
            }"
            :data="feedbackAllList"
          />
        </div>
        <div style="text-align:center;margin-top:20px">
          <el-button
            type="primary"
            size="small"
            @click="save"
          >保存</el-button>
          <el-button size="small" @click="back">返回</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script src="./userEdit.js"></script>
<style lang="scss">
    .el-transfer-panel {
        width:400px;
        height:500px;
    }
    .el-transfer-panel__body .el-transfer-panel__list{
        height:500px;
    }
</style>
<style lang="scss" scoped>
.userEdit {
  &-container {
    margin: 30px;
    .box-card{
      margin-left:180px;
      margin-top:20px;
      margin-bottom:20px;
      width:700px;
    }
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
