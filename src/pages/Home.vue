<template>
  <div id="home">
    <!-- 页面内容 -->
    <main class="home-main">

      <!-- 第一屏： Threejs粒子动画-->
      <section class="panel hero-panel" ref="heroPanel">
        <div class="hero-content">
          <h1 class="hero-title">My Cat Visual Project</h1>
          <p class="hero-subtitle">A Visual Journey with My Cat</p>
        </div>
        <!-- Threejs canvas容器 -->
        <div class="three-hero" ref="threeHero"></div>
      </section>

      <!-- 第二屏：图片画廊 -->
      <section class="panel gallery-panel" ref="galleryPanel">
        <h2 class="section-title">Cat Gallery</h2>
        <div class="gallery-grid">
          <!-- test -->
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
          <div class="gallery-item"></div>
        </div>
      </section>

      <!-- 第三屏：第二个threejs -->
      <section class="panel three-panel" ref="threePanel">
        <h2 class="section-title">Interactive Particles</h2>
        <div class="three-second" ref="threeSecond"></div>
      </section>

      <!-- 第四屏：视频 -->
      <section class="panel video-panel">
        <div class="video-content">

          <div>Test</div>

          <!-- Footer -->
          <footer class="home-footer">
            © 2026 My Cat Visual Project
          </footer>

        </div>
      </section>
    </main>

  </div>
</template>

<script setup lang="ts">
// 路由进度条
import NProgress from "nprogress"
import "nprogress/nprogress.css"

import { onMounted } from "vue"
import { useRouter } from "vue-router"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const router = useRouter()

// 配置进度条
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100
})

// 路由钩子控制进度条
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

// Three.js 初始化入口
onMounted(() => {
  // 标题动画
  gsap.from(".hero-title", {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero-panel",
      start: "top center"
    }
  })

  // Gallery 动画
  gsap.from(".gallery-item", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".gallery-panel",
      start: "top center"
    }
  })

  // 第二个threejs标题动画
  gsap.from(".three-panel .section-title", {
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
      trigger: ".three-panel",
      start: "top center"
    }
  })

  /* Video 淡入 */
  // gsap.from(".video-player", {
  //   opacity: 0,
  //   scale: 0.9,
  //   scrollTrigger: {
  //     trigger: ".video-panel",
  //     start: "top center"
  //   }
  // })

})
</script>

<style lang="scss">
/* ======================
   全局布局
====================== */

#home {
  width: 100%;
  height: 100%;
}

/* ======================
   主内容区
====================== */

.home-main {
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;

  // 一屏一屏滚动
  scroll-snap-type: y mandatory;

  ::-webkit-scrollbar {
    display: none;
  }
}

/* ======================
   每个板块
====================== */

.panel {
  height: 100vh;
  width: 100%;

  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}

// 第一屏 粒子区域
.hero-panel {
  background: #0f0f0f;
}

.hero-content {
  z-index: 2;
  text-align: center;
}

.hero-title {
  font-size: 64px;
  font-weight: blod;
}

.hero-subtitle {
  margin-top: 20px;
  opacity: 0.7;
}

.three-hero {
  position: absolute;
  inset: 0;
  z-index: 1;
}

// 第二屏 Gallery

.gallery-panel {
  background: #111;
  flex-direction: column;
}

.section-title {
  font-size: 42px;
  margin-bottom: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 70%;
}

.gallery-item {
  height: 200px;
  background: #333;
  border-radius: 10px;
}

// 第三屏 第二个three区域

.three-panel {
  background: #0b0b0b;
  flex-direction: column;
}

.three-second {
  width: 800px;
  height: 400px;
}

// 第四屏 视频区域
.video-panel {
  background: black;
  flex-direction: column;
}

.video-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ======================
   Footer
====================== */
.home-footer {
  text-align: center;
  color: #fff;
  padding: 40px 0;
  opacity: 0.6;
}
</style>