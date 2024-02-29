import http from "../axios/index.ts";

export default {
  //Create Articles
  createArticles(data: any) {
    return http({
      url: `/api/articles`,
      method: 'post',
      data: data
    })
  },
  //Show Articles list
  getArticles() {
    return http({
      url: `/api/articles`,
      method: "get"
    })
  },
  //Delete Articles
  deleteArticles(data: any) {
    return http({
      url: `/api/articles/${data}`,
      method: "delete",
      data: data
    })
  },
  //Article Info
  getArticleInfo(data: any) {
    return http({
      url: `/api/articles/${data}`,
      method: "get"
    })
  },
  //Update Articles
  updateArticles(id: any, data: any) {
    return http({
      url: `/api/articles/${id}`,
      method: 'put',
      data: data
    })
  },
  //Log In
  login(data: any) {
    return http({
      url: `/api/login`,
      method: 'post',
      data: data
    })
  },
  //Sign up
  signUp(data: any) {
    return http({
      url: `/api/signUp`,
      method: 'post',
      data: data
    })
  },
  //Admin List
  getAdminList() {
    return http({
      url: `/api/admins`,
      method: 'get'
    })
  },
   //Update Admin
   updateAdmin(id: any, data: any) {
    return http({
      url: `/api/admins/${id}`,
      method: 'put',
      data: data
    })
  },
  //Admin Info
  getAdminInfo(data: any) {
    return http({
      url: `/api/admins/${data}`,
      method: "get"
    })
  },
   //Delete Admin
   deleteAdmin(data: any) {
    return http({
      url: `/api/admins/${data}`,
      method: "delete",
      data: data
    }) 
  }
}