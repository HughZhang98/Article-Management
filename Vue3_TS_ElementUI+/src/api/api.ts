import http from "../axios/index.ts";

export default {
  //Create Articles
  createArticles(data: any) {
    return http({
      url: `http://localhost:3002/api/articles`,
      method: 'post',
      data: data
    })
  },
  //Show Articles list
  getArticles() {
    return http({
      url: `http://localhost:3002/api/articles`,
      method: "get"
    })
  },
  //Delete Articles
  deleteArticles(data: any) {
    return http({
      url: `http://localhost:3002/api/articles/${data}`,
      method: "delete",
      data: data
    })
  },
  //Article Info
  getArticleInfo(data: any) {
    return http({
      url: `http://localhost:3002/api/articles/${data}`,
      method: "get"
    })
  },
  //Update Articles
  updateArticles(id: any, data: any) {
    return http({
      url: `http://localhost:3002/api/articles/${id}`,
      method: 'put',
      data: data
    })
  },
  //Log In
  login(data: any) {
    return http({
      url: `http://localhost:3002/api/login`,
      method: 'post',
      data: data
    })
  },
   //Sign up
   signUp(data: any) {
    return http({
      url: `http://localhost:3002/api/signUp`,
      method: 'post',
      data: data
    })
  }
}