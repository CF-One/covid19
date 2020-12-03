<template>
    <div class="sun-biggest">
        <h1>国内疫情</h1>
        <p class="sun-biggest-p">
            数据更新时间：{{ country.time }}
        </p>
        <a-divider></a-divider>
        <div class="div_card">
            <a-row :gutter="18">
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总确诊人数：<br/>
                            <span class="confirm"> {{ formatNumber(country.totalConfirmed) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总治愈人数：<br/>
                            <span class="cure"> {{ formatNumber(country.totalCured) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总死亡人数：<br/>
                            <span class="death"> {{ formatNumber(country.totalDeath) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总新增病例：<br/>
                            <span class="increase"> {{ formatNumber(country.totalIncrease) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总疑似病例：<br/>
                            <span class="increase"> {{ formatNumber(country.totalDoubtful) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            新增疑似病例：<br/>
                            <span class="increase"> {{ formatNumber(country.incDoubtful) }} </span>
                        </p>
                    </a-card>
                </a-col>
            </a-row>
        </div>
        <h1 style="clear: both;">国内疫情图</h1>
        <a-divider></a-divider>
            <iframe src="http://127.0.0.1:1024/#/Country" scrolling="no" class="countryIframe"></iframe>
        <h1 style="clear: both;">海外疫情图</h1>
        <a-divider></a-divider>
        <div class="div_card">
            <a-row :gutter="18">
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总确诊人数：<br/>
                            <span class="confirm"> {{ formatNumber(world.totalConfirm) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总治愈人数：<br/>
                            <span class="cure"> {{ formatNumber(world.confirmAdd) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总死亡人数：<br/>
                            <span class="death"> {{ formatNumber(world.nowConfirm) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总新增病例：<br/>
                            <span class="increase"> {{ formatNumber(world.dead) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            总疑似病例：<br/>
                            <span class="increase"> {{ formatNumber(world.heal) }} </span>
                        </p>
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card hoverable class="card">
                        <p>
                            新增疑似病例：<br/>
                            <span class="increase"> {{ formatNumber(world.suspect) }} </span>
                        </p>
                    </a-card>
                </a-col>
            </a-row>
        </div>
            <iframe src="http://127.0.0.1:1024/#/worldMap" scrolling="no" class="countryIframe"></iframe>
    </div>
</template>

<script>

    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import axios from 'axios'
    export default {
        name: "Home",
        components: {ACol, ARow},
        data(){
            return {
                country: null,
                world: 'aaaa'
            }
        },
        methods: {
            formatNumber(number){
                let str = number + "";
                let targetStr = "";
                for (var i = 0; i < str.length; i++){
                    var temp = "";
                    if ((str.length - i) % 4 == 0) {
                        temp =  str.slice(i, i + 1) + ",";
                    }
                    else {
                        temp = str.slice(i, i + 1);
                    }
                    targetStr += temp;
                }
                return targetStr;
            }
        },
        created(){

            const _this = this;
            axios.get("http://127.0.0.1:1024/getCovid19Data").then(function (respones) {
                if (respones != null && respones.data.success == true){
                    _this.country = respones.data.data.country;
                }
                else {
                    _this.$message.error('数据加载失败,请重试');
                }
            })
            axios.get("http://127.0.0.1:1024/worldCovid19Data").then(function (respones) {
                if (respones != null && respones.data.success == true){
                    _this.world = respones.data.world;
                    console.log(_this.world)
                }
                else {
                    _this.$message.error('数据加载失败,请重试');
                }
            })

        }
    }
</script>

<style scoped>
    body{
        background: #fff;
    }
    .sun-biggest{
        padding: 0 30px;
    }
    .sun-biggest h1{
        line-height: 80px;
        color: #ff821a;
        float: left;
    }
    .sun-biggest-p{
        float: right;
        line-height: 80px;
    }
    .div_card{
        margin: 70px 0 50px;
    }
    .card p{
        font-size: 18px;
        color: #bcaaa9;
    }
    .card span{
        font-size: 26px;
    }
    .card span.confirm{
        color: #fe7e07;
    }
    .card span.cure{
        color: #3f8516;
    }
    .card span.death{
        color: #d31b29;
    }
    .card span.increase{
        color: #382530;
    }
    .countryIframe{
        width: 80%;
        height: 600px;
        border: 0;
        margin: 20px 10%;

    }
</style>