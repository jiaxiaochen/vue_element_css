<template>
    <div class="fm-music">
      <section id="fm-container">
        <main class="layout">
          <div class="aside fl">
            <div class="image" :style="{ backgroundImage: 'url('+ smallImg +')'}"></div>
            <div class="icon">
              <span class="iconfont icon-heart"></span>
              <span class="iconfont icon-pause"></span>
              <span class="iconfont icon-next"></span>
            </div>
          </div>
          <div class="detail">
            <div class="tag">{{tagName}}</div>
            <h1>{{song.title}}</h1>
            <ul class="num">
              <li><span class="iconfont icon-earphone"></span>3333</li>
              <li><span class="iconfont icon-heart"></span>128</li>
              <li><span class="iconfont icon-like"> </span>20</li>
            </ul>
            <div class="area-bar">
              <div class="progress-box">
                <div class="progress"></div>
              </div>
              <div class="time">1:01</div>
            </div>
            <div class="singer">{{song.artist}}</div>
            <div class="lyric">
              <p>歌词</p>
            </div>  
          </div>
        </main>
        <footer class="footer-bar">
          <div class="layout">
            <span class="iconfont icon-left" @click = "turnLeft()"></span>
            <span class="iconfont icon-right" @click = "turnRight()"></span>
            <div class="box" ref="box">
              <ul :style="{width: totalWidth +'px',left: dis + 'px'}" ref="ul">
                <li v-for="item in imageList"> 
                  <div class="img" ref="img" @click = "getDetailMusic(item)">
                    <div class="cover" :style="{backgroundImage:'url('+ item.cover_middle +')'}"></div>  
                    <h3>{{item.name}}</h3>
                  </div>
                </li>
              </ul> 
            </div>        
          </div>
        </footer>
      </section>
      <div class="bg" :style="{ backgroundImage: 'url('+ bigImg +')'}"></div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
      imageList:[],
      totalWidth: null,
      isStart: false, //向左点击可以跳转
      isEnd: true, //向右点击可以调换
      liWidth: null,
      dis:null,
      isAnimate: true,//设置一个标识是否在点击,true为没在点击
      tagName: "标签",
      song: {},
      bigImg: '',
      smallImg: '',
    }
  },
  filters: {
  },
  created () {
  },
  mounted () {
    this.getImageList();
  },
  methods: {
    getImageList(){
      this.$http.get('//jirenguapi.applinzi.com/fm/getChannels.php').then(res => {
        this.imageList = res.data.channels
        this.setFooterImage();
      });
    },
    setFooterImage() {
      let _this = this;
      _this.$nextTick(function () {
        _this.liWidth = _this.$refs.img[0].getBoundingClientRect().width;
        let count = _this.imageList.length;
        _this.totalWidth = _this.liWidth * count;
      })
    },
    turnLeft() {
      let _this = this;
      if(!_this.isAnimate) return;
      if(_this.isStart) {
        _this.isAnimate = false;
        let boxWidth = _this.$refs.box.getBoundingClientRect().width;
        let ulContainer = _this.$refs.ul.getBoundingClientRect();
        let ulWidth = ulContainer.width;
        let ulleft = ulContainer.left;
        _this.dis =  _this.dis + Math.floor(boxWidth/_this.liWidth) * _this.liWidth
        _this.isEnd = true;
        _this.isAnimate = true;
        // 如果left的寬度+容器的宽度大于等于整体宽度
        if( _this.dis >= 0){
          this.isStart = false;
        }
      }
      
    },
    turnRight() {
      let _this = this;
      if(!_this.isAnimate) return;
      if(_this.isEnd) {
        _this.isAnimate = false;
        let boxWidth = _this.$refs.box.getBoundingClientRect().width;
        let ulContainer = _this.$refs.ul.getBoundingClientRect();
        let ulWidth = ulContainer.width;
        let ulleft = ulContainer.left;
        _this.dis =  _this.dis - Math.floor(boxWidth/_this.liWidth) * _this.liWidth
        _this.isStart = true;
        this.isAnimate = true;
        // 如果left的寬度+容器的宽度大于等于整体宽度
        if(boxWidth - _this.dis >=  ulWidth){
          this.isEnd = false;
        }
      }
    },
    getDetailMusic(item) { 
      console.log(item)
      let _this = this;
      _this.bigImg = item.cover_big;
      _this.smallImg = item.cover_small;
      _this.tagName = item.name;
      _this.$http.get('//jirenguapi.applinzi.com/fm/getSong.php',{channel: item.channelId}).then(res => {
         _this.song = res.data['song'][0]
         console.log(_this.song)
      });
    }
    
  }
}
</script>
<style lang="less" scoped>
html, body, section {
    overflow: hidden;
    color: #fff;
    height: 100%;
    overflow: hidden;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.fm-music{
  height: 100%;
  overflow: hidden;
}
.layout {
  margin: 0 auto;
  width: 600px;
}

@media (min-width: 700px) {
  .layout {
    width: 600px;
  }
}
@media (min-width: 900px) {
  .layout {
    width: 800px;
  }
}
@media (min-width: 1000px) {
  .layout {
    width: 800px;
  }
}
@media (min-width: 1200px) {
  .layout {
    width: 1000px;
  }
}
.bg{
    position: absolute;
    z-index: -1;
    left: -10px;
    top: -10px;
    bottom: -10px;
    right: -10px;
    background-repeat:no-repeat;
    background-position:center center;
    background-size: cover;
    filter: blur(4px);
    &:before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: rgba(0,0,0,0.4);
    }
}
main{
  padding-top: 10vh;
  height: calc(100% - 24vh);
}
.aside{
  .image{
    width: 40vh;
    height: 40vh;
    background-repeat:no-repeat;
    background-position:center center;
    background-size: cover;
  }
  .icon{
    display: flex;
    margin-top: 5vh;
    .iconfont{
      flex: 1;
      text-align:center;
      font-size: 5vh;
      color: rgba(255,255,255,0.4);
      transition: color .4s;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
    }
  }
}
.detail{
  margin-left: 60vh;
  .tag{
      font-size: 2.8vh;
      padding: .4em .8em;
      background: #2e6eec;
      display: inline-block;
  }
  h1{
    font-size: 6vh;
    margin-top: 3vh;
  }
  .num{
    display: flex;
    font-size: 3vh;
    margin-top: 9vh;
    li{
      flex: 1;
      .iconfont{
        margin-right: 2vh;
        font-size: 4vh;
      }
    }
  }
  .area-bar{
    margin-top: 9vh;
    display: flex;
    align-items: center;
    .progress-box{
      position: relative;
      flex: 1;
      height: .8vh;
      border-radius: .2vh;
      background: rgba(255, 255, 255, 0.4);
    }
    .time{
      width: 3vh;
      font-size: 2vh;
      margin-left: 1vh;
    }
    .progress{
      position: absolute;
      height: .8vh;
      width: 10%;
      background-color: #fff;
      border-radius: .2vh;
      transition: width .8s;
    }
  }
  .singer {
    font-size: 3vh;
    margin-top: 3vh;
  }
  .lyric {
    font-size: 2vh;
    margin-top: 3vh;
    color: rgba(255, 255, 255, 0.4);
  }
}
footer{
  height: 24vh;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px -0.25vh 0.25vh 0.25vh rgba(255,255,255,0.2);
  .layout{
    position: relative;
  }
  .box {
    position: relative;
    overflow: hidden;
    height: 24vh;
  }
  ul{
    position: absolute;
    left: 0;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    
  }
  li{
    float: left;
    margin-top: 1vh;
    margin: 2vh 2vh 0 2vh;
    width: 20vh;
    height: 20vh;
    text-align: center;
    cursor: pointer;
    .cover {
      height: 16vh;
      background-size: cover;
      background-position: center center;
    }
    &.active {
      box-shadow: 0 0 .5vh .5vh rgba(255,255,255,0.8);
    }
  }
  li:hover {
    box-shadow: 0 0 .5vh .5vh rgba(255,255,255,0.8);
  }
  h3{
    font-size: 2vh;
    color: rgba(255,255,255,0.6);
    margin-top: 1vh;
  }
  .iconfont {
    position: absolute;
    top: 4vh;
    font-size: 6vh;
    color: rgba(255, 255, 255, 0.4);
    opacity: 0;
    transition: all .4s;
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  &:hover .iconfont {
    opacity: 1;
  }
  .icon-left {
    left: -8vh;
  }
  .icon-right {
    right: -8vh;
  }
}

</style>
