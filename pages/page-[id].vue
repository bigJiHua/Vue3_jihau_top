<script setup>
import {} from 'vue'
</script>

<template>
  <div id="" class="article">
    <div class="leftContent">
      <h1 v-show="goodpage" style="text-align: center">
        404 NOT FOUNT
      </h1>
      <div v-show="!goodpage">
        <div class="content">
          <p v-highlight v-html="ArticleData.article.content" />
        </div>
        <div class="tabmenu">
          <ul>
            <li v-for="(item, index) in tab" :key="index">
              {{ item }}
            </li>
          </ul>
          <ul>
            <li>{{ ArticleData.article.title }}</li>
            <li>{{ ArticleData.article.username }}</li>
            <li>{{ ArticleData.article.pub_date }}</li>
            <li>{{ ArticleData.article.lable }}</li>
          </ul>
        </div>
      </div>
    </div>
    <RightM />
  </div>
</template>

<style scoped></style>
