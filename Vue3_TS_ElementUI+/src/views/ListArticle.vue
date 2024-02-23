<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140" />
    <el-table-column prop="body" label="内容" />
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
import { ElMessage } from 'element-plus'
import axios from 'axios';
import { useRouter } from 'vue-router'

const router = useRouter()
const articles = ref([])

const edit = (id:any) => {
  router.push(`/articles/${id}/edit`)
}
const remove = (id:any) => {
  axios.delete(`http://localhost:3002/api/articles/${id}`).then(() => {
    ElMessage({
      message: '文章删除成功!',
      type: 'success',
    })
 
    axios.get(' http://localhost:3002/api/articles').then((res) => {
      articles.value = res.data
    })
  })
}

onMounted(() => {
  axios.get(' http://localhost:3002/api/articles').then((res) => {
    console.log(res.data);
    articles.value = res.data
  })
})
</script>

<style lang="scss" scoped></style>