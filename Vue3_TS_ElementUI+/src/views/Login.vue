<template>
  <div style="margin: 20px" />
  <el-text type="primary" size="large" tag="b">Log in</el-text>
  <el-form label-width="100px" :model="loginForm" style="max-width: 460px; margin: 0 auto; ">
    <el-input v-model="loginForm.userName" placeholder="User name" style="margin: 10px" clearable />
    <el-input v-model="loginForm.password" type="password" placeholder="Password" style="margin: 10px" clearable
      show-password />

    <el-button type="primary" @click.prevent="loginFunc()" style="margin: 10px" round>Login</el-button>
    <el-button type="primary" @click.prevent="submitForm()" style="margin: 10px" round>SignUp</el-button>

  </el-form>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import mockapi from '../api/api.ts'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginForm = reactive({
  userName: '',
  password: '',
})

const submitForm = () => {
  router.push('/signup')
}
const loginFunc = () => {
  if (loginForm.userName != '' && loginForm.password != '') {
    mockapi.login(loginForm).then(res => {
      if (res.status === 200) {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].userName === loginForm.userName) {
            if (res.data[i].password === loginForm.password) {
              localStorage.setItem('userName', loginForm.userName)
              ElMessage({
                message: `您好 ${loginForm.userName} !`,
                type: 'success',
              })
              router.push('/articles/index');
              // location.reload();
              break;
            } else {
              ElMessage.error('密码错误')
              break;
            }
          }

        }
      }
      ElMessage({
        message: '用户不存在!',
        type: 'warning',
      })

    })
  } else {
    ElMessage.error('帐号或密码不能为空！')
  }

}
onMounted(() => {
  if (localStorage.getItem('userName')) {
    router.push('/articles/index');
  }
})
</script>

<style scoped>
button {
  margin: 0 auto;
  width: 30%;
}
</style>
