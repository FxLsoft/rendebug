<template>
    <div class="info-wrap">
        <div class="sub-wrap">
            <div class="title">自定义错误</div>
            <div class="row" v-for="(errorKey,index) in Object.keys(custom)" :key='`custom-error-${index}`'>
                <div class="key">{{errorKey}}</div>
                <div class="value">{{custom[errorKey]}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatTimeStamp } from '@utils'
export default {
    name: 'custom-error',
    props: {
        custom: Object
    }
}
</script>