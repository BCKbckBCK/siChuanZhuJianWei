<template>
  <div class="processDetail-container">
    <div class="detail">
      <span class="title">工程合同信息</span>
      <ul>
        <table class="detailTableStyle">
          <tbody>
            <tr trchanges>
              <th>项目统一代码</th>
              <td>
                <i>{{ eContractContent.ecode }}</i>
              </td>
              <th>工程编号</th>
              <td>
                <i>{{ eContractContent.pid }}</i>
              </td>
            </tr>
            <tr>
              <th>工程类型</th>
              <td>
                <i>{{ eContractContent.ptype | getPtypeName }}</i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>工程名称</th>
              <td>
                <i>{{ eContractContent.pname }}</i>
              </td>
              <th>工程地址</th>
              <td>
                <i>{{ eContractContent.projectLocation }}</i>
              </td>
            </tr>
            <tr>
              <th>项目所在地</th>
              <td>
                <i>{{ eContractContent.paddress }}</i>
              </td>
              <th>用地规划许可证编号</th>
              <td>
                <i>{{ eContractContent.lupCode }}</i>
              </td>
            </tr>
            <tr>
              <th>建设单位</th>
              <td>
                <i>{{ eContractContent.constructionUnit }}</i>
              </td>
              <th></th>
              <!-- <th>建设属性</th> -->
              <td>
                <i></i>
                <!-- <i>{{eContractContent.constructionType}}</i> -->
              </td>
            </tr>
            <tr>
              <th>建设使用性质</th>
              <td>
                <i>{{
                  eContractContent.constructionUseType | getConstructionUseType
                }}</i>
              </td>
              <th>合同金额</th>
              <td>
                <i>{{ eContractContent.contractAmount }} 万元</i>
              </td>
            </tr>
            <tr>
              <th>是否存在高边坡或深基坑</th>
              <td>
                <i
                  >{{
                    eContractContent.whetherConcavoConvex
                      | getWhetherConcavoConvex
                  }}
                </i>
              </td>
              <th>工程规划许可证编号</th>
              <td>
                <i>{{ eContractContent.lepCode }}</i>
              </td>
            </tr>
            <tr>
              <th>合同内容和范围</th>
              <td>
                <i>{{ eContractContent.contractContent }}</i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>合同承诺和要求</th>
              <td>
                <i>{{ eContractContent.contractPromise }}</i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
      <!-- <span class="title">建设单位</span>
      <ul>
        <table class="detailTableStyle">
          <tbody>
            <tr trchanges>
              <th style="width: 7em">类型</th>
              <td>
                <i>企业</i>
              </td>
            </tr>
            <tr>
              <th style="width: 8em;">建设单位</th>
              <td>
                <i>广汉市锐华机械有限公司</i>
              </td>
              <th style="width: 8em;">统一社会信用代码</th>
              <td>
                <i>12345678901234567890</i>
              </td>
            </tr>
            <tr>
              <th>经办人及电话</th>
              <td>
                <i>123</i>&nbsp;
                <label>12312312312312</label>
              </td>
              <th>联络QQ</th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>项目负责人及电话</th>
              <td>
                <i>123</i>&nbsp;
                <label>12312312312312</label>
              </td>
              <th>项目负责人身份证</th>
              <td>
                <i>12312312312312</i>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
      <span class="title">勘察单位</span>
      <ul>
        <table class="detailTableStyle">
          <tbody>
            <tr trchanges>
              <th style="width: 7em">勘察单位</th>
              <td>
                <i>四川交科工程勘察有限公司</i>
              </td>
              <th style="width: 7em">统一社会信用代码</th>
              <td>
                <i>12312312312312</i>
              </td>
            </tr>
            <tr>
              <th style="width: 8em;">经办人及电话</th>
              <td>
                <i></i>
              </td>
              <th style="width: 8em;">联络QQ</th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>单位负责人</th>
              <td>
                <i></i>
              </td>
              <th>资质等级及证书编号</th>
              <td>
                <i>甲级</i>&nbsp;
                <label>12312312312312</label>
              </td>
            </tr>
            <tr>
              <th>项目负责人</th>
              <td>
                <i>123</i>&nbsp;
                <label>12312312312312</label>
              </td>
              <th>项目负责人电话</th>
              <td>
                <i>12312312312312</i>
              </td>
            </tr>
            <tr>
              <th>项目负责人身份证</th>
              <td>
                <i>12312312312312</i>
              </td>
              <th>项目负责人专业</th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>
                项目负责人
                <br />执业注册证类型
              </th>
              <td>
                <i>无</i>
              </td>
              <th>
                项目负责人
                <br />执业注册证编号
              </th>
              <td>
                <i>无</i>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
      <span class="title">劳务单位</span>
      <ul>
        <table class="detailTableStyle">
          <tbody>
            <tr trchanges>
              <th style="width: 7em">劳务单位</th>
              <td>
                <i>四川交科工程勘察有限公司</i>
              </td>
              <th style="width: 7em">统一社会信用代码</th>
              <td>
                <i>12312312312312</i>
              </td>
            </tr>
            <tr>
              <th style="width: 8em;">经办人及电话</th>
              <td>
                <i></i>
              </td>
              <th style="width: 8em;">联络QQ</th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>单位负责人</th>
              <td>
                <i></i>
              </td>
              <th>资质等级及证书编号</th>
              <td>
                <i>甲级</i>&nbsp;
                <label>12312312312312</label>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>

      <span class="title">审图机构</span>
      <ul>
        <table class="detailTableStyle">
          <tbody>
            <tr trchanges>
              <th>单位名称</th>
              <td>
                <i>成都圣图建设工程咨询有限公司</i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th style="width: 8em;">统一社会信用代码</th>
              <td>
                <i>12312312312312</i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>经办人</th>
              <td>
                <i></i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>审图金额</th>
              <td>
                <i>2.0万元</i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>审查人</th>
              <td>
                <i></i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>复查人</th>
              <td>
                <i></i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>审查合格书编号</th>
              <td>
                <i></i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
            <tr>
              <th>审查合格书合格时间</th>
              <td>
                <i></i>
              </td>
              <th></th>
              <td>
                <i></i>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>-->
      <span style="text-align:right;width:100%;display:block">
        <!-- <el-button class="explorationDetailSave" @click="Store()">
          保存
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button> -->
        <el-button size="small" @click="goBack">
          返回
          <i class="el-icon-arrow-right el-icon--right" />
        </el-button>
      </span>
    </div>
  </div>
</template>
<script src="./detail.js"></script>
<style lang="scss" scoped>
@import "../../styles/index.scss";

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
.explorationDetailSave {
  background-color: #3e97df;
  color: #ffffff;
}
.explorationDetailSave:hover {
  background-color: #3784c2;
  color: #ffffff;
}
</style>
