<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faImage, faLayerGroup, faRecycle, faUsers } from '@fortawesome/free-solid-svg-icons'
import SectionHeading from './SectionHeading.vue'

const filters = [
  { id: 'all', label: 'Alles' },
  { id: 'web', label: 'Web' },
  { id: 'app', label: 'Apps' },
]
const projects = [
  {
    category: 'app',
    label: 'Flutter / App',
    icon: faAppStore,
    title: 'Taste Trail',
    image: '/images/projecten/ReceptenApp/cdsds.svg',
    images: ['/images/projecten/ReceptenApp/cdsds.svg'],
    description: 'Voor een van mijn laatste schoolprojecten heb ik een receptenapp gemaakt met Flutter, wat mijn eerste ervaring was met deze toolkit. Het was een uitdagend project, maar ook een geweldige kans om nieuwe vaardigheden te leren en uit te breiden. Door deze app te maken, kon ik meer leren over de Flutter-widgets en -lay-outs. Met deze kennis ben ik van plan om meer apps te maken en mijn vaardigheden verder te ontwikkelen. Ik ben erg blij met het resultaat van mijn werk en kan niet wachten om het met anderen te delen.',
  },
  {
    category: 'web',
    label: 'Java Spring / Web',
    icon: faUsers,
    title: 'HY',
    image: '/images/projecten/HY/1.png',
    images: ['/images/projecten/HY/1.png', '/images/projecten/HY/2.png', '/images/projecten/HY/3.png'],
    description: 'Een project dat ik in team moest maken met 3 andere klasgenoten. De opdracht was een webapplicatie maken voor de studenten van Media en Entertainment Business. Hun missie was om een platform te creëren dat vreemdelingen helpt makkelijker in contact te komen met hun buurtbewoners. We hebben gebruikgemaakt van Java Spring om de applicatie tot leven te brengen.',
  },
  {
    category: 'web',
    label: 'Java Spring / Web',
    icon: faRecycle,
    title: 'Repairaza',
    image: '/images/projecten/repairaza/1.png',
    images: ['/images/projecten/repairaza/1.png', '/images/projecten/repairaza/2.png', '/images/projecten/repairaza/3.png'],
    description: 'Dit project was om ons aan te leren hoe Java Spring werkt. We mochten zelf een thema kiezen en moesten dit proberen te realiseren. Omdat veel mensen graag naar restauratieprogramma\'s op tv kijken, had ik besloten om een site te maken waar u uw oude spullen kunt brengen om ze nieuw leven in te blazen.',
  },
]

const activeFilter = ref('all')
const visibleProjects = computed(() => activeFilter.value === 'all'
  ? projects
  : projects.filter((project) => project.category === activeFilter.value))
const activeProject = ref(null)
const activeImageIndex = ref(0)
const activeImage = computed(() => activeProject.value?.images[activeImageIndex.value])

function showGallery(project, imageIndex = 0) {
  activeProject.value = project
  activeImageIndex.value = imageIndex
}

function closeGallery() {
  activeProject.value = null
}

function handleKeydown(event) {
  if (!activeProject.value) return
  if (event.key === 'Escape') closeGallery()
  if (event.key === 'ArrowRight') activeImageIndex.value = (activeImageIndex.value + 1) % activeProject.value.images.length
  if (event.key === 'ArrowLeft') activeImageIndex.value = (activeImageIndex.value - 1 + activeProject.value.images.length) % activeProject.value.images.length
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <section id="portfolio" class="page-section projects-section">
    <SectionHeading eyebrow="Geselecteerd werk" title="Projecten" description="Een selectie van school- en teamprojecten waaraan ik met verschillende technologieën heb gewerkt." />
    <div class="project-toolbar">
      <span class="project-total"><FontAwesomeIcon :icon="faLayerGroup" aria-hidden="true" /> Projecten</span>
      <div class="filter-list" role="group" aria-label="Filter projecten">
        <button v-for="filter in filters" :key="filter.id" type="button" :aria-pressed="activeFilter === filter.id" @click="activeFilter = filter.id">{{ filter.label }}</button>
      </div>
    </div>
    <div class="project-grid">
      <article v-for="project in visibleProjects" :key="project.title" class="project-item">
        <button class="project-cover" type="button" :aria-label="`Bekijk afbeeldingen van ${project.title}`" @click="showGallery(project)">
          <img :src="project.image" :alt="`${project.title} project`">
          <span class="project-open" aria-hidden="true">↗</span>
        </button>
        <div class="project-copy">
          <p class="project-label"><FontAwesomeIcon :icon="project.icon" aria-hidden="true" />{{ project.label }}</p>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div v-if="project.images.length > 1" class="project-thumbnails" :aria-label="`Meer afbeeldingen van ${project.title}`">
            <button v-for="(image, imageIndex) in project.images" :key="image" type="button" :aria-label="`${project.title}, afbeelding ${imageIndex + 1}`" @click="showGallery(project, imageIndex)">
              <img :src="image" :alt="`${project.title}, afbeelding ${imageIndex + 1}`">
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="activeProject" class="gallery-dialog" role="dialog" aria-modal="true" :aria-label="`Afbeeldingen van ${activeProject.title}`" @click.self="closeGallery">
      <button class="gallery-close" type="button" aria-label="Sluiten" @click="closeGallery">×</button>
      <button v-if="activeProject.images.length > 1" class="gallery-arrow gallery-previous" type="button" aria-label="Vorige afbeelding" @click="handleKeydown({ key: 'ArrowLeft' })">←</button>
      <figure class="gallery-figure">
        <img :src="activeImage" :alt="`${activeProject.title}, afbeelding ${activeImageIndex + 1}`">
        <figcaption>
          {{ activeProject.title }}
          <span class="gallery-position" :aria-label="`Afbeelding ${activeImageIndex + 1} van ${activeProject.images.length}`">
            <FontAwesomeIcon v-for="(_, index) in activeProject.images" :key="index" :icon="faImage" :class="{ 'is-current': index === activeImageIndex }" aria-hidden="true" />
          </span>
        </figcaption>
      </figure>
      <button v-if="activeProject.images.length > 1" class="gallery-arrow gallery-next" type="button" aria-label="Volgende afbeelding" @click="handleKeydown({ key: 'ArrowRight' })">→</button>
    </div>
  </Teleport>
</template>