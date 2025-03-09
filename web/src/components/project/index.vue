<template>
    <div class="setting">
        <CellGroup>
            <Cell :label="projectName" title="项目名称" />
            <Cell :label="userName" title="用户账号" />
            <Cell :label="appKey" title="用户KEY" />
            <Cell :label="`在项目中简单粗暴插入<script src='//ren-debug.chime.me/rendebug.js?appId=${appKey}'>`" title="使用方法" />
        </CellGroup>
        <div class="upload-wrap">
            <Upload :action="`/upload-map?appId=${appKey}`" name="recfile">
                <Button icon="ios-cloud-upload-outline">上传项目source map文件</Button>
            </Upload>
        </div>
    </div>
</template>
<script>
import { getCookie } from '@utils';
export default {
    data () {
        return {
            userName: '',
            projectName: '',
            appKey: '',
        }
    },
    mounted() {
        this.userName = getCookie('loginName');
        this.projectName = getCookie('projectName');
        this.appKey = getCookie('appKey');
    }
}
</script>
<style lang="less">
.setting {
    .upload-wrap {
        margin-top: 10px;
    }
}
</style>

