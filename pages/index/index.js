//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // windowHeight: 0,
    // screenHeight: 0
  },

  onLoad: function (e) {
      // this.setData({
      //       // windowHeight: app.globalData.windowHeight,
      //       // screenHeight: app.globalData.screenHeight
      //   })
  }
  // onClickAddPhotoAlbum(e) {
  //   this.data.list.push({imageUrl: "https://img-blog.csdnimg.cn/20190323161318683.png"});
  //   this.setData({
  //     list: this.data.list
  //   }
  //   )
  // },
  // onLoad: function (e) {
  //     this.setData({
  //           windowHeight: app.globalData.windowHeight,
  //           screenHeight: app.globalData.screenHeight
  //       })
  // }
  //事件处理函数
  // bindViewTap: function () {
  //   qq.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     qq.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
