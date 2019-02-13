<template>
    <div class="fm-container">
      <!--头部-->
      <header>
        <div class="clearfix fm-header">
          <span class="btn-radius"></span>
          <span class="volume cp">声音</span>
          <div class="volume-bar cp">
              <span></span>
              <span class="active"></span>
              <span></span>
              <span></span>
          </div>
        </div>
      </header>
      <nav>
        <span class="iconfont icon-arrow-left cp">上一首</span>
        <span class="iconfont icon-arrow-right cp">下一首</span>
        <ul class="channels">
            <li>R&amp;B</li>
            <li class="active">Pop</li>
            <li>80后</li>
            <li>90后</li>
        </ul>
      </nav>
      <main>
        <img class="music-pic" src="http://musicdata.baidu.com/data2/pic/88733215/88733215.jpg">
        <div class="detail">
            <h3 class="singer">The Cranberries</h3>
            <p class="title">Never Grow Old</p>
            <span class="time">-04:30</span>
            <div class="progress-bar">
                <span class="progress"></span>
            </div>
            <div class="buttons">
                <span class="iconfont icon-heart active cp">收藏</span>
                <span class="iconfont icon-next cp">快进</span>
                <span class="iconfont icon-play cp">按钮</span>
            </div>
        </div>
      </main>
    </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
    }
  },
  filters: {
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
 .fm-container{
  width:340px;
  margin:20px auto;
}
.fm-header{
  position: relative;
    height: 35px;
    background: linear-gradient(#02ada2, #0c959b);
    border-radius: 5px 5px 0 0;
}
.fm-header .btn-radius, .fm-header .btn-radius:before, .fm-header .btn-radius:after{
  display: inline-block;
    width: 10px;
    height: 10px;
    background-color: rgba(255,255,255,0.4);
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.2) inset, 0 -2px 2px 2px rgb(11, 152, 156) inset, 0 1px 1px 1px rgba(255,255,255,0.2), 0 -1px 1px 0px rgba(0,0,0,0.2);
    border-radius: 50%;
}
.fm-header .btn-radius {
  position: absolute;
  left:0;
  margin: 12px 0 0 12px;
}
.fm-header .btn-radius:before {
    content: '';
    position: absolute;
    left: 15px;
}
.fm-header .btn-radius:after {
    content: '';
    position: absolute;
    left: 30px;
}
.fm-header .volume{
  position: absolute;
  right: 20px;
  color: #fff;
  font-size: 13px;
  line-height: 35px;
}
.fm-header .volume-bar{
  position: absolute;
    right: 6px;
    top: 6px;
}
.fm-header .volume-bar span{
  display: block;
    width: 8px;
    height: 2px;
    margin-top: 3px;
    background-color: #91bdb4;
    cursor: pointer;
}
.fm-header .volume-bar span.active{
  background-color: #ced9d3;
}
.fm-container nav {
    height: 35px;
    background: linear-gradient(#2c3c35, #313431);
    overflow: hidden;
}

.fm-container nav .icon-arrow-left {
    float: left;
    color: #e8edea;
    font-size: 13px;
    margin-left: 20px;
    line-height: 35px;
}
.fm-container nav .icon-arrow-right {
    float: right;
    color: #e8edea;
    font-size: 13px;
    margin-right: 20px;
    line-height: 35px;
}
.fm-container nav .channels {
    margin: 3px 80px;
    font-size: 0;
    text-align: center;
}
.fm-container nav .channels .active {
    color: #e8edea;
    font-size: 18px;
}

.fm-container nav li {
    display: inline-block;
    color: #7d807e;
    font-weight: bold;
    font-size: 14px;
    width: 60px;
    font-size: 16px;
    width: 60px;
    margin: 5px 0px;
}
.fm-container main {
    padding: 15px 20px;
    background-color: #e8edea;
}
.fm-container main img {
    float: left;
    width: 85px;
    height: 85px;
}

.fm-container main .detail {
    position: relative;
    margin-left: 105px;
}
.fm-container .singer {
    font-size: 13px;
    color: #7f8281;
    font-weight: bold;
}
.fm-container .title {
    font-size: 13px;
    color: #000;
    font-weight: bold;
} 
.fm-container .time {
    position: absolute;
    right: 0;
    top: 20px;
    font-weight: bold;
    color: #91bdb4;
}
.fm-container .progress-bar{
    position: relative;
    margin-top: 12px;
    height: 3px;
    background-color: #ced9d3;
    cursor: pointer;
}
.fm-container .progress-bar .progress {
    position: absolute;
    width: 30%;
    height: 3px;
    left: 0;
    background-color: #91bdb4;
    transition: all .3s;
}
.fm-container .buttons {
    margin-top: 16px;
    text-align: center;
}
.fm-container .buttons:after{
    content: '';
    display: block;
    clear: both;
}
.fm-container .buttons .iconfont {
    font-size: 16px;
    color: #3f413f;
}
.fm-container .buttons .icon-heart{
    float: left;
}
.fm-container .buttons .icon-heart.active{
    color: #d9414e;
}
.fm-container .buttons .icon-next{
    float: right;
}
.fm-container footer {
    text-align: center;
    position: absolute;
    bottom: -30px;
    width: 100%;
}
.fm-container footer li {
    display: none;
    color: #91bdb4;
    font-size: 14px;
    font-weight: bold;
}
.fm-container footer li.active {
    display: block;
}
</style>
