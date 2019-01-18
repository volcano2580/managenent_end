<template>
  <div class="register">
  <el-form ref="registerForm" :model="registerForm" :rules="rules" status-icon>
      <h3 class="title">账号注册</h3>
      <el-form-item prop="mobile">
        <el-input v-model="registerForm.mobile"  placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone"></el-input>
      </el-form-item>
      <el-form-item  prop="username">
        <el-input v-model="registerForm.username" placeholder="请输入用户名" prefix-icon=" iconfont icon-zhanghao1"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input v-model="registerForm.password" placeholder="请输入密码" prefix-icon="iconfont icon-mima"></el-input>
      </el-form-item>
        <el-form-item prop="relate">
        <el-input v-model="registerForm.relate" placeholder="请输入QQ或微信" prefix-icon="iconfont icon-xiaoxi1"></el-input>
      </el-form-item>
      <el-form-item prop="recomd">
        <el-input v-model="registerForm.recomd" placeholder="请输入邀请码" prefix-icon="iconfont icon-iconfonttuijianren"></el-input>
      </el-form-item>
        <el-form-item prop="sendCode">
        <el-input v-model="registerForm.sendCode" style="width:50%;" placeholder="请输入验证码" prefix-icon="iconfont icon-yanzhengma"></el-input>
         <span v-show="sendAuthCode" class="auth_text auth_text_blue" @click="getAuthCode">获取验证码</span>
        <span v-show="!sendAuthCode" class="auth_text"> <span class="auth_text_blue">{{auth_time}}</span> 秒之后重新发送</span> 
      </el-form-item>

      <div class="qq">如果没有联系人,请联系QQ:123456789</div>
        <div class="go">已有账号,
        <el-button type="text" @click="go">去登录</el-button>
        </div>
        <el-button type="primary" style="width:80%;" @click="register" class="signup">注册</el-button>

    </el-form>
    

</div>
</template>

<script>
export default {
    // name: 'productdetailspage',
    data() {
        return {

          registerForm:{
              mobile: '',
              username: '',
              password: '',
              recomd: 'U4DTCU89',
              relate:'',
              sendCode:'', //绑定输入验证码框
              SendType:'',
        },
        
        sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮'还是‘倒计时' */
        auth_time: 0, /*倒计时 计数器*/
       


        //   注册表单校验
       rules: {
          mobile: [
            {  pattern: /^1\d{10}$/, message: '请输入合法的手机号码', trigger: 'change' },

          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'change' },
            { min: 3, max: 9, message: '长度在 3 到 9个字符', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入正确密码格式', trigger: 'change' },
            { min: 6, max: 12, message: '长度在6 到 12 个字符', trigger: 'change' }
          ],
          relate :[
            { required: true, message: '请输入qq或微信', trigger: 'change' },
            
          ],
          recomd:[
             { required: true, message: '请输入邀请码', trigger: 'change' },
          ]
       },
        }
    },
      methods: {
      //  跳转注册页面
      go(){
          this.$router.push('/login')
       }, 
     
     //  验证
     getAuthCode() {
      this.sendAuthCode = false;
     //设置倒计时秒
      this.auth_time = 60;
      var auth_timetimer = setInterval(()=>{
        this.auth_time--;
        if(this.auth_time<=0){
          this.sendAuthCode = true;
          clearInterval(auth_timetimer);
        }
      }, 1000);
      this.$refs.registerForm.validate( async valid => {
          if (!valid) return false
          let qs = require('qs');
          let params=JSON.stringify({
           SendPhone:this.registerForm.mobile,
           SendType:this.SendType
           });
         let res = await this.post('/Api/AccountMSM/SendAccountMSM',{
           params:qs.stringify({
            AppTerminal:"pc",
            AppParam:params,
            AppSign:"",
            AppEcrypt:"none",
            AppTimeStamp:"",
           }), 
         }).then(res=>{
          console.log(res.data)
        })    
        })

      },
     
     register(){
        // 让整个表单校验
          this.$refs.registerForm.validate( async valid => {
         if (!valid) return false
          let qs = require('qs');
          let params=JSON.stringify({
             PopularizeCode:this.registerForm.recomd,
             MerchantAccount:this.registerForm.mobile,
             RealName:this.registerForm.username,
             PassWord:this.registerForm.password,
             ContactNumber:this.registerForm.relate,
             SendCode:this.registerForm.sendCode
           });
           let res = await this.axios.post('/Api/MerchantAccount/MerchantAccountRegister',
           {
            params:qs.stringify({
            AppTerminal:"pc",
            AppParam:params,
            AppSign:"",
            AppEcrypt:"none",
            AppTimeStamp:"",
           }), 
        }).then(res=>{
          console.log(res.data)
        })    
        });
      },
   
    created(){
     
    }

  }
}
</script>

<style lang="less" scoped>
.register {
  height: 100%;
  width: 100%;
  background-image: url('../assets/bj.png');
  overflow: hidden;
  position: relative;
  .el-form {
    width: 350px;
    border-radius: 15px;
    background-color: rgba(51, 70, 121, 0.897);
    padding: 30px 30px 20px;
    position: fixed;
    top: 150px;
    right:150px;

    .el-form-item {
    margin-bottom: 16px;
    }
   
    .title{
      color: #fff;
      margin-bottom: 20px;
    }
     
    .signup{
    margin-bottom: 15px;
    margin-left: 40px;
    }
    .qq{
        font-size: 12px;
        height: 30px;
        line-height: -30px;
        color: rgb(218, 119, 28);
        margin-left: 7px;
    }
    .go{
        font-size: 13px;
        margin-left: 20px;
        float: right;
        color: rgb(218, 119, 28);
        margin-top: -41px;
    }
    .verification{
    width:100px;
    margin-left: 60px;
    height: 40px;
    }
    span{
       color: rgb(218, 119, 28);
       margin-left: 5px;
    }
  }
}

</style>
