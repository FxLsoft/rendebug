<template>
    <div class="info-wrap">
        <div class="sub-wrap">
            <div class="title">错误详情</div>
            <div class="row">
                <div class="key">类型</div>
                <div class="value">{{detail.type}}</div>
            </div>
            <div class="row">
                <div class="key">名称</div>
                <div class="value">{{detail.name}}</div>
            </div>
            <div class="row">
                <div class="key">信息</div>
                <div class="value">{{detail.message}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import originPosition from './origin-position.vue'
export default {
    name: 'unhandle',
    props: {
        detail: Object
    },
}
</script>

