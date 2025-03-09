<template>
<div class="detail-modal-wrap">
    <div class="detail-modal">
        <div class="close" @click="closeModal">关闭</div>
        <div v-if="ready"><Details :data="info"></Details></div>  
    </div>
</div>
</template>
<script>
import Details from '../home/details/index.vue'
import {sendAjax,formatTimeStamp} from '@utils'
import ua from "ua-parser-js"
export default {
    name: 'new-detail-route-view',
    components: {
        Details
    },
    mounted() {
        sendAjax({
            url: `/queryBugInfoByWhere?id=${this.$route.params.id}`
        }).then(res => {
            let info = res.data.list[0]
            info = this.formatData(info)
            this.info = info
            this.ready = true
        })
    },
    methods: {
        formatData (data) {
            data.formatTime = formatTimeStamp(data.time, 'yyyy-MM-dd hh:mm');
            let status = data.status || '未解决';
            switch (status) {
                case '未解决':
                    data.typeIcon = 'md-help-circle';
                    break;
                case '正在处理':
                    data.typeIcon = 'md-cog';
                    break;
                case '已解决':
                    data.typeIcon = 'md-checkmark-circle';
                    break;
                case '忽略':
                    data.typeIcon = 'md-close-circle';
                    break;
                case '未复现':
                    data.typeIcon = 'md-alert';
                    break;
                default:
                    data.typeIcon = 'md-help-circle';
            }
            data.ua = ua(data.user_agent)
            try {
                data.detail = (typeof data.detail === 'object' ? data.detail : JSON.parse(data.detail)) || {};
            } catch (err) {
                data.detail = {};
            }
            return data
        },
        closeModal() {
            this.$router.push({path:'/home'})
        }
    },
    data() {
        return {
            ready: false,
            info: null,
        }
    },
}
</script>
<style lang='less'>
.detail-modal-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 1000;
    overflow-y: auto;
    .detail-modal {
        padding: 20px;
        width: 800px;
        margin: 30px auto;
        background-color: #fff;
        position: relative;
        .close {
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            cursor: pointer;
            z-index: 10;
        }
    }
}
</style>