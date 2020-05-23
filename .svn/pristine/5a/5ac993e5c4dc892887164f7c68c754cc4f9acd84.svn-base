export default {
    name: 'Manage',
    data() {
        return {

            value: '',
            list: [{
                    one: 1,
                    two: '',
                    three: 2,
                    four: 1,
                    five: 1,
                    six: '50%'
                },
                {
                    one: 1,
                    two: '',
                    three: 3,
                    four: 3,
                    five: 0,
                    six: ''
                }
            ],
            dialogApproveFormVisible: false,
            programList: [],
            programListAll: [{
                td1: '五金配件技术改造项目-1期',
                td2: '2017-510681-41-03-1655130-010 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 1,
                td7: 0
            }, {
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 2,
                td7: 0
            }, {
                td1: '五金配件技术改造项目',
                td2: '2017-510681-41-03-1655130-006 中型',
                td3: '0',
                td4: '2020-04-15',
                td5: '2020-04-15',
                td6: 3,
                td7: 0
            }]
        };
    },
    methods: {
        indexMethod() {

        },
        confirm() {

        },
        Statistics() {
            this.$router.push({ path: 'manage' });
            this.index = 0;
        },
        check_rate() {
            this.$router.push({ path: 'check_rate' });
            this.index = 1;
        },
        showProgram(num) {
            if (num && num > 0) {
                let i = 0
                this.programList = []
                this.programListAll.map(x => {
                    if (i < num) {
                        this.programList.push(x)
                    }
                    i++
                })
                this.dialogApproveFormVisible = true
            }
        }
    }
};