<view class="container">
<view class="root">

<view class="topBar">
</view>

<view class="content">
  <scroll-view class="scrollViewInfo" scroll-y="true">
    <view class="photoAlbumInfo" wx:for="{{photoAlbumList}}" wx:for-item="item">
      <view class="photoAlbumCellInfo">
        <image src="{{item.imageUrls[0]}}"></image>
      </view>
    </view>
  </scroll-view>
</view>

<view class="bottomBar">
  <view class="buttonView">
    <button class="buttonAddPhotoAlbum" bindtap="onAddPhotoAlbum">添加</button>
  </view>
</view>

</view>
  <!-- <view class="underInfo" height="{{windowHeight}}">
  <scroll-view class="scrollViewInfo" scroll-y="true">
    <view class="itemInfo" wx:for="{{list}}" wx:for-item="item">
      <image class="imageInfo" src="{{item.imageUrl}}" mode="aspectFill"> </image>
    </view>
  </scroll-view>
  <button  class="button.createPhotoAlbum" bindtap="onClickAddPhotoAlbum" hover-class="other-button-hover"> 添加相册 </button>
  </view> -->
  <!-- <button  class="underInfo"> 获取头像昵称 </button> -->
  <!-- <button  class="usermotto"> 获取头像昵称 </button> -->
  <!-- <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view> -->
        <!-- <view class="title">{{item.title}}</view>
      <view class="content">{{item.content}}</view> https://img-blog.csdnimg.cn/20190323161318683.png-->
</view>
