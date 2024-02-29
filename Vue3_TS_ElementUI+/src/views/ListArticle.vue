<template>
  <el-table :data="articles">
    <el-table-column type="index" label="#" width="50" />
    <el-table-column prop="title" label="标题" width="140" />
    <el-table-column prop="body" label="内容" />
    <el-table-column fixed="right" label="操作" width="150">
      <template #default='scope'>
        <el-button size="small" @click="edit(scope.row._id)">编辑</el-button>
        <el-button type="danger" size="small" @click="remove(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import mockapi from '../apis/api.ts'

const router = useRouter()
const articles = ref([])

const edit = (id: any) => {
  router.push(`/articles/${id}/edit`)
}
const remove = async (id: any) => {
  const deleteArticles = await mockapi.deleteArticles(id)
  if (deleteArticles.status == 200) {
    ElMessage({
      message: '文章删除成功!',
      type: 'success',
    })

    const res = await mockapi.getArticles()
    articles.value = res.data
  }
  // axios.delete(`http://localhost:3002/api/articles/${id}`).then(() => {
  //   ElMessage({
  //     message: '文章删除成功!',
  //     type: 'success',
  //   })

  //   axios.get(' http://localhost:3002/api/articles').then((res) => {
  //     articles.value = res.data
  //   })
  // })

}

onMounted(async () => {
  if (!localStorage.getItem('userName')) router.push('/login');
  const res = await mockapi.getArticles()
  articles.value = res.data
  // axios.get(' http://localhost:3002/api/articles').then((res) => {
  //   articles.value = res.data
  // })
})
</script>

<style lang="scss" scoped></style>