<template>
<div class="layout">
    <Layout>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-nav">
                    <MenuItem v-for="item in menus" :key="item.name" :name="item.name">
                        <Icon type="ios-navigate"></Icon>
                        <router-link :to="item.path">{{item.label}}</router-link>
                    </MenuItem>
                </div>
                <div class="logOut" v-show="hasLogin" @click="logOut">Logout</div>
            </Menu>
        </Header>
        <Content :style="{padding: '0 50px'}">
            <Card>
                <div style="min-height: 200px;">
                    <router-view></router-view>
                </div>
            </Card>
        </Content>
        <Footer class="layout-footer-center">2019-2020 &copy; Chime - Rendebug</Footer>
    </Layout>
</div>
</template>
<script>
import { hasCookies, clearCookies, getCookie } from '@utils'
export default {
    data () {
        return {
            menus: [
                {name: 'home', label: '主页', path: '/home'},
                {name: 'project', label: '项目设置', path: '/project'},
                {name: 'login', label: '注册/登录', path: '/login'}
            ],
            hasLogin: false
        }
    },
    watch: {
        '$route': function () {
            this.checkCookie()
        }
    },
    mounted () {
        this.checkCookie()
    },
    methods: {
        logOut () {
            clearCookies()
            this.checkCookie();
            location.href = '/#/login';
        },
        checkCookie () {
            if (hasCookies(['appKey']) && getCookie('appKey') && getCookie('appKey') !== '0') {
                this.menus = [
                    {name: 'home', label: '主页', path: '/home'},
                    {name: 'project', label: '项目设置', path: '/project'},
                ];
                this.hasLogin = true;
                if (['/', '/login'].indexOf(this.$route.path) > -1) location.href = '/#/home';
            } else {
                this.menus = [
                    // {name: 'home', label: '主页', path: '/home'},
                    // {name: 'project', label: '项目设置', path: '/project'},
                    {name: 'login', label: '注册/登录', path: '/login'}
                ];
                this.hasLogin = false;
                location.href = '/#/login';
            }
        }
    }
}
</script>
<style lang="less">
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    border-radius: 4px;
    overflow: auto;
    position: fixed;
    width: 100%;
    height: 100%;
}
// .ivu-layout, .ivu-card-bordered {
//     height: 100%;
//     // overflow: auto;
// }
.ivu-menu {
    display: flex;
    align-items: center;
}
.ivu-layout-content {
    height: calc(100% - 135px);
}
.logOut {
    color: #fff;
    cursor: pointer;
}
.layout-nav{
    margin-left: auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>


