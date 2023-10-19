<template>
    <HomeView />
</template>

<script setup lang="ts">
import { IShareData } from '@/libs/utils'
import { wxInit } from '@/libs'
import HomeView from '@/views/HomeView/index.vue'

onBeforeMount(() => {
    // @ts-ignore
    Pace.on('hide', function () {
        const $loading = document.querySelector('.loading')
        $loading?.setAttribute('style', 'display: none')
        $loading?.remove()

        const shareData: IShareData = {
            disabled: true,
            title: '国网乐清市供电公司',
            desc: '国网乐清市供电公司',
            link: window.location.href,
            imgUrl: 'https://cloud-app.com.cn/apps/sgcc-yueqing/share.jpg'
        }

        wxInit(shareData)
    })
})
</script>
