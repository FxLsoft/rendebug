<template>
    <div class="home">
        <Layout>
            <Header>
                <MyFilter @timeChange="timeChange"></MyFilter>
            </Header>
            <Content>
                <Chart :options="options" id="test"></Chart>
                <DataTable :tableData="tableData" :loading="tableLoading" @open-detail="openDetails" @update-table="getTableData"></DataTable>
            </Content>
        </Layout>
        <!-- <Details :data="currentDetail" v-model="showDetail"></Details> -->
        <router-view></router-view>
    </div>
</template>
<script>
import controller from './controller';
export default controller;

</script>
<style lang="less">
    .home {
        .search-dropdown-menu {
            width: 150px;
        }
        .favorite-filter-icon {
            color: #ccc;
            cursor: pointer;
            &:hover {
                color: red;
            }
        }
        .cursor-pointer {
            cursor: pointer;
        }
    }
    .notice-error {
        color: red;
        margin: 0 5px;
    }
    .notice-link {
        color: #ae81ff;
        cursor: pointer;
        text-decoration: underline;
    }
</style>

    

