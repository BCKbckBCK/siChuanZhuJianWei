<template>
  <div>
    <span>请选择市</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>
    <span style="padding-left:40px">区</span>
    <el-select v-model="disabledValue" placeholder="请选择">
      <el-option
        v-for="item in districtList.items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>
    <div class="buttonRight">
      <el-button style="margin-left:10px" @click="checkCityWork" type="primary">查询</el-button>
      <el-button style="margin-left:30px" @click="emptyValue" type="primary">重置</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "5120",
          label: "资阳市",
          items: [
            { value: "512001", label: "资阳市辖区" },
            { value: "512002", label: "雁江区" },
            { value: "512022", label: "乐至县" },
            { value: "512021", label: "安岳县" },
            { value: "512081", label: "简阳市" }
          ]
        },
        {
          value: "5110",
          label: "内江市",
          items: [
            { value: "511025", label: "资中县" },
            { value: "511024", label: "威远县" },
            { value: "511011", label: "东兴区" },
            { value: "511028", label: "隆昌县" },
            { value: "511001", label: "内江市辖区" },
            { value: "511002", label: "市中区" }
          ]
        },
        {
          value: "5132",
          label: "阿坝州",
          items: [
            { value: "513201", label: "阿坝市辖区" },
            { value: "513222", label: "理 县" },
            { value: "513221", label: "汶川县" },
            { value: "513226", label: "金川县" },
            { value: "513225", label: "九寨沟县" },
            { value: "513224", label: "松潘县" },
            { value: "513223", label: "茂 县" },
            { value: "513233", label: "红原县" },
            { value: "513232", label: "若尔盖县" },
            { value: "513231", label: "阿坝县" },
            { value: "513230", label: "壤塘县" },
            { value: "513229", label: "马尔康县" },
            { value: "513228", label: "黑水县" },
            { value: "513227", label: "小金县" }
          ]
        },
        {
          value: "5111",
          label: "乐山市",
          items: [
            ,
            { value: "511132", label: "峨边彝族" },
            { value: "511133", label: "马边彝族" },
            { value: "511129", label: "沐川县" },
            { value: "511126", label: "夹江县" },
            { value: "511181", label: "峨眉山市" },
            { value: "511102", label: "市中区" },
            { value: "511100", label: "乐山市" },
            { value: "511101", label: "乐山市辖区" },
            { value: "511124", label: "井研县" },
            { value: "511123", label: "犍为县" },
            { value: "511113", label: "金口河区" },
            { value: "511111", label: "沙湾区" },
            { value: "511112", label: "五通桥区" }
          ]
        },
        {
          value: "5101",
          label: "成都市",
          items: [
            { value: "510184", label: "崇州市" },
            { value: "510183", label: "邛崃市" },
            { value: "510182", label: "彭州市" },
            { value: "510181", label: "都江堰市" },
            { value: "510113", label: "青白江区" },
            { value: "510112", label: "龙泉驿区" },
            { value: "510104", label: "锦江区" },
            { value: "510106", label: "金牛区" },
            { value: "510105", label: "青羊区" },
            { value: "510108", label: "成华区" },
            { value: "510107", label: "武侯区" },
            { value: "510109", label: "高新区" },
            { value: "510101", label: "成都市辖区" },
            { value: "510131", label: "蒲江县" },
            { value: "510132", label: "新津县" },
            { value: "510129", label: "大邑县" },
            { value: "510122", label: "双流县" },
            { value: "510121", label: "金堂县" },
            { value: "510124", label: "郫县" },
            { value: "510115", label: "温江区" },
            { value: "510114", label: "新都区" }
          ]
        },
        {
          value: "5133",
          label: "甘孜州",
          items: [
            { value: "513321", label: "康定县" },
            { value: "513325", label: "雅江县" },
            { value: "513324", label: "九龙县" },
            { value: "513323", label: "丹巴县" },
            { value: "513322", label: "泸定县" },
            { value: "513338", label: "得荣县" },
            { value: "513337", label: "稻城县" },
            { value: "513332", label: "石渠县" },
            { value: "513331", label: "白玉县" },
            { value: "513330", label: "德格县" },
            { value: "513336", label: "乡城县" },
            { value: "513335", label: "巴塘县" },
            { value: "513334", label: "理塘县" },
            { value: "513333", label: "色达县" },
            { value: "513329", label: "新龙县" },
            { value: "513328", label: "甘孜县" },
            { value: "513327", label: "炉霍县" },
            { value: "513326", label: "道孚县" },
            { value: "513301", label: "甘孜市辖区" }
          ]
        },
        {
          value: "5134",
          label: "凉山州",
          items: [
            { value: "513437", label: "雷波县" },
            { value: "513436", label: "美姑县" },
            { value: "513431", label: "昭觉县" },
            { value: "513430", label: "金阳县" },
            { value: "513435", label: "甘洛县" },
            { value: "513434", label: "越西县" },
            { value: "513433", label: "冕宁县" },
            { value: "513432", label: "喜德县" },
            { value: "513428", label: "普格县" },
            { value: "513427", label: "宁南县" },
            { value: "513426", label: "会东县" },
            { value: "513425", label: "会理县" },
            { value: "513429", label: "布拖县" },
            { value: "513401", label: "西昌市" },
            { value: "513400", label: "凉山市辖区" },
            { value: "513424", label: "德昌县" },
            { value: "513423", label: "盐源县" },
            { value: "513422", label: "木里县" }
          ]
        }
      ],
      value: "5120",
      districtList: {
        value: "5120",
        label: "资阳市",
        items: [
          { value: "512001", label: "资阳市辖区" },
          { value: "512002", label: "雁江区" },
          { value: "512022", label: "乐至县" },
          { value: "512021", label: "安岳县" },
          { value: "512081", label: "简阳市" }
        ]
      },
      disabledValue: "512001",
      value:"5120",
    };
  },
  methods: {
    checkCityWork() {},
    emptyValue(){
        this.value = "";
        this.disabledValue = ""
    }
  },
  watch: {
    value(val, oldval) {
      for (let i = 0; i <= this.options.length; i++) {
        if (this.options[i].value == val) {
          this.districtList = this.options[i];
          console.log(this.districtList);
        }
      }
    }
  }
};
</script>

<style lang="scss" scope>
.buttonRight {
  float: right;
  padding-right: 60px;
}
.data-picker {
  display: block;
  margin-bottom: 10px;
  width: auto;
  padding: 0 1%;
  height: 40px;
  text-align: center;
  text-align-last: center;
  option {
    text-align: center;
  }
}
</style>