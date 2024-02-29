<template>
  <el-text type="primary" size="large" tag="b" style="margin: 3% 0; display: block;">Admin List</el-text>
  <el-table :data="adminList">
    <el-table-column prop="_id" label="ID" width="300" />
    <el-table-column prop="userName" label="姓名" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default='scope'>
        <el-button link type="primary" size="small" @click="edit(scope.row._id)">编辑</el-button>
        <el-button link type="primary" size="small" @click="remove(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import mockapi from '../apis/api.ts'

const router = useRouter()
const adminList = ref([])

const edit = (id: any) => {
  router.push(`/admins/${id}/edit`)
}
const remove = async (id: any) => {
  ElMessageBox.confirm(
    `你确定要删除管理员吗？`,
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  ).then(async () => {
    const deleteAdmin = await mockapi.deleteAdmin(id)
    if (deleteAdmin.status == 200) {
      ElMessage({
        type: 'success',
        message: '删除成功！',
      })
      const res = await mockapi.getAdminList()
      adminList.value = res.data
    }
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消删除',
    })
  })
}

onMounted(async () => {
  const res = await mockapi.getAdminList()
  adminList.value = res.data
})

</script>

<style lang="scss" scoped></style>