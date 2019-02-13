<template>
  <section class="main">
      <router-view/>
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav-bar{
  width:60px;
  height:100%;
  position: absolute;
  background-color: #545c64;
  top: 0;
  bottom: 0;
  z-index: 100;
  .el-menu{
      border:none
  }
}
.main{
  position: relative;
  height: 100%;
}
.el-row{
  height: 100%;
  position: relative;
}

.title-main{
  font-size: 12px ! important;
  display: inline-block;
}
.control-wrap{
  position: absolute;
  bottom:20px;
  width:100%;
  color:#ccc;
  .exit-wrap{
    margin-bottom:20px;
    .logout{
      margin: 0 auto;
      color:#ccc;
      width:100%;
      text-align:center;
      display: inline-block;
      cursor: pointer;
    }
  }
  span{
   margin: 0 auto;
   width:100%;
   text-align:center;
   display: inline-block;
  }
}
.bg-purple{
  background: #fff;
}
.sidebar-container{
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  width:100px;
  background-color: #545c64;
}
.el-menu-item{
  padding: 0 !important;
  width: 100%;
  span{
    width: 100%;
    display: inline-block;
  }
}
.title-main{
  display: inline-block;
  text-align: center;
  width: 57px;
  a{
      color: #fff;
      text-decoration: none
  }
}
</style>
