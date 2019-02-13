<template>
    <section class="main">
      <el-container>
        <el-aside :width="hiddenWith">
          <div class="side-wrap" v-show="isShow">
            <div class="page-container">
              <el-menu :collapse="isCollapse" class="menu-collapse" :default-active="pathIndex">
                <router-link :to="{ path: '/know/slideLoad' }">
                  <el-menu-item index="1">
                    <span>底部滑入滑出</span>
                  </el-menu-item>
                </router-link>
              </el-menu>
            </div>
        </div>
      </el-aside>
        <el-container>
          <el-main>
            <div class="content">
              <router-view v-if="isRouterAlive" />
            </div>
          </el-main>
        </el-container>
      </el-container>
    </section>
  </template>
  
  <script>
    export default {
      name: 'dlvsidebar',
      components: {
      },
      data() {
        return {
          isCollapse: false,
          hiddenWith: '180px',
          isShow: true,
          pathIndex: 1,
          isRouterAlive: true
        }
      },
      provide() {
        return {
          reload: this.reload
        }
      },
      created() {
          // 查看异常订单
        let pathIndex;
        let path = this.$route.path;
        switch (path) {
          case '/know/slideLoad':
            pathIndex = "1";
            break;
          default:
            break;
        }
        this.pathIndex = pathIndex;
      },
      computed:{
          abnormalOrderNum(){
              return this.$store.state.delivery.abnormalOrderNum
          }
      },
      methods: {
        openCollapse() {
          if (this.isShow) {
            this.hiddenWith = 0 + 'px'
            this.isShow = false
          } else {
            this.hiddenWith = 180 + 'px'
            this.isShow = true
          }
        },
        reload() {
          this.isRouterAlive = false
          // 在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
          this.$nextTick(() => {
            this.isRouterAlive = true
          })
        }
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="less" scoped>
    .main {
      a {
        text-decoration: none;
      }
      .el-container {
        flex-basis: 0;
        .el-aside {
          background-color: #fff;
        }
        .el-header {
          padding: 5px 10px;
          height: 30px !important
        }
        .el-main {
          padding: 10px 40px;
        }
        .page-title {
          width: 100%;
          text-align: center;
          line-height: 60px;
        }
      }
      .el-menu {
        border-right: none
      }
      .menu-collapse {
        background-color: #F7F9FA;
        .el-tooltip {
          padding: 0;
  
        }
      }
      .menu-collapse:not(.el-menu--collapse) {
        width: 180px;
        li {
          display: block
        }
      }
    }
    .page-container {
      position: fixed;
      top: 10px;
      bottom: 0;
    }
    .side-wrap {
      width: 180px;
      background-color: #F7F9FA;
      top: 0;
      bottom: 0;
      position: fixed;
    }
  </style>
  