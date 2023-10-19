<template>
    <div class="home a-page">
        <div class="absolute homer-water-mark"></div>
        <div class="home-header">
            <div class="home-logo"></div>
            <div class="home-title">乐清电力真诚为您服务！</div>
        </div>
        <div class="home-banner">
            <van-swipe lazy-render :autoplay="3000" indicator-color="#63BFC8">
                <van-swipe-item v-for="(src, idx) in bannerList" :key="idx">
                    <img class="home-banner-img" :src="src" :alt="src" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="home-contact">
            <a class="home-contact-phone home-contact-btn" href="tel:0577 62271162"></a>
            <div class="home-contact-more flex">
                <div class="flex flex-col gap13px">
                    <div class="home-contact-wx home-contact-btn" @click="handleContact('wx')"></div>
                    <div class="home-contact-app home-contact-btn" @click="handleContact('app')"></div>
                </div>
                <div class="home-contact-power home-contact-btn" @click="handleContact('power')"></div>
            </div>
        </div>

        <van-popup
            v-model:show="show"
            closeable
            close-icon="close"
            close-icon-position="top-right"
            :overlay-style="{ background: 'rgba(0, 0, 0, 0.95)' }"
            :style="{ width: '100%', height: '100%', background: 'transparent' }"
        >
            <div class="home-contact-dialog">
                <img :src="contactImg" :alt="contactImg" class="home-contact-dialog-img" />
            </div>
        </van-popup>
    </div>
</template>
<script setup lang="ts">
const bannerList: any = reactive([
    new URL('../../assets/img/banner1.jpg', import.meta.url).href,
    new URL('../../assets/img/banner2.jpg', import.meta.url).href,
    new URL('../../assets/img/banner3.jpg', import.meta.url).href,
    new URL('../../assets/img/banner4.jpg', import.meta.url).href,
    new URL('../../assets/img/banner5.jpg', import.meta.url).href,
    new URL('../../assets/img/banner6.jpg', import.meta.url).href,
    new URL('../../assets/img/banner7.jpg', import.meta.url).href
])

const codeList: any = reactive({
    wx: new URL('../../assets/img/code-wx.png', import.meta.url).href,
    app: new URL('../../assets/img/code-app.png', import.meta.url).href,
    power: new URL('../../assets/img/code-power.png', import.meta.url).href
})

const contactImg = ref<string>('')

const show = ref(false)

const handleContact = (type: string) => {
    console.log(type)
    if (type !== 'call') {
        contactImg.value = codeList[type]
    } else {
        contactImg.value = ''
    }
    show.value = true
}

defineOptions({
    name: 'HomeView',
    title: '首页'
})
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
