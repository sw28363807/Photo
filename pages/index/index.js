//index.js
//获取应用实例
const app = getApp()
var imageInfo = {
  imageUrls: [
  "https://raw.githubusercontent.com/sw28363807/sunwen/master/component_beach/che_1-8cc3554803.png",
  "https://raw.githubusercontent.com/sw28363807/sunwen/master/component_coffee/guitai_2-bd6b4738c6.png",
  "https://raw.githubusercontent.com/sw28363807/sunwen/master/scene_nautical/building_ship-1b41b62953.png"
]
}

Page({
  data: {
    photoAlbumList: []
  },

  onLoad: function (e) {
  },
  
  onAddPhotoAlbum(e) {
    var tempPhotoAlbumList = this.data.photoAlbumList;
    tempPhotoAlbumList.push(imageInfo);
    this.setData({
      photoAlbumList: tempPhotoAlbumList
    })
  },
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
