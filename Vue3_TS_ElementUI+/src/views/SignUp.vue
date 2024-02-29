<template>
  <div style="margin: 20px" />
  <el-text type="primary" size="large" tag="b">Sign Up</el-text>
  <el-form label-width="100px" :model="signUpForm" style="max-width: 460px; margin: 0 auto; ">
    <el-input v-model="signUpForm.userName" placeholder="User name" style="margin: 10px" clearable />
    <el-input v-model="signUpForm.password" type="password" placeholder="Password" style="margin: 10px" clearable
      show-password />
    <el-button type="primary" @click.prevent="signUpFormFunc()" style="margin: 10px" round> Sign Up</el-button>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import mockapi from '../apis/api.ts'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const signUpForm = reactive({
  userName: '',
  password: '',
})

const signUpFormFunc = () => {
  if (signUpForm.userName != '' && signUpForm.password != '') {
    mockapi.login(signUpForm).then(res => {
      if (res.status === 200) {
        let findUser = false
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].userName === signUpForm.userName) {
            findUser = true
            ElMessage({
              message: '用户已经存在，请直接登录！',
              type: 'warning',
            })
            setTimeout(() => {
              router.push('/login');
            },2000)
          }
        }

        if (!findUser) {
          mockapi.signUp(signUpForm).then(res => {
            if (res.status === 200) {
              localStorage.setItem('userName', signUpForm.userName)
              ElMessage({
                message: `您好 ${signUpForm.userName} !`,
                type: 'success',
              })
              router.push('/articles/index');
            }
          })
        }
      }

    })





  } else {
    ElMessage.error('帐号或密码不能为空！')
  }
}

</script>

<style scoped>
button {
  margin: 0 auto;
  width: 30%;
}
</style>
../apis/api.ts