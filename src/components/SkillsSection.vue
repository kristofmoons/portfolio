<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
const skillGroups = [
  { title: 'skills.groups.web', skills: [{ name: 'HTML/CSS', value: 85 }, { name: 'JavaScript', value: 75 }] },
  { title: 'skills.groups.frontend', skills: [{ name: 'React', value: 85 }, { name: 'Vue', value: 80 }] },
  { title: 'skills.groups.languages', skills: [{ name: 'Java', value: 70 }, { name: 'C#', value: 65 }] },
  { title: 'skills.groups.typescript', skills: [{ name: 'TypeScript', value: 75 }] },
  { title: 'skills.groups.backend', skills: [{ name: 'Spring', value: 70 }, { name: 'Kysely', value: 70 }] },
  { title: 'skills.groups.data', skills: [{ name: 'SQL', value: 65 }, { name: 'Prisma', value: 70 }] },
  { title: 'skills.groups.tools', skills: [{ name: 'Docker', value: 65 }, { name: 'CLI', value: 70 }] },
  { title: 'skills.groups.crossPlatform', skills: [{ name: 'Flutter', value: 70 }] },
]
const skillItems = skillGroups.flatMap((group) => group.skills.map((skill) => ({ ...skill, group: group.title })))
const skillsPerPage = 6
const skillPages = Array.from({ length: Math.ceil(skillItems.length / skillsPerPage) }, (_, index) =>
  skillItems.slice(index * skillsPerPage, (index + 1) * skillsPerPage),
)
const skillsTrack = ref(null)
const activePage = ref(0)

function updateScrollControls() {
  const track = skillsTrack.value
  if (!track) return
  activePage.value = Math.min(Math.round(track.scrollLeft / track.clientWidth), skillPages.length - 1)
}

function scrollToPage(page) {
  skillsTrack.value?.scrollTo({ left: page * skillsTrack.value.clientWidth, behavior: 'smooth' })
}

onMounted(() => {
  updateScrollControls()
  window.addEventListener('resize', updateScrollControls)
})

onUnmounted(() => window.removeEventListener('resize', updateScrollControls))
</script>

<template>
  <section id="skills" class="page-section skills-section">
    <SectionHeading :eyebrow="t('skills.eyebrow')" :title="t('skills.title')" :description="t('skills.description')" />
    <div class="skills-carousel">
      <div
        ref="skillsTrack"
        class="skills-track"
        role="region"
        :aria-label="t('skills.listLabel')"
        tabindex="0"
        @scroll="updateScrollControls"
      >
        <section v-for="(page, pageIndex) in skillPages" :key="pageIndex" class="skill-page" :aria-label="t('skills.page', { page: pageIndex + 1 })">
          <article v-for="skill in page" :key="skill.name" class="skill-item">
            <h3>{{ skill.name }}</h3>
            <div class="skill-meter" role="meter" :aria-label="skill.name" :aria-valuenow="skill.value" aria-valuemin="0" aria-valuemax="100">
              <span :style="{ width: `${skill.value}%` }"></span>
            </div>
          </article>
        </section>
      </div>
      <div class="skills-pagination" role="group" :aria-label="t('skills.pagination')">
        <button
          v-for="(page, pageIndex) in skillPages"
          :key="pageIndex"
          type="button"
          class="skills-dot"
          :class="{ 'is-active': activePage === pageIndex }"
          :aria-label="t('skills.page', { page: pageIndex + 1 })"
          :aria-current="activePage === pageIndex ? 'page' : undefined"
          @click="scrollToPage(pageIndex)"
        ></button>
      </div>
    </div>
  </section>
</template>