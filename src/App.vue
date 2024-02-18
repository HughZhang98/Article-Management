<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-tickets"></i>内容管理</template>
        <el-menu-item index="/articles/index">文章列表</el-menu-item>
        <el-menu-item index="/articles/create">新建文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>登出</el-dropdown-item>
          <el-dropdown-item>全部删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Hugh</span>
    </el-header>
    
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>
</template>


<style>
  html, body {
    padding: 0;
    margin: 0;
  }
</style>

