<template>
    <section class="order-container">
      <div class="clearfix">
        <div class="phone fl">
          <div class="notice-bar">
            <div class="pop-mask" v-if="notice"></div>
            <div class="no-choice" :class="animation?'showin':'hideout'">
              <img src="https://yun.duiba.com.cn/yoofans/images/201804/miniapp/no-choice.png" class="cry-icon" />
              <div class="tac word">你还未选择任何音频课程</div>
              <div class="tac word">请先选择后在点击收听</div>
              <button class="know" @click="iKnow()">我知道了</button>
            </div>
          </div>
        </div>
        <el-button size="small" type="primary" @click="handlePhone1">点击滑动图一</el-button>
        <div class="phone fl">
          <div></div>
        </div>
      </div>
    </section>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
      notice: true,
      animation: true
    }
  },
  filters: {
  },
  created () {
  },
  methods: {
    handlePhone1() {
      this.notice = true
      this.animation = true
    },
    iKnow() {
      this.animation = false
      this.notice = false
    }
  }
}
</script>
<style lang="less" scoped>
.phone{
  width: 375px;
  height: 600px;
  margin-left: 30px;
  border:1px solid #bbb;
  border-radius: 10px;
  background-color: #f5f7f7;
  position: relative;
  overflow: hidden;
}
.notice-bar{
  .pop-mask{
    width: 375px;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,0.4971);
    z-index: 1000;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
  .no-choice{
    width:375px;
    height:270px; 
    background:rgba(255,251,251,1);
    border-radius: 9px 9px 0 0; 
    position: absolute;
    bottom: -270px;
    z-index: 1001;
    left:0;
    &.showin{
      animation: moveup 1s forwards;
      -moz-animation: moveup 1s forwards; 
      -webkit-animation: moveup 1s forwards;
      -o-animation: moveup 1s forwards;
    }
    &.hideout{
      animation: movedown 1s forwards;
      -moz-animation: movedown 1s forwards; 
      -webkit-animation: movedown 1s forwards;
      -o-animation: movedown 1s forwards;
    }
    .cry-icon{
      display:block;
      margin: 40px auto 13px;
      width: 75px;
      height: 73px;
      border-radius: 50%; 
    }
    .tac{
      text-align: center;
    }
    .word{
      font-size: 15px;
      line-height: 21px;
      color: rgba(136,136,136,1);
      }
    .know{
      width: 320px;
      height: 40px; 
      border-radius: 3px;
      margin: 37px auto 0;
      background:inherit;
      line-height: 40px;
      color:rgba(136,136,136,1);
      display:block;
      border: 1/2px solid #979797;
    }
  }
  @keyframes moveup{
    from { 
      bottom:-270px; 
    }
    to {
      bottom:0/2px; 
    }   
  }
  @keyframes movedown{
    from { 
      bottom:0/2px; 
    }
    to { 
      bottom:-270px;
    }   
  }
}
</style>
