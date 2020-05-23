import { taskAssign } from "../../api/taskAssign.js";

export default {
  name: 'Handle',
  data() {
    return {
      targetEcode:null,
      examinantRadio: 1,
      reviewRadio: 2,
      status: '111',
      examinantList: [
        { id: 1, name: "总工老张", disabled: false, },
        { id: 2, name: "何浩境", disabled: false, },
        { id: 3, name: "李二凯", disabled: false, },
        { id: 4, name: "江审一", disabled: false, },
        { id: 5, name: "李二凯", disabled: false, },
        { id: 6, name: "江审二", disabled: false, },

      ],
      reviewList: [
        { id: 1, name: "总工老张", disabled: false, },
        { id: 2, name: "何浩境", disabled: false, },
        { id: 3, name: "李二凯", disabled: false, },
        { id: 4, name: "江审一", disabled: false, },
        { id: 5, name: "李二凯", disabled: false, },
        { id: 6, name: "江审二", disabled: false, },
      ]
    }
  },
  methods: {
    saveTaskPerson() {
      this.$confirm('确认指派工程?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {}
        data.checker = this.examinantRadio
        data.reviewer = this.reviewRadio
        data.ecode = this.targetEcode
        taskAssign(data).then(res => {
          console.log(res);
          this.$router.push({ path: 'examineprocess', query: { id: this.$route.query.id } })
        }).catch(error => {
          console.log("error" + error);
        })
      });
    },
    fanHui() {
      this.$router.push({ path: 'examineprocess' })
    },
    fanHui1() {
      this.$router.push({ path: 'dispassProcess' })
    },
    quXiao() {
      this.$router.push({ path: 'examineprocess', query: { id: this.$route.query.id } })
    },
    examinantRadioFn(val) {
      for(let i =0;i<this.reviewList.length;i++){
        this.reviewList[i].disabled = false
      }
      this.reviewList[val-1].disabled = true
    },
    reviewRadioFn(val){
      // debugger
      console.log(this.examinantList[0]);
      for(let i =0;i<this.examinantList.length;i++){
        this.examinantList[i].disabled = false
      }
      this.examinantList[val-1].disabled = true
    }
  },
  mounted(){
   this.targetEcode = this.$route.query.ecode
  }
}

