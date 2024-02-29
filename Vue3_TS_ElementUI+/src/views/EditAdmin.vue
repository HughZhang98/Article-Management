<template>
  <el-form @submit.prevent="editAdmin" :model="admin" label-width="120px" style="margin-top: 3%;">
    <el-form-item label="管理员用户名">
      <el-input v-model="admin.userName" style="width: 50%;" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="admin.password" type="password" style="width: 50%;" clearable show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button @click="cancelBtn">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import mockapi from '../apis/api.ts'

const admin = reactive({
  userName: '',
  password: '',
})

const router = useRouter()
const id = ref(router.currentRoute.value.params.id)
const editAdmin = async () => {
  const res = await mockapi.updateAdmin(id.value, admin)
  if (res.status === 200) {
    ElMessage({
      message: '管理员信息编辑成功!',
      type: 'success',
    })
    router.push('/admins');
  }
}

const cancelBtn = () => {
  router.push('/admins');
}

onMounted(async () => {
  const res = await mockapi.getAdminInfo(id.value)
  if (res.status === 200) {
    admin.userName = res.data.userName
    admin.password = res.data.password
  }
})
</script>

<style scoped></style>
