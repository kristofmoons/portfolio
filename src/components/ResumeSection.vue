<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const cvUrl = `${import.meta.env.BASE_URL}images/cv.pdf`
const internships = [
  {
    title: 'resume.peoplewareTitle',
    description: 'resume.peopleware',
  },
  {
    title: 'resume.xpTitle',
    description: 'resume.xp',
  },
]
const highlights = ['bulletFrontend', 'bulletTracking', 'bulletCampaigns', 'bulletRegistration', 'bulletData', 'bulletIndependent']
</script>

<template>
  <section id="resume" class="page-section resume-section">
    <div class="resume-columns">
      <section class="resume-column" aria-labelledby="summary-title">
        <h2 id="summary-title" class="resume-column-title">{{ t('resume.summary') }}</h2>
        <div class="resume-timeline">
          <article class="timeline-entry">
            <span class="timeline-marker" aria-hidden="true"></span>
            <p class="entry-institution">Thomas More</p>
            <h3>{{ t('resume.degree') }}</h3>
            <p>{{ t('resume.education') }}</p>
          </article>
          <article v-for="internship in internships" :key="internship.title" class="timeline-entry internship-timeline-entry">
            <span class="timeline-marker" aria-hidden="true"></span>
            <h3>{{ t(internship.title) }}</h3>
            <p>{{ t(internship.description) }}</p>
          </article>
        </div>
      </section>

      <section class="resume-column" aria-labelledby="professional-title">
        <h2 id="professional-title" class="resume-column-title">{{ t('resume.professional') }}</h2>
        <div class="resume-timeline">
          <article class="timeline-entry">
            <span class="timeline-marker" aria-hidden="true"></span>
            <p class="entry-institution">{{ t('resume.dad') }}</p>
            <h3>{{ t('resume.role') }}</h3>
            <p>{{ t('resume.dadIntro') }}</p>
            <p>{{ t('resume.dadWork') }}</p>
            <p>{{ t('resume.highlights') }}</p>
            <ul class="experience-highlights">
              <li v-for="highlight in highlights" :key="highlight">{{ t(`resume.${highlight}`) }}</li>
            </ul>
            <p><strong>{{ t('resume.technologies') }}</strong> {{ t('resume.technologyList') }}</p>
          </article>
          <article class="timeline-entry future-timeline-entry">
            <span class="timeline-marker" aria-hidden="true"></span>
            <p class="entry-institution">{{ t('resume.cvLabel') }}</p>
            <h3>{{ t('resume.nextTitle') }}</h3>
            <a class="text-link" :href="cvUrl" target="_blank" rel="noreferrer">{{ t('resume.cv') }} <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>