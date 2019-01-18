<template>
   <el-container class="home">
    <el-header>
      <div class="logo"></div>
      <div class="title">
        <h1>商家后台管理系统</h1>
      </div>
      <div class="logout">
        <span>欢迎光临</span>
        <a href="javascript:;" @click="logout">退出</a>
      </div>
    </el-header>
    <el-container>

    <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="rgba(51, 70, 121, 0.897)"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
               <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
           
          </el-menu>
      </el-aside>

      <el-main>
        <!-- 现实home的子路由的出口 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data(){
    return{
      menuList:[]
    }
  },
  methods: {
    // 退出
    async logout() {
      try {
        // this.$confirm 显示弹窗
        await this.$confirm('你确定要退出系统吗？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        this.$message.success('退出成功')
        // 删除token
        // localStorage.removeItem('token')
        // 跳转到登录组件
        this.$router.push('/login')
      } catch (e) {
        this.$message.info('取消退出')
      }
    },

  },
  
}
</script>
<style lang="less" scoped>

// 所有的样式的都会自动添加上属性选择器  div [data-v-xxxxx]

// 通过别名@ 配置了绝对路径，在less中无法使用，如果想要用 ~
.home {
  height: 100%;
  .el-header {
    background-color: rgba(51, 70, 121, 0.897);
    display: flex;
    .logo {
      width: 180px;
      background-image: url('~@/assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .logout {
      width: 180px;
      text-align: right;
      line-height: 60px;
      font-weight: 700;
      a {
        color: rgb(228, 105, 34);
        margin-left: 20px;
      }
    }
    .title {
      flex: 1;
      h1 {
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 30px;
      }
    }
  }

  .el-aside {
    // background-color: rgba(51, 70, 121, 0.897);

    .el-submenu {
      width: 200px;
    }
  }

  .el-main {
    background-color: #eaeef1;
  }
}
</style>
