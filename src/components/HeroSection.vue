<template>
  <section id="hero" class="hero-section">
    <div class="hero-copy">
      <p class="eyebrow"><span class="eyebrow-mark"></span> {{ $t('hero.eyebrow') }} <span class="eyebrow-divider">/</span> {{ $t('hero.location') }}</p>
      <h1>Kristof <span>Moons</span></h1>
      <p class="hero-intro">{{ $t('hero.introBefore') }} <strong>{{ $t('hero.role') }}</strong>{{ $t('hero.introAfter') }}</p>
      <a class="text-link hero-link" href="#summary-title">{{ $t('hero.link') }} <span aria-hidden="true">↘</span></a>
    </div>
  </section>
</template>