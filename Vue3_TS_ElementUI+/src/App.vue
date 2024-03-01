<template>
  <el-container class="layout-container-demo" style="height: 100vh; width: 100%;">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1']" router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Reading /></el-icon>内容管理
            </template>
            <el-menu-item index="/articles/index">文章列表</el-menu-item>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Files /></el-icon>个人内容</template>
            <el-menu-item index="/resume">资料</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px" v-show="settingShow"><setting /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="toAdminList()">管理员列表</el-dropdown-item>
                <el-dropdown-item @click="loginOut()">登出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-link @click="toLogin()">{{userName}}</el-link>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Reading, Setting, Files } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const userName = ref('请登录')
const settingShow = ref(false)

const toLogin = () => {
  if(!localStorage.getItem('userName')) {
    router.push('/login');
  }
}
const toAdminList = () => {
  router.push('/admins');
}
const loginOut = () => {
  localStorage.removeItem('userName');
  router.push('/login');
  userName.value = '请登录'
  settingShow.value = false
}

onMounted(() => {
  if(localStorage.getItem('userName')) {
    userName.value = localStorage.getItem('userName')?.toString()!;
    settingShow.value = true;    
  } else {
    router.push('/login');
  }
  
})

</script>

<style scoped>
html, body {
  padding: 0;
  margin: 0;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
