<template>
    <div class="seller">
        <el-container>
          <el-aside width="200px">
            <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商家管理中心</span>
        </template>
         <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">选项</span>
        </el-menu-item>
       </el-submenu>
       <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">发布活动</span>
       </el-menu-item>
       <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">全部活动</span>
       </el-menu-item>
       <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
       </el-menu-item>
    </el-menu>
  </el-aside>
        <el-container class="content">
            <el-header>
              <el-row>
                <el-col :span="5"> 
                 <div class="img">
                   <img src="../assets/pp.jpg" alt="">
                   <span>BrashManagement</span>
                   </div>
                  </el-col>
                <el-col :span="8">
                  <div class="grade">
                    <el-col :span="17" class="grade-left">
                    <div class="content">
                      <div><span>商家类型:普通商家</span></div>
                      <div><span>你还未成为VIP会员哦</span></div>
                      <el-button type="danger">成为VIP</el-button>
                    </div>
                    </el-col>
                    <el-col :span="7" class="grade-right">
                     <span>查看VIP专属特权</span>
                    </el-col>
                    
                  </div>
                  </el-col>
                <el-col :span="8">
                 
                      <div><i></i><span>账户余额</span>:<span>0:00元</span></div>
                      <div><span>担保余额</span>:<span>0:00元</span></div>
                      <el-button type="danger">充值</el-button>
                    
                  </el-col>
              </el-row>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.seller{
    height: 100%;
   
    .el-header{
    color: #333;
    text-align: center;
    height: 220px !important;
    .img{
      height: 200px;
      width: 100%;
      box-sizing: border-box;
      text-align:center;
      img{
        width:80%;
        height: 80%;
        border: 15px;
        border-radius: 50%;
        margin-top: 15px;
      }
      span{
        display: block;
        width: 80%;
        height: 30px;
        line-height: 30px;
        margin-left: 21px;
      }
    }
    .grade{
      height: 220px;
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      .content{
        background-color: #eee;
        height: 200px;
      }
      .grade-left{
        height: 40px;
        line-height: 40px;
        text-align: left;
       
      }
      
    }
   

  }
  
  .el-aside {
    // background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 800px;

  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
   

  }
  
  
 

}

 

</style>
