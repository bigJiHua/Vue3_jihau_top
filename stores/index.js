import { defineStore } from 'pinia'

// 將其命名為useXXXStore，就像vue3的composable一樣
const useStore = defineStore('main', {
  state: () => ({
    Userdata: [],
    ArticleData: [],
    bgc: '',
    token: localStorage.getItem('token'),
    CountNum: [],
  }),
  actions: {
    cagArtData(ArticleData) {
      this.ArticleData = ArticleData
    },
    cagUserData(Userdata) {
      this.Userdata = Userdata
    },
    cagColor(bgc) {
      this.bgc = bgc
    },
    cagCountNum(Num) {
      this.CountNum = Num
    },
  },
  getters: {},
})
export default { useStore }
