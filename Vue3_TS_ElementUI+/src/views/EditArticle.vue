<template>
  <el-form @submit.prevent="saveArticle" :model="article" label-width="120px" style="margin-top: 3%;">
    <el-form-item label="文章标题">
      <el-input v-model="article.title" style="width: 50%;" />
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input v-model="article.body" type="textarea" style="width: 50%;" />
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
import axios from 'axios';

const article = reactive({
  title: '',
  body: '',
})

const router = useRouter()
const id = ref(router.currentRoute.value.params.id)

const saveArticle = () => {
  axios.put(`http://localhost:3002/api/articles/${id.value}`, article).then(() => {
    ElMessage({
      message: '文章编辑成功!',
      type: 'success',
    })
    router.push('/articles/index');
  })
}

const cancelBtn = () => {
  router.push('/articles/index');
}

onMounted(() => {
  axios.get(`http://localhost:3002/api/articles/${id.value}`).then((res) => {
    article.body = res.data.body
    article.title = res.data.title
  })
})
</script>

<style scoped>
</style>
