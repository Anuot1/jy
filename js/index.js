$(function () {
    echart_1();
    echart_2();
    echart_3();

    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        var xAxisData = ['1977', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'];
        var legendData = ['高考率'];
        var title = "单位：%";//标题
        var serieData = [];
        var metaDate = [
            [4.79, 8.41, 35.23, 21.55, 36.76, 58.93, 57.47, 69.45, 74.31, 81.05]
        ]
        for (var v = 0; v < legendData.length; v++) {
            var serie = {
                name: legendData[v],
                type: 'line',
                symbol: "circle",
                symbolSize: 10,
                data: metaDate[v]
            };
            serieData.push(serie);
        }
        var colors = ["#036BC8", "#FFF", "#5EBEFC", "#2EF7F3"];
        var option = {
            // backgroundColor: '#0f375f',
            title: {
                text: title,
                textAlign: 'left',
                textStyle: {
                    color: "#fff",
                    fontSize: "12",
                    fontWeight: "bold"
                }
            },
            legend: {
                show: true,
                left: "center",
                data: legendData,  
                itemWidth: 18,
                itemHeight: 12,
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                },
            },
            color: colors,
            grid: {
                left: '2%',
                top: "12%",
                bottom: "5%",
                right: "5%",
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisTick: {
                    show: false
                },
                data: xAxisData,
            }, ],
            yAxis: [{
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            }, ],
            series: serieData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));  
        var giftImageUrl = "data:image/png;base64,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";
        myChart.setOption({
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: giftImageUrl,
                        width: 30,
                        height: 30
                    },
                    left: '73%',
                    top: 'center'
                }]
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '1%',
                right: '60%',
                top: '10%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                position:'top',
                splitLine: {show: false},
                boundaryGap: [0, 0.01],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: ['公办本科','民办本科','专科高校'],
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            series: [{
                name: '',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                type: 'bar',
                data: [817,417,1346]
            },{
                type: 'pie',
                radius: [30, '80%'],
                center: ['75%', '50%'],
                roseType: 'radius',
                color: [ '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'],
                data: [{
                    value: 31.6,
                    name: '公办本科'
                }, {
                    value: 16.2,
                    name: '民办本科'
                }, {
                    value: 52.2,
                    name: '专科高校'
                }],
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 14
                        },
                        formatter: function(param) {
                            return param.name + ':\n' + Math.round(param.percent) + '%';
                        }
                    }
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 30,
                        shadowColor: 'rgba(0, 0, 0, 0.4)'
                    }
                },
       
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function(idx) {
                    return Math.random() * 200;
                }
            }]
        });
    }

    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        var title = "单位：%";//标题

        option = {
            // backgroundColor: "#404A59",
            color: ["#036BC8", "#5EBEFC", "#2EF7F3"],
        

           title: [{
                text: title,
                textAlign: 'left',
                textStyle: {
                    color: "#fff",
                    fontSize: "14",
                    fontWeight: "bold"
                }
            }, {
                text: '',
                left: '83%',
                top: '6%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                show: true,
                left: "center",
                data: ['学前教育', '小学', '初中'],
                y: "5%",
                itemWidth: 18,
                itemHeight: 12,
                textStyle: {
                    color: ["#036BC8", "#5EBEFC", "#2EF7F3"],
                    fontSize: 12
                },
            },
            grid: {
                left: '1%',
                right: '28%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                boundaryGap: false,
                data: ['1950', '1965', '1978', '1990', '2000', '2010', '2012','2015','2016','2017','2018']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                type: 'value'
            },
            series: [{
                name: '学前教育',
                smooth: true,
                type: 'line',
                symbolSize: 9,
                  symbol: 'circle',
                data: [0.4, 4.2, 10.6, 32.6, 46.1, 56.6, 64.5, 75, 77.4, 79.6, 81.7]
            }, {
                name: '小学',
                smooth: true,
                type: 'line',
                symbolSize: 9,
                  symbol: 'circle',
                  data: [20, 84.7, 94, 97.8, 99.1, 99.7, 99.85, 99.88, 99.92, 99.91, 99.95]
            }, {
                name: '初中',
                smooth: true,
                type: 'line',
                symbolSize: 9,
                  symbol: 'circle',
                data: [3.1, 22, 66.4, 66.7, 88.6, 100.1, 102.1, 104, 104, 103.5, 100.9 ]
            }, 
            {
                type: 'pie',
                center: ['83%', '33%'],
                radius: ['1%', '1.5%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
            },
            {
                type: 'pie',
                center: ['83%', '72%'],
                radius: ['30%', '35%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
});