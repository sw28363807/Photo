//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      // list: [{title:"题目1", content:"内容1"}, 
      //     {title:"题目2", content:"内容2"}, 
      //     {title:"题目3", content:"内容3"}, 
      //     {title:"题目4", content:"内容4"},
      //     {title:"题目1", content:"内容1"}, 
      //     {title:"题目2", content:"内容2"}, 
      //     {title:"题目3", content:"内容3"}, 
      //     {title:"题目4", content:"内容4"},
      //     {title:"题目1", content:"内容1"}, 
      //     {title:"题目2", content:"内容2"}, 
      //     {title:"题目3", content:"内容3"}, 
      //     {title:"题目4", content:"内容4"}]
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: qq.canIUse('button.open-type.getUserInfo')
    list:[]
  },
  onClickAddPhotoAlbum(e) {
    console.log(e);
  },
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
