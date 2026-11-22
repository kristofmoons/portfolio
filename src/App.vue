<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCode,
  faEnvelope,
  faHouse,
  faUser,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const route = useRoute()
const { locale, t } = useI18n()
const menuOpen = ref(false)
const showScrollTop = ref(false)
const activeSection = ref('hero')
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

const isHome = computed(() => route.path === '/')
const navItems = [
  { id: 'hero', label: 'nav.home', icon: faHouse },
  { id: 'about', label: 'nav.about', icon: faUser },
  { id: 'skills', label: 'nav.skills', icon: faCode },
  { id: 'resume', label: 'nav.resume', icon: faWandMagicSparkles },
  { id: 'contact', label: 'nav.contact', icon: faEnvelope },
]

function setLocale(value) {
  locale.value = value
  window.localStorage.setItem('portfolio-locale', value)
}

function updateScrollState() {
  showScrollTop.value = window.scrollY > 100
  if (!isHome.value) return
  const sections = [{ id: 'hero' }, ...navItems].map(({ id }) => document.getElementById(id)).filter(Boolean)
  const current = sections.find((section) => {
    const bounds = section.getBoundingClientRect()
    return bounds.top <= 200 && bounds.bottom > 200
  })
  if (current) activeSection.value = current.id
}

function closeMenu() {
  menuOpen.value = false
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(() => route.fullPath, async () => {
  closeMenu()
  updateScrollState()
})

watch(locale, (value) => {
  document.documentElement.lang = value
  document.title = t('app.title')
})

onMounted(() => {
  document.documentElement.lang = locale.value
  document.title = t('app.title')
  window.addEventListener('scroll', updateScrollState, { passive: true })
  updateScrollState()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<template>
  <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="site-sidebar" @click="menuOpen = !menuOpen">
    <span>{{ menuOpen ? t('nav.close') : t('nav.menu') }}</span><span class="menu-toggle-icon" aria-hidden="true">{{ menuOpen ? '×' : '+' }}</span>
  </button>
  <div v-if="menuOpen" class="sidebar-scrim" aria-hidden="true" @click="closeMenu"></div>
  <header id="site-sidebar" class="site-sidebar" :class="{ 'is-open': menuOpen }">
    <div class="sidebar-inner">
      <div class="sidebar-profile">
        <img :src="assetUrl('images/profiel-navbar.png')" alt="Kristof Moons">
        <div class="sidebar-identity">
          <p class="sidebar-kicker">Portfolio</p>
          <RouterLink to="/" class="sidebar-name" @click="closeMenu">Kristof Moons</RouterLink>
          <p class="sidebar-location">{{ t('nav.location') }}</p>
        </div>
      </div>
      <div class="sidebar-quick-links">
        <div class="sidebar-socials" :aria-label="t('app.socials')">
          <a href="https://github.com/kristofmoons" aria-label="GitHub"><FontAwesomeIcon :icon="faGithub" /></a>
          <a href="https://www.linkedin.com/in/kristof-moons/" aria-label="LinkedIn"><FontAwesomeIcon :icon="faLinkedin" /></a>
        </div>
        <div class="language-switch" role="group" :aria-label="t('app.language')">
          <button type="button" :aria-pressed="locale === 'nl'" @click="setLocale('nl')">NL</button>
          <button type="button" :aria-pressed="locale === 'en'" @click="setLocale('en')">EN</button>
        </div>
      </div>
      <nav class="sidebar-nav" :aria-label="t('nav.accessibility')">
        <p class="sidebar-nav-label">{{ t('nav.label') }}</p>
        <RouterLink v-for="item in navItems" :key="item.id" :to="{ path: '/', hash: `#${item.id}` }" class="sidebar-link" :class="{ 'is-active': isHome && activeSection === item.id }" :aria-current="isHome && activeSection === item.id ? 'location' : undefined" @click="closeMenu">
          <FontAwesomeIcon class="sidebar-icon" :icon="item.icon" aria-hidden="true" />
          <span>{{ t(item.label) }}</span>
        </RouterLink>
      </nav>
      <div class="sidebar-footer">
        <div class="duck-sticker">
          <img :src="assetUrl('images/rubber-duck-clean.png')" :alt="t('app.duck')">
        </div>
      </div>
    </div>
  </header>

  <main class="site-main">
    <RouterView />
  </main>

  <button class="scroll-top" :class="{ 'is-visible': showScrollTop }" type="button" :aria-label="t('nav.scrollTop')" @click="scrollToTop">
    ↑
  </button>
</template>