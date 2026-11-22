<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="page-section about-section">
    <SectionHeading
      :eyebrow="t('about.eyebrow')"
      :title="t('about.title')"
    />
    <div class="about-content">
      <div class="about-facts">
        <div class="about-bio">
          <p>{{ t('about.paragraphs.0') }}</p>
          <p>{{ t('about.paragraphs.1') }}</p>
          <p>{{ t('about.paragraphs.2') }}</p>
        </div>
        <div class="about-social-grid">
          <article class="about-social-entry">
            <h3><FontAwesomeIcon :icon="faGithub" aria-hidden="true" /> GitHub</h3>
            <p>{{ t('about.githubText') }}</p>
            <a class="text-link" href="https://github.com/kristofmoons">github.com/kristofmoons <span aria-hidden="true">↗</span></a>
          </article>
          <article class="about-social-entry">
            <h3><FontAwesomeIcon :icon="faLinkedin" aria-hidden="true" /> LinkedIn</h3>
            <p>{{ t('about.linkedinText') }}</p>
            <a class="text-link" href="https://www.linkedin.com/in/kristof-moons/">linkedin.com/in/kristof-moons <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
