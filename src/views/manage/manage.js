import dropDownBox from "../Exploration/dropDownBox.vue";
export default {
    name: 'Manage',
    components: {
        dropDownBox
    },
    data() {
        return {
            value: '2020',
            listLoading: true,
            indexMethod: "",
            confirm: "",
            dialogApproveFormVisible: false,
            options: [{
                    value: "1998",
                    label: "1998"
                },
                {
                    value: "1999",
                    label: "1999"
                },
                {
                    value: "2000",
                    label: "2000"
                },
                {
                    value: "2001",
                    label: "2001"
                },
                {
                    value: "2002",
                    label: "2002"
                }
            ],
            programList: [{
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
            }],
            list: [{
                    one: '1',
                    two: '1',
                    three: '3',
                    four: '2',
                    five: '3'
                },
                {
                    one: '1',
                    two: '2',
                    three: '3',
                    four: '2',
                    five: '3'
                },
                {
                    one: '合计',
                    two: '3',
                    three: '3',
                    four: '2',
                    five: '3'
                }
            ],
            selected: '成都市',
            country: '成华区',
            citys: [{
                    name: '成都市',
                    area: [{
                            country: '成华区'
                        },
                        {
                            country: '武侯区'
                        },
                        {
                            country: '青羊区'
                        },
                        {
                            country: '锦江区'
                        },
                        {
                            country: '金牛区'
                        },
                        {
                            country: '龙泉驿区'
                        },
                        {
                            country: '金牛区'
                        },
                        {
                            country: '金牛区'
                        },
                        {
                            country: '金牛区'
                        },
                        {
                            country: '金牛区'
                        },
                        {
                            country: '金牛区'
                        },
                        {
                            country: '金牛区'
                        }
                    ]
                },
                {
                    name: '绵阳市',
                    area: [
                        '成华区',
                        '武侯区',
                        '青羊区',
                        '锦江区',
                        '金牛区',
                        '龙泉驿区',
                        '青白江区',
                        '新都区',
                        '温江区',
                        '双流县',
                        '郫县',
                        '大邑县',
                        '金堂县',
                        '蒲江县',
                        '新津县'
                    ]
                },
                {
                    name: '德阳市'
                },
                {
                    name: '攀枝花市'
                },
                {
                    name: '遂宁市'
                },
                {
                    name: '南充市'
                },
                {
                    name: '广元市'
                },

                {
                    name: '乐山市'
                },
                {
                    name: '宜宾市'
                },
                {
                    name: '泸州市'
                },
                {
                    name: '达州市'
                },
                {
                    name: '巴中市'
                },
                {
                    name: '雅安市'
                },
                {
                    name: '内江市'
                },
                {
                    name: '自贡市'
                },
                {
                    name: '广安市'
                },
                {
                    name: '资阳市'
                },
                {
                    name: '眉山市'
                }
            ]
        };
    },
    methods: {
        Statistics() {
            this.$router.push({ path: 'manage' });
        },
        check_rate() {
            this.$router.push({ path: 'check_rate' });
        }
        // together({ row, column, rowIndex, columnIndex }) {
        //   if (rowIndex % 2 === 0) {
        //       if (columnIndex === 0) {
        //         return [1, 2];
        //       } else if (columnIndex === 1) {
        //         return [0, 0];
        //       }
        //     }
        // }
    }
};