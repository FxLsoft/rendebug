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
                <div class="key">错误级别</div>
                <div class="value">{{detail.severity}}</div>
            </div>
            <div class="row">
                <div class="key">错误种类</div>
                <div class="value">{{detail.type}}</div>
            </div>
            <div class="row">
                <div class="key">堆栈追踪</div>
                <div class="value">{{detail.stacktrace || detail.stack}}</div>
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
    name: 'uncaught',
    props: {
        detail: Object
    },
}
</script>
                    
