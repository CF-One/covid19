<template>
    <div>
        <a-table :columns="columns" :data-source="ProvinceData" childrenColumnName="cityArray" rowKey="Id" />
    </div>
</template>

<script>
    const columns = [
        {
            title: '地区',
            dataIndex: 'childStatistic',
            key: 'childStatistic',
        },
        {
            title: '累计确诊',
            dataIndex: 'totalConfirmed',
            key: 'totalConfirmed',
        },
        {
            title: '死亡',
            dataIndex: 'totalDeath',
            key: 'totalDeath',
        },
        {
            title: '新增确诊',
            dataIndex: 'totalIncrease',
            key: 'totalIncrease'
        },
        {
            title: '治愈',
            dataIndex: 'totalCured',
            key: 'totalCured'
        },
        {
            title: '疑似病例',
            dataIndex: 'totalDoubtful',
            key: 'totalDoubtful'
        }
    ];
    export default {
        name: "CountryDetail",
        data(){
            return {
                columns: columns,
                ProvinceData: [],
            }
        },
        created(){
            axios.get("http://127.0.0.1:1024/getCovid19Data").then(respones => {
                if (respones != null && respones.data.success == true){
                    this.ProvinceData = respones.data.data.provinceArray;
                }
                else {
                    this.$message.error('数据加载失败,请重试');
                }
            })
        }
    }
</script>

<style scoped>

    div{
        width: 95%;
        height: 700px;
        margin: 0 auto;
    }

</style>