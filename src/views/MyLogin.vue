<template>
  <div class="MyLogin">
    <div class="myform">
      <div class="title">
        <h2>Login Form</h2>
      </div>
       <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user">
          <el-input v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitfn"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
      <p class="ts">username:admin password:123456</p>
    </div>
  </div>
</template>
<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    // 正则验证
    // 用户名
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{5,10}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("您输入的用户格式不对"));
    };
    // 密码
    let pwfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{6,10}$/;
      if (rg.test(value)) return;
      return callback(new Error("您输入的密码格式不对"));
    };
    return {
      formdata: {
        user: "admin",
        pw: 123456,
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitfn() {
      // 点击提交
      this.loginfn();
    },
    async loginfn() {
      // 登录
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", {user, pw });
      if (data.message === "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ name: "home" });
          },
        });
      }
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.MyLogin {
  width: 100vw;
  height: 100vh;
  background: #5e6d82;
  position: relative;
}
.title {
  width: 380px;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
}
.myform {
  width: 380px;
  height: 300px;
  position: absolute;
  top: 26%;
  left: 39%;
}
.el-input{
  margin-bottom:10px;
}
.btn {
  width: 100%;
  height:50px;
  margin-top:20px;
}
.ts {
  color: #fff;
}
</style>