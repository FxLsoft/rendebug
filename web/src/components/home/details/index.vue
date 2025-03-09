<template>
    <!-- <Drawer :closable="false" width="640" :value="showDetail" @on-close="close"> -->
        <Tabs value="name1" v-if="data.ua">
            <TabPane label="基本信息" name="name1">
                <div class="info-wrap">
                    <div class="sub-wrap">
                        <div class="title">概要信息</div>
                        <div class="row">
                            <div class="key">时间</div>
                            <div class="value">{{formatTime(data.time, 'yyyy-MM-dd hh:mm')}}</div>
                        </div>
                        <div class="row">
                            <div class="key">类型</div>
                            <div class="value">{{data.type}}</div>
                        </div>
                        <div class="row">
                            <div class="key">页面Title</div>
                            <div class="value">{{data.title}}</div>
                        </div>
                        <div class="row">
                            <div class="key">URL</div>
                            <div class="value">
                                <a :href="data.url" target="_blank">{{data.url}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="key">事件次数</div>
                            <div class="value">{{data.event_count}}</div>
                        </div>
                        <div class="row">
                            <div class="key">客户端IP</div>
                            <div class="value">{{data.ip}}</div>
                        </div>
                    </div>
                    <div class="sub-wrap">
                        <div class="title">浏览器信息</div>
                        <div class="row">
                            <div class="key">浏览器</div>
                            <div class="value">{{data.ua.browser.name}}</div>
                        </div>
                        <div class="row">
                            <div class="key">浏览器主版本</div>
                            <div class="value">{{data.ua.browser.major}}</div>
                        </div>
                        <div class="row">
                            <div class="key">浏览器版本</div>
                            <div class="value">{{data.ua.browser.version}}</div>
                        </div>
                    </div>
                    <div class="sub-wrap">
                        <div class="title">渲染引擎信息</div>
                        <div class="row">
                            <div class="key">渲染引擎</div>
                            <div class="value">{{data.ua.engine.name}}</div>
                        </div>
                        <div class="row">
                            <div class="key">渲染引擎版本</div>
                            <div class="value">{{data.ua.engine.version}}</div>
                        </div>
                    </div>
                    <div class="sub-wrap">
                        <div class="title">操作系统信息</div>
                        <div class="row">
                            <div class="key">操作系统</div>
                            <div class="value">{{data.ua.os.name}}</div>
                        </div>
                        <div class="row">
                            <div class="key">操作系统版本</div>
                            <div class="value">{{data.ua.os.version}}</div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane label="错误信息" name="name2">
                <unhandle v-if="data.type===`unhandledrejection`" :detail="data.detail"/>
                <uncaught v-if="data.type===`Uncaught`" :detail="data.detail"/>
                <resource-error v-if="data.type === `ResourceError`" :detail='data.detail'/>
                <websocket-error v-if="data.type===``" :detail="data.detail" />
                <xhr-error v-if="data.type===`XMLHttpRequest`" :detail='data.detail'/>
                <promise-error v-if="data.type===`Promise`" :detail="data.detail"/>
                <error v-if="data.type === `Console error`" :detail="data.detail" />
                <caught v-if="data.type === `Caught`" :detail="data.detail" />
                <custom-error v-if="Object.keys(data.custom).length > 0" :custom="data.custom"/>
                <origin-position
                    v-if="data.detail && data.detail.originPosition"
                    :origin-position="data.detail.originPosition"
                />
            </TabPane>
            <TabPane label="用户行为" name="name3">
                <div class='action-list' v-if="Array.isArray(data.action_info)">
                    <div class="sub-wrap" v-for="(action,index) in data.action_info" :key='`action-${index}`'>
                        <div class="title">{{index + 1}} - {{action.type === `click` ? '事件点击' : '路由切换'}}</div>
                        <div class="row">
                            <div class="key">时间</div>
                            <div class="value">{{formatTime(action.time)}}</div>
                        </div>
                        <template v-if='action.type === `click`'>
                            <div class="row">
                                <div class="key">URL</div>
                                <div class="value"><a :href="action.page.url">{{action.page.url}}</a></div>
                            </div>
                            <div class="row">
                                <div class="key">Title</div>
                                <div class="value">{{action.page.title}}</div>
                            </div>
                            <div class="row">
                                <div class="key">OuterHTML</div>
                                <div class="value">{{action.detail.outerHTML}}</div>
                            </div>
                            <div class="row">
                                <div class="key">TagName</div>
                                <div class="value">{{action.detail.tagName}}</div>
                            </div>
                            <div class="row">
                                <div class="key">Name</div>
                                <div class="value">{{action.detail.name}}</div>
                            </div>
                            <div class="row">
                                <div class="key">ClassName</div>
                                <div class="value">{{action.detail.className}}</div>
                            </div>
                            <div class="row">
                                <div class="key">Type</div>
                                <div class="value">{{action.detail.type}}</div>
                            </div>
                        </template>
                        <template v-if='action.type ===`Navigation`'>
                            <div class="row">
                                <div class="key">FromURL</div>
                                <div class="value"><a :href="action.detail.from.url">{{action.detail.from.url}}</a></div>
                            </div>
                            <div class="row">
                                <div class="key">FromTitle</div>
                                <div class="value">{{action.detail.from.title}}</div>
                            </div>
                            <div class="row">
                                <div class="key">ToURL</div>
                                <div class="value"><a :href="action.detail.to.url">{{action.detail.to.url}}</a></div>
                            </div>
                            <div class="row">
                                <div class="key">ToTitle</div>
                                <div class="value">{{action.detail.to.title}}</div>
                            </div>
                        </template>
                    </div>
                </div>
            </TabPane>
        </Tabs>
    <!-- </Drawer> -->
</template>
<script>
import unhandle from './unhandle.vue'
import uncaught from './uncaught.vue'
import resourceError from './resource-error.vue'
import websocketError from './websocket-error.vue'
import xhrError from './xhr-error.vue'
import promiseError from './promise-error.vue'
import originPosition from './origin-position.vue'
import customError from './custom-error.vue'
import error from './error.vue'
import caught from './caught.vue'
import { formatTimeStamp } from '@utils'
export default {
    model: {
        prop: 'showDetail',
        event: 'change'
    },
    components: {
        unhandle,
        uncaught,
        originPosition,
        resourceError,
        websocketError,
        xhrError,
        promiseError,
        error,
        customError,
        caught
    },
    props: {
        data: Object,
        showDetail: Boolean,
    },
    watch: {
        showDetail() {
            // console.log(233333);
        },
        data() {

        }
    },
    data() {
        return {
        }
    },
    methods: {
        close() {
            this.$emit('change', false);
        },
        formatTime (time) {
            return formatTimeStamp(time, 'yyyy-MM-dd hh:mm:ss');
        }
    }
}
</script>
<style lang="less">
.sub-wrap {
    margin-bottom: 24px;
    .title {
        font-size: 20px;
        margin-bottom: 12px;
    }
    .row {
        border-bottom: 1px solid #eee;
        display: flex;
        line-height: 36px;
        .key {
            width: 160px;
            flex: none;
        }
        .value {
            flex: 1;
            width: calc(100% - 160px);
            white-space: pre-wrap;
            word-break: break-all;
        }
    }
}
.info-wrap {
    box-sizing: border-box;
    width: 100%;
    .sub-wrap;
}
.action-list {
    .action-wrap {
        display: inline-flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding-right: 20px;
        .row {
            width: 100%;
            display: inline-flex;
            min-height: 40px;
            box-sizing: border-box;
            line-height: 20px;
            flex-direction: column;
            margin-bottom: 15px;
        }
        .key {
            padding-left: 20px;
            width: 40%;
            display: flex;
            align-items: center;
            line-height: 20px;
        }
        .value {
            color: #515666;
            line-height: 24px;
        }
    }
}
</style>

