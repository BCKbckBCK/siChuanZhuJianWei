<template>
  <div class="AuditPlan-container">
    <div class="detail">
      <span class="title">办理流程</span>
      <div style="height: 340px;margin: 25px 0;">
        <el-steps direction="vertical" :active="1">
          <el-step
            title="建设单位-申请"
            description="登录四川政务服务网，在线填报申请资料，提交给勘察设计单位完善信息及上传图纸。如无项目统一代码则需先进入【四川省投资项目在线审批监管平台】获取项目统一代码"
          />
          <el-step
            title="勘察设计单位-填报资料"
            description="勘察设计单位通过省统一身份认证账号登陆系统，填写完善相关信息，并上传图纸资料"
          />
          <el-step
            title="建设单位-确认申办"
            description="各勘察设计单位完成填写工作后，由建设单位确认工程申办"
          />
          <el-step
            title="审图机构-审查"
            description="审图机构根据申请材料情况决定是否受理；材料不全或不符合法定形式的，审图机构应一次性告知建设单位需补正的全部内容"
          />
          <el-step
            title="建设单位-获取结果"
            description="登陆系统获取审查结果"
          />
        </el-steps>
      </div>
      <span class="title">项目统一代码验证</span>
      <div style="margin: 25px 0 0 0;">
        <i class="el-icon-info" />
        <span
          >如无发改委项目统一代码，请进入【<a
            href="http://tzxm.sczwfw.gov.cn"
            target="_blank"
            >四川省投资项目在线审批监管平台</a
          >】申请</span
        >
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline margintop"
        >
          <el-form-item>
            <span class="formTitle">组织机构代码</span>
            <input
              v-model="formInline.code"
              style="padding:4px 0;width:16em;height:40px;margin-left:10px;"
              placeholder="请输入发改委项目统一代码"
              readonly="true"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">获取工程列表</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-if="ISshow" class="marginBottom">
        <ul>
          <li>
            <label class="li-left vest">项目名称：</label>
            <span class="li-right vest">{{ proName }}</span>
            <label class="li-left vest">总投资：</label>
            <span class="li-right vest">{{ proAmount }}（万元）</span>
          </li>
        </ul>
        <span class="formTitle">本项目代码我申办的审图业务工程列表</span>
        <el-table
          v-loading="listLoading"
          :data="list"
          border
          element-loading-text="Loading"
          highlight-current-row
          style="margin-top:20px;line-height:48px;text-align:center"
          @current-change="handleCurrentChange"
        >
          <el-table-column width="60">
            <template slot="header"
              >选择</template
            >
            <template slot-scope="scope">
              <el-radio v-model="projectCode" :label="scope.row.projectCode"
                >{{ "" }}
              </el-radio>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true">
            <template slot="header"
              >项目状态</template
            >
            <template slot-scope="scope">
              <span class="rowClass">{{
                scope.row.projectStatus | getProjectStateName
              }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" width="400">
            <template slot="header"
              >工程编号</template
            >
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.projectCode }}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true">
            <template slot="header"
              >工程名称</template
            >
            <template slot-scope="scope">
              <span class="rowClass">{{ scope.row.projectName }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="primary"
          style="margin-top:30px;"
          plain
          disabled
          v-if="!!projectCode == false"
        >
          申办新业务
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
        <el-button
          type="primary"
          style="margin-top:30px;"
          @click="dialogApprove"
          v-if="!!projectCode == true"
        >
          申办新业务
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </div>
      <span style="text-align:right;width:100%;display:block">
        <el-button
          size="small"
          style="margin-bottom:10px;backgroun:"
          @click="goBack"
        >
          返回 <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>
    <el-dialog
      title="选择勘察单位"
      :visible.sync="dialogApproveFormVisible"
      width="80%"
    >
      <el-form
        v-if="contractCheck == false"
        :inline="true"
        :model="formInline"
        class="demo-form-inline margintop"
      >
        <!-- <el-form-item label="名称或代码">
          <el-input v-model="formInline.code" placeholder="请输入名称或代码" />
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary">清空所选机构</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="approveList"
        border
        ref="multab"
        element-loading-text="Loading"
        highlight-current-row
        style="margin-top:20px;line-height:48px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          label="机构代码"
          :show-overflow-tooltip="true"
          width="350"
        >
          <template slot-scope="scope">
            <span class="rowClass">{{ scope.row.deptCode }}</span>
          </template>
        </el-table-column>
        <el-table-column label="机构名称" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span class="rowClass">{{ scope.row.deptName }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column
          label="联系方式"
          :show-overflow-tooltip="true"
          width="200"
        >
          <template slot-scope="scope">
            <span class="rowClass"
              >{{ scope.row.deptPersonName }}
              {{ scope.row.deptPersonPhone }}</span
            >
          </template>
        </el-table-column>
        -->
        <el-table-column
          label="金额（万元）"
          :show-overflow-tooltip="true"
          width="150"
        >
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.contractAmount"
              size="mini"
              style="width:80px;"
              type="number"
              :readonly="contractCheck"
            />万元
          </template>
        </el-table-column>
      </el-table>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogApproveFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./auditPlan.js"></script>
<style lang="scss" scoped>
@import "../../styles/common1.scss";
@import "../../styles/index.scss";
.margintop {
  padding-top: 30px;
}
.formTitle {
  color: #0d1c28;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.6em;
}
ul {
  list-style-type: none;
  padding: 20px 0px;
  margin: 0px;
  .li-left {
    font-size: 1em;
    line-height: 3em;
    font-weight: bold;
    color: #0d1c28;
    // display: inline-block;
  }
  .li-right {
    font-size: 1em;
    color: #555555;
  }
}
.rowClass {
  line-height: 40px;
}
.vest {
  display: none;
}
</style>
