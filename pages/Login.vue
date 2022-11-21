<script setup>
import {} from 'vue'
import { Popup } from 'vant'
</script>

<template>
  <div id="logonCon" class="container">
    <div class="login_conten_box">
      <img
        class="login_img"
        src="https://jihau.top/api/public/uploads/undraw_Login_re_4vu2.png"
      >
      <div class="user_input_eara">
        <h2>登录 <small>Login</small></h2>
        <form class="form-horizontal">
          <label for="al_title" class="login_lable"> 用户名:</label>
          <input
            v-model="username"
            type="text"
            class="form-control login_input"
            placeholder="请输入用户名"
            require
          >
          <label for="al_title" class="login_lable"> 密码:</label>
          <input
            v-model="password"
            type="password"
            class="form-control login_input"
            placeholder="请输入密码"
            required
            @keydown.enter="login"
          >
        </form>
        <div class="btnmenu">
          <button class="res-btn" @click="register">
            注册
          </button>
          <van-button
            v-show="loading"
            loading
            type="primary"
            loading-text="登录中..."
          />
          <button v-show="!loading" class="res-btn" @click="login">
            登录
          </button>
        </div>
      </div>
    </div>
    <van-popup v-model="show" round class="popup">
      {{ msg }}
    </van-popup>
  </div>
</template>

<style scoped></style>
