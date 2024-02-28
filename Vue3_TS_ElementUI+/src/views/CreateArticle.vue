<template>
  <el-form @submit.prevent="saveArticle" :model="article" label-width="120px" style="margin-top: 3%;">
    <el-form-item label="文章标题">
      <el-input v-model="article.title" style="width: 50%;" />
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input v-model="article.body" type="textarea" style="width: 50%;" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button @click="cancelBtn">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import mockapi from '../api/api.ts'

const article = reactive({
  title: '',
  body: '',
})

const router = useRouter()

const saveArticle = async () => {
  const res = await mockapi.createArticles(article)
  if (res.status === 200) {
    ElMessage({
      message: '文章创建成功!',
      type: 'success',
    })
    router.push('/articles/index');
  }
  // axios.post('http://localhost:3002/api/articles', article).then(() => {
  //   ElMessage({
  //     message: '文章创建成功!',
  //     type: 'success',
  //   })
  //   router.push('/articles/index');
  // })
}

const cancelBtn = () => {
  router.push('/articles/index');
}
</script>

<style scoped></style>
