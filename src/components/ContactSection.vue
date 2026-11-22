<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeading from './SectionHeading.vue'

const { t } = useI18n()
const formState = ref('idle')

function submitContact(event) {
  const formData = new FormData(event.currentTarget)
  const subject = String(formData.get('subject') || t('contact.subjectDefault'))
  const body = [
    `${t('contact.bodyName')}: ${formData.get('name')}`,
    `${t('contact.bodyEmail')}: ${formData.get('email')}`,
    `${t('contact.bodyPhone')}: ${formData.get('phone') || ''}`,
    '',
    String(formData.get('message') || ''),
  ].join('\n')
  window.location.href = `mailto:kristofmoons@hotmail.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  formState.value = 'sent'
}
</script>

<template>
  <section id="contact" class="page-section contact-section">
    <SectionHeading :eyebrow="t('contact.eyebrow')" :title="t('contact.title')" :description="t('contact.description')" />
    <div class="contact-grid">
      <div class="contact-details">
        <a class="contact-detail" href="mailto:kristofmoons@hotmail.be"><span>{{ t('contact.email') }}</span><strong>kristofmoons@hotmail.be</strong><i aria-hidden="true">↗</i></a>
        <a class="contact-detail" href="tel:+32468167053"><span>{{ t('contact.phone') }}</span><strong>+32 4 681 670 53</strong><i aria-hidden="true">↗</i></a>
        <div class="contact-detail"><span>{{ t('contact.address') }}</span><strong>Beekaardstraat 20<br>2570 Duffel</strong></div>
        <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.4358359003697!2d4.477981315733774!3d51.08921767957156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c612eeb7dbad%3A0xfde73b2c0c105f5d!2sBeekaardstraat%2020%2C%202570%20Duffel!5e0!3m2!1en!2sbe!4v1564399469071!5m2!1en!2sbe" :title="t('contact.map')" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <form class="contact-form" @submit.prevent="submitContact">
        <div class="form-row">
          <label>{{ t('contact.name') }}<input type="text" name="name" autocomplete="name" required></label>
          <label>{{ t('contact.email') }}<input type="email" name="email" autocomplete="email" required></label>
        </div>
        <label>{{ t('contact.phone') }}<input type="tel" name="phone" autocomplete="tel"></label>
        <label>{{ t('contact.subject') }}<input type="text" name="subject" required></label>
        <label>{{ t('contact.message') }}<textarea name="message" rows="5" required></textarea></label>
        <div class="form-submit">
          <p v-if="formState === 'sent'" role="status">{{ t('contact.sent') }}</p>
          <button class="button-primary" type="submit">{{ t('contact.send') }} <span aria-hidden="true">↗</span></button>
        </div>
      </form>
    </div>
  </section>
</template>