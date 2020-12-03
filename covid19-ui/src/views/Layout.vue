<template>
    <div>
        <a-layout>
            <a-affix>
                <a-layout-header :style="{ padding: '0' }">
                    <a-menu
                            theme="dark"
                            mode="horizontal"
                            :default-selected-keys="['1']"
                            :style="{ lineHeight: '64px', float: 'left'}"
                    >

                        <a-menu-item key="1">
                            <router-link to="/home"><a-icon type="appstore" />综合信息</router-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link to="/epidemic"><a-icon type="appstore" />全国疫情图</router-link>
                        </a-menu-item>
                        <a-menu-item key="3">
                            <router-link to="/detail"><a-icon type="appstore" />国内疫情详细信息</router-link>
                        </a-menu-item>
                        <a-menu-item key="4">
                            <router-link to="/countryHeat"><a-icon type="appstore" />全国疫情热力图</router-link>
                        </a-menu-item>
                        <a-menu-item key="5">
                            <router-link to="/dim"><a-icon type="appstore" />全国疫情热力图3D</router-link>
                        </a-menu-item>
                        <a-menu-item key="6">
                            <router-link to="/world"><a-icon type="appstore" />全球疫情图</router-link>
                        </a-menu-item>
                        <a-menu-item key="7">
                            <router-link to="/worldHeat"><a-icon type="appstore" />全球疫情热力图</router-link>
                        </a-menu-item>
                        <a-menu-item key="8">
                            <router-link to="/cq"><a-icon type="appstore" />重庆市疫情</router-link>
                        </a-menu-item>
                    </a-menu>
                </a-layout-header>
            </a-affix>

            <a-layout-content style="height: 100%">

                <div id="components-back-top-demo-custom">
                    <a-back-top>
                        <div class="ant-back-top-inner">
                            UP
                        </div>
                    </a-back-top>
                </div>
                <router-view/>

            </a-layout-content>

        </a-layout>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #components-back-top-demo-custom .ant-back-top {
        bottom: 100px;
    }
    #components-back-top-demo-custom .ant-back-top-inner {
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 4px;
        background-color: #1088e9;
        color: #fff;
        text-align: center;
        font-size: 20px;
    }
</style>