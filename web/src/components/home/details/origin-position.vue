<template>
    <div class="sub-wrap">
        <div class="title">原始文件</div>
        <div class="row">
            <div class="key">错误代码</div>
            <div class="value">{{originPosition.name}}</div>
        </div>
        <div class="row">
            <div class="key">源文件</div>
            <div class="value">{{originPosition.source}}</div>
        </div>
        <div class="row">
            <div class="key">行数</div>
            <div class="value">{{originPosition.line}}</div>
        </div>
        <div class="row">
            <div class="key">列数</div>
            <div class="value">{{originPosition.column}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'origin-position',
    props: {
        originPosition: Object
    }
}
</script>

