<template>
    <div class="info-wrap">
        <div class="sub-wrap">
            <div class="title">错误详情</div>
            <div class="row">
                <div class="key">错误名称</div>
                <div class="value">{{detail.name}}</div>
            </div>
            <div class="row">
                <div class="key">错误信息</div>
                <div class="value">{{detail.message}}</div>
            </div>
            <div class="row">
                <div class="key">堆栈信息</div>
                <div class="value">{{detail.stack}}</div>
            </div>
        </div>
        <div class="sub-wrap">
            <div class="title">目标信息</div>
            <div class="row">
                <div class="key">目标XPath</div>
                <div class="value">{{detail.target.XPath || '-'}}</div>
            </div>
            <div class="row">
                <div class="key">目标名称</div>
                <div class="value">{{detail.target.name || '-'}}</div>
            </div>
        </div>
        <div class="sub-wrap">
            <div class="title">错误文件</div>
            <div class="row">
                <div class="key">文件名称</div>
                <div class="value">{{detail.fileName}}</div>
            </div>
            <div class="row">
                <div class="key">行数</div>
                <div class="value">{{detail.lineNumber}}</div>
            </div>
            <div class="row">
                <div class="key">列数</div>
                <div class="value">{{detail.columnNumber}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'resource-error',
    props: {
        detail: Object
    },
}
</script>
