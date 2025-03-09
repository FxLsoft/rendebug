<template>
    <div class="info-wrap">
        <div class="sub-wrap">
            <div class="title">错误详情</div>
            <div class="row">
                <div class="key">错误信息</div>
                <div class="value">{{detail.message || '-'}}</div>
            </div>
            <div class="row">
                <div class="key">错误细节</div>
                <div class="value">{{JSON.stringify(detail)}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatTimeStamp } from '@utils'
export default {
    name: 'promise-error',
    props: {
        detail: Object
    }
}
</script>

