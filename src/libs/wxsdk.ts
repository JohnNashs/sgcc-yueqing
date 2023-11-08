/**
 *@description: 微信分享
 *@author: forguo
 *@date: 2020/10/31
 */
import axios from 'axios'
import qs from 'qs'
import wx from 'weixin-js-sdk'
import type { IShareData } from '@/libs/utils'

// 获取微信参数
function getConfig() {
    // 注意： 如果你的vue项目，路由没有开启history 模式,也就是你的url上面包含“#”，这个时候要从后端正确获取签名，就需要去掉url上#后面的字符。（url去掉’#’hash部分，可用location.href.split('#')[0]）
    const url: any = encodeURIComponent(window.location.href.split('#')[0]) // 获取锚点之前的链接
    return new Promise(resolve => {
        axios({
            method: 'get',
            url: `https://rainyman.cn/api/getWxsdk?${qs.stringify({ url })}`
            // url: "https://www.forguo.cn/api/common/wechat/sdk",
            // data: {
            //   url: url,
            // },
        }).then(
            response => {
                const res = response.data
                resolve(res)
            },
            err => {
                console.log(err)
            }
        )
    })
}

const wxInit = async (shareData: IShareData) => {
    const res: any = await getConfig()
    const data: any = res.data
    wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
            // "onMenuShareTimeline",
            // "onMenuShareAppMessage",
            // "onMenuShareQQ",
            // "onMenuShareWeibo",
            // "onMenuShareQZone",
            'updateAppMessageShareData',
            'updateTimelineShareData'
            // "updateAppMessageShareData",
            // "updateTimelineShareData",
            // 'checkJsApi',
            // 'hideAllNonBaseMenuItem',
            // 'hideOptionMenu'
        ],
        openTagList: ['wx-open-launch-weapp'] // 填入打开小程序的开放标签名
    })
    // wx.hideOptionMenu();
    wx.ready(function () {
        wx.updateAppMessageShareData(shareData)
        wx.updateTimelineShareData(shareData)
        // wx.onMenuShareAppMessage(shareData);
        // wx.onMenuShareTimeline(shareData);
        // wx.onMenuShareQQ(shareData);
        // wx.onMenuShareWeibo(shareData);
        // wx.onMenuShareQZone(shareData);
        // wx.hideOptionMenu();
        // wx.hideAllNonBaseMenuItem({
        //    success: function () {}
        // });
    })
    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        console.log(res)
    })
}

export { wxInit, wx }
