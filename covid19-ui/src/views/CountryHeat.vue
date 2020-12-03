<template>
    <div id="CountryHeat">
        <iframe src="http://127.0.0.1:1024/#/countryHeatMap"
                class="countryHeat"
                scrolling="no"
                ref="mapFrame">
        </iframe>
        <div class="content">
            <div v-if="flage"></div>
            <div v-else>
                <a-row :gutter="16">
                    <a-col :span="3" v-for="(item,index) in cityArray" :key="index" class="contentDiv">
                        <a-card :title=item.childStatistic :bordered="false" style="color: #242A38;font-weight: bold">
                            <p>确诊：<span style="color: orange">{{item.totalConfirmed}}</span></p>
                            <p>治愈：<span style="color: green ">{{item.totalCured}}</span></p>
                            <p>死亡：<span style="color: red">{{item.totalDeath}}</span></p>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "CountryHeat",
        data() {
            return {
                cityArray: null,
                flage:true
            }
        },
        mounted() {
            const _this = this
            window.addEventListener('message', function (e) {
                if (e.data.type == 'webpackOk'){
                    _this.flage = true
                }else{
                    _this.flage = false
                }
                _this.cityArray = e.data
            })
        }
    }

</script>

<style scoped>

    .countryHeat {
        width: 95%;
        height: 700px;
        border: 0;
        box-shadow: 5px 5px 20px #909090;
    }

    #CountryHeat {
        text-align: center;
        margin-top: 30px;
    }

    .content {
        width: 100%;
        padding-left: 80px;
        padding-right: 80px;
        background-color: #ececec;
    }

    .contentDiv {

        padding: 10px 4px 4px;
    }
</style>