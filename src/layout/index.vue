<template>
  <div :class="classObj" class="app-wrapper">
    <div class="app_top">
      <div class="app_top_one">
        <img src="@/assets/login/wos_logo.png" alt="">
        <span>移动端管理系统</span>
      </div>
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
            <i class="el-icon-s-custom"></i>
            <span style="margin-left: 10px">{{ userName }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <!-- <router-link to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link> -->
            <el-dropdown-item @click.native="changePwdFun">
              <span style="display:block;">修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div style="height: 50px" :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
    <div class="changePwdMain" v-show="changePwd" @scroll.prevent>
      <changePwd v-show="changePwd" class="changePwdPopup"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { getUserName } from '@/utils/auth'
import changePwd from '@/components/changePwd'

export default {
  name: 'Layout',
  data() {
    return {
      userName: getUserName()
    }
  },
  components: {
    Navbar,
    Sidebar,
    AppMain,
    changePwd
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    ...mapGetters([
      'changePwd'
    ])
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    changePwdFun() {
      console.log('123654')
      this.$store.dispatch('app/showChangePwdPopUp', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app_top {
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 25px;
    background-color: #fff;
    .app_top_one {
      display: flex;
      align-items: center;
      span {
        font-size: 20px;
        color: #9d9d9d;
        font-weight: bold;
        margin-left: 10px;
      }
    }
    .right-menu {
      // float: right;
      // height: 100%;
      // line-height: 80px;
      display: flex;
      align-items: center;
      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;
          font-size: 16px;
          color: #9d9d9d;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 4px;
            font-size: 12px;
          }
        }
      }
    }
  }

  .el-dropdown-menu__item--divided {
    // margin: 0;
    border-top: 1px solid #eee
  }

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
  .changePwdPopup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .changePwdMain {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 112%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .changePwdBox {
    width: 400px;
    height: 400px;
    box-shadow: 0 0 5px #000;
  }
</style>
