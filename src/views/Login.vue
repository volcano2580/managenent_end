<template>
  <div class="login">
     <el-form status-icon ref="form" :rules="rules" :model="form"  class="log">
      <h3 class="title">账号登录</h3>
       <el-form-item  prop="username">
      <el-input v-model="form.username" placeholder="请输入用户名" prefix-icon=" iconfont icon-zhanghao1"></el-input>
       </el-form-item>
      <el-form-item prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入密码" prefix-icon="iconfont icon-mima" @keyup.enter.native="login"></el-input>
    </el-form-item>
      <el-form-item prop="test">
      <el-input  v-model="form.test" style="width:50%;" placeholder="请输入验证码" prefix-icon="iconfont icon-yanzhengma"></el-input>
      <input type="button"  @click="createCode"  class="verification" v-model="checkCode"/>
      <!-- <img src="../assets/pp.jpg" @click="createCode"  class="verification" v-model="checkCode"> -->
                
      </el-form-item>
     
      <!-- <el-button type="text" @click="dialogVisible = true" class="zhuce">注册账号</el-button>     -->
      <el-button type="text" @click="go">注册账号</el-button>    
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:80%;" @click="login" class="signup">登录</el-button>
        <!-- <el-button @click="reset">重置</el-button> -->
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
      return {
        checkCode:'',
        logining: false,
        url:'',
        form: {
          username: '',
          password: ''
        },
      
        // 登录表单的校验规则
      rules: {
        username: [
          // 非空校验
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          {
            min: 4,
            max: 11,
            message: '用户名长度在 4 到 11 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          // 非空校验
          { required: true, message: '密码不能为空', trigger: 'blur' },
          {
            min: 6,
            max: 12,
            message: '用户名长度在 6 到 12 个字符',
            trigger: 'blur'
          }
        ]
      },
        checked: true,
      
      };
    },



     methods: {
      //  跳转注册页面
       go(){
          this.$router.push('/register')
       },
       // 图片验证码
      createCode(){
        //先清空验证码的输入
   
        this.code = "";
        this.picLyanzhengma = "";
        //验证码的长度  
          var codeLength = 4; 
          //随机数 
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');  
          for(var i = 0; i < codeLength; i++) {
          //取得随机数的索引（0~35）
            var index = Math.floor(Math.random()*36);   
            //根据索引取得随机数加到code上
            this.code += random[index];   
            }
          //把code值赋给验证码  
          this.checkCode = this.code; 
      },
      login() {
      // 让整个表单校验
      this.$refs.form.validate(async valid => {
        // valid如果为true,就表示通过,否则不通过
        if (!valid) return false
         let qs = require('qs')
          let params = JSON.stringify({
             MerchantAccount:this.form.username,
             PassWord:this.form.password
          
        })
        let data = qs.stringify({
              AppTerminal:"pc",
              AppParam:params,
              AppSign:'',
              AppEcrypt:"none",
              AppTimeStamp:"",

            })
            console.log(data);
          // 发送ajax请求,进行登录
          let res = await this.axios.post('/Api/MerchantAccount/MerchantLogin',{
            params: data
          })
            console.log(res.data)
          if(res.data.Code === 0){
            
            this.$router.push('/seller')
            // localStorage.setItem('token',res.data.token)
            this.$message.success('登录成功')
          }else{
            // 失败的消息 this.$message:弹出一个消息框
            this.$message.error('登录失败')

          }
      })
    }
      
    },
    created(){
      this.createCode();
    }


}
</script>




<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: url('../assets/bj.png');
  overflow: hidden;
  position: relative;
  .log{
    width: 300px;
    border-radius: 15px;
    background-color: rgba(51, 70, 121, 0.897);
    padding: 40px 40px 10px;
    position: fixed;
    top: 150px;
    right:150px;
    .title{
      color: #fff;
      margin-bottom: 20px;
    }
    
    .remember{
      float: right;
      display: inline-block;
      margin-top:10px;
    }
    .signup{
      margin-left: 42px;
     
    }
    .verification{
    border-radius: 12px;
    width:100px;
    letter-spacing:5px;
    margin-left: 50px;
    height: 40px;
    transform: translate(-15px,0);
    }
    .verification:focus{
      border: none;
      outline: none;

    }
    
  }
}

</style>

