<script setup>
import { onMounted, ref } from 'vue'
import useStore from '@/stores/index'
const istop = ref(false)
// mounted
onMounted(() => {
  const { proxy } = getCurrentInstance()
  const token = ref(localStorage.getItem('token'))
  const User = ref(localStorage.getItem('Username'))
  const Useridentity = ref(localStorage.getItem('Useridentity'))

  const Ctrldemo = ref(document.querySelectorAll('.Ctrldemo'))
  const style = ref(localStorage.getItem('bgc'))
  const bgc = ref(useStore.bgc)

  const more_site = ref(proxy.$refs.more_something)
  const more_site_son = ref(proxy.$refs.dropdown_menu)

  const btnList = ref(proxy.$refs.btn_list)
  const menubox = ref(proxy.$refs.menubox)
  const moresite = ref(proxy.$refs.more_something)

  const indexHeader = ref(proxy.$refs.headertotop)

  window.addEventListener('scroll', HeaderTop)
  const setcolor = (demo, color) => {
    const demos = document.querySelectorAll(`${demo}`)
    for (let i = 0; i < demos.length; i++)
      demos[i].style.color = `${color}`
  }
  // 设置主题样式
  setTimeout(() => {
    setInterval(() => {
      if (style.value) {
        for (let i = 0; i < Ctrldemo.value.length; i++) {
          Ctrldemo[i].style.background = `${style.value}`
          setcolor('h1', 'rgb(240,240,240)')
          setcolor('.menu-item > a', 'rgb(240,240,240)')
          setcolor('.article_alltitle > span', 'rgb(240,240,240)')
          setcolor('.nav > li > a', 'rgb(240,240,240)')
          setcolor('#User > p > span', 'rgb(240,240,240)')
          setcolor('#cagUsers > p > span', 'rgb(240,240,240)')
          setcolor('.ararc_title', 'rgb(240,240,240)')
          setcolor('.UserselfArea > p', 'rgb(240,240,240)')
          setcolor('.card > p', 'rgb(240,240,240)')
        }
      }
      else if (!style.value && bgc.value !== '' && bgc.value !== null) {
        for (let i = 0; i < Ctrldemo.value.length; i++) {
          Ctrldemo[i].style.background = `${bgc.value}`
          setcolor('h1', 'rgb(240,240,240)')
          setcolor('.menu-item > a', 'rgb(240,240,240)')
          setcolor('.article_alltitle > span', 'rgb(240,240,240)')
          setcolor('.nav > li > a', 'rgb(240,240,240)')
          setcolor('#User > p > span', 'rgb(240,240,240)')
          setcolor('#cagUsers > p > span', 'rgb(240,240,240)')
          setcolor('.ararc_title', 'rgb(240,240,240)')
          setcolor('#introduce_doc > p', 'rgb(240,240,240)')
          setcolor('.UserselfArea > p', 'rgb(240,240,240)')
          setcolor('.card > p', 'rgb(240,240,240)')
        }
      }
    }, 200)
  }, 200)
})
// methods
function listMenu() {
  more_site.addEventListener('mouseenter', () => {
    more_site.setAttribute('aria-expanded', 'ture')
    // eslint-disable-next-line no-global-assign
    open = more_site.parentNode
    open.className = 'dropdown open'
  })
  more_site.addEventListener('mouseleave', () => {
    more_site.setAttribute('aria-expanded', 'flase')
    // eslint-disable-next-line no-global-assign
    open = more_site.parentNode
    open.className = 'dropdown'
  })
  more_site_son.addEventListener('mouseenter', () => {
    more_site.setAttribute('aria-expanded', 'ture')
    // eslint-disable-next-line no-global-assign
    open = more_site.parentNode
    open.className = 'dropdown open'
  })
  more_site_son.addEventListener('mouseleave', () => {
    more_site.setAttribute('aria-expanded', 'flase')
    // eslint-disable-next-line no-global-assign
    open = more_site.parentNode
    open.className = 'dropdown'
  })
}
function closeMenu() {
  btnList.setAttribute('aria-expanded', 'flase')
  moresite.setAttribute('aria-expanded', 'flase')
  btnList.setAttribute('class', 'navbar-toggle collapsed')
  menubox.setAttribute('class', 'navbar-collapse collapse')
}
function HeaderTop() {
  if (indexHeader) {
    const scrollTop
      = document.documentElement.scrollTop
      || window.pageYOffset
      || document.body.scrollTop
    if (scrollTop >= 10)
      istop.value = true

    if (scrollTop === 0)
      istop.value = false
  }
}
function login() {
  closeMenu()
  if (token)
    $router.push('/CtrlView')
  else
    $router.push('/Login')
}
function outlogin() {
  closeMenu()
  localStorage.removeItem('token')
  localStorage.removeItem('Username')
  localStorage.removeItem('Useridentity')
  location.reload()
}
</script>

<template>
  <div id="indexHeader" ref="headertotop" class="navbar-default Ctrldemo" :class="[{ header: istop, nheader: !istop }]">
    <div class="navbar-header coker">
      <button
        ref="btn_list" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
        aria-expanded="false" aria-controls="navbar"
      >
        <span class="icon-bar" />
        <span class="icon-bar" />
        <span class="icon-bar" />
      </button>
      <nuxt-link class="navbar-brand headerTitle" to="/">
        <h1>JiHua的web和js开发数据</h1>
      </nuxt-link>
      <a href="https://jihau.top"><img src="https://www.jihau.top/img/logo.png" class="logo" alt="logo"></a>
    </div>
    <div id="navbar" ref="menubox" class="navbar-collapse collapse Ctrldemo">
      <ul class="nav navbar-nav">
        <li @click="closeMenu">
          <nuxt-link to="/">
            主页
          </nuxt-link>
        </li>
        <li @click="closeMenu">
          <a href="http://jihua.me">关于</a>
        </li>
        <li @click="closeMenu">
          <nuxt-link to="/DevProcess">
            发展历程
          </nuxt-link>
        </li>
        <li @click="closeMenu">
          <nuxt-link to="/SpsList">
            赞助·友链
          </nuxt-link>
        </li>
        <li class="dropdown">
          <a
            ref="more_something" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false" @mousemove.once="listMenu"
          >更多<span class="caret" /></a>
          <ul ref="dropdown_menu" class="dropdown-menu">
            <li>
              <nuxt-link to="/checkver">
                <span @click="closeMenu">激活账户</span>
              </nuxt-link>
            </li>
            <li><a href="https://www.jihau.com">主站博客页面</a></li>
            <li><a href="https://d0tc.com">C语言程序与设计</a></li>
            <li>
              <nuxt-link to="/page/YSZC">
                <span @click="closeMenu">隐私政策</span>
              </nuxt-link>
            </li>
            <li><a href="https://jihau.com/POP/">测试</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right right_btn">
        <li @click="closeMenu">
          <nuxt-link to="/Search">
            <span class="glyphicon glyphicon-search" style="font-size: 20px" @click="closeMenu" />
          </nuxt-link>
        </li>
        <li @click="closeMenu">
          <nuxt-link v-show="token" to="/CtrlView">
            欢迎{{ User }}{{ Useridentity }}
          </nuxt-link>
        </li>
        <li>
          <button v-if="!token" class="btn" @click="login">
            登录
          </button>
          <button v-if="token" class="btn" @click="outlogin">
            <a>退出登录</a>
          </button>
          <button v-if="token" class="btn" @click="closeMenu">
            <nuxt-link to="/CtrlView">
              后台
            </nuxt-link>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
#navbar {
  font-size: 1.5rem;
  font-weight: bolder;
  background-color: rgba(255, 255, 255, 0);
}

@media only screen and (min-width: 755px) {
  #indexHeader {
    transition: all 0.5s;
  }

  .logo {
    width: 45px;
    height: 40px;
    margin: 5px 0 10px 0;
  }

  .coker>a>h1 {
    font-size: 3rem !important;
    padding: 0;
    margin: 0;
  }

  .right_btn {
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .nheader {
    background-color: rgba(255, 255, 255, 0);
    width: 98vw;
    margin: 0 auto;
  }

  .header {
    position: fixed;
    top: -1px;
    z-index: 999;
    height: 50px;
    left: 9.5vw;
    width: 80vw;
    background-color: #f8f8f8;
  }
}

@media only screen and (max-width: 755px) {
  #indexHeader {
    position: fixed;
    width: 100vw;
    z-index: 999;
    top: 0;
    left: 0;
  }

  .logo {
    width: 34px;
    height: 28px;
    margin: 10px 0 10px 0;
  }

  .coker>a>h1 {
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
  }

  #navbar {
    position: absolute;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
  }

  .header {
    position: fixed;
    top: -1px;
    left: 0;
    z-index: 999;
    height: 50px;
    width: 100vw;
  }
}

@media only screen and (max-width: 370px) {
  .coker>a>h1 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 280px) {
  .logo {
    display: none;
  }

  .coker>a>h1 {
    font-size: 1.6rem;
  }
}
</style>
