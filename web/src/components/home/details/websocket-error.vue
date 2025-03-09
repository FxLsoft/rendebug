<template>
    <div class="info-wrap">
        <div class="sub-wrap">
            <div class="title">错误详情</div>
            <div class="row">
                <div class="key">错误类型</div>
                <div class="value">{{detail.type}}</div>
            </div>
            <div class="row">
                <div class="key">错误信息</div>
                <div class="value">{{detail.message}}</div>
            </div>
            <div class="row">
                <div class="key">目标类型</div>
                <div class="value">{{detail.target.type}}</div>
            </div>
            <div class="row">
                <div class="key">目标URL</div>
                <div class="value">{{detail.target.url}}</div>
            </div>
            <div class="row">
                <div class="key">时间</div>
                <div class="value">{{formatTimeStamp(detail.target.timeStamp,'yyyy-MM-dd hh:mm')}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatTimeStamp } from '@utils'
export default {
    name: 'websocker-error',
    methods: {
        formatTimeStamp
    },
    props: {
        detail: Object
    }
}
</script>

