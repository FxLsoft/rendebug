<template>
    <div class="info-wrap">
        <div class="sub-wrap">
            <div class="title">基础信息</div>
            <div class="row">
                <div class="key">请求方法</div>
                <div class="value">{{detail.method}}</div>
            </div>
            <div class="row">
                <div class="key">请求URL</div>
                <div class="value">{{detail.url}}</div>
            </div>
            <div class="row">
                <div class="key">发生时间</div>
                <div class="value">{{formatTimeStamp(detail.time,'yyyy-MM-dd hh:mm')}}</div>
            </div>
            <div class="row">
                <div class="key">响应时间</div>
                <div class="value">{{detail.elapsedTime}}ms</div>
            </div>
        </div>
        <div class="sub-wrap">
            <div class="title">响应信息</div>
            <div class="row">
                <div class="key">状态</div>
                <div class="value">{{detail.status}}</div>
            </div>
            <div class="row">
                <div class="key">状态文本</div>
                <div class="value">{{detail.statusText}}</div>
            </div>
            <div class="row">
                <div class="key">响应文本</div>
                <div class="value">{{detail.responseText}}</div>
            </div>
            <div class="row">
                <div class="key">请求文本</div>
                <div class="value">{{detail.requestText}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatTimeStamp } from '@utils'
export default {
    name: 'xhr-error',
    methods: {
        formatTimeStamp
    },
    props: {
        detail: Object
    }
}
</script>

