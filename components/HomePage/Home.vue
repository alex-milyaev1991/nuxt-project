<template>
  <div id="home-page" style="max-width: 100vw; overflow-x: hidden">
    <presentation-section />

    <stress-effect-section />

    <best-seller-section />

    <v-container>
      <v-card class="ma-4">
        <v-card-title>Product Landing Pages</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="slug in ['vital', 'cinnamate', 'excell', 'renue', 'royal']"
              :key="slug"
              :to="'/p/' + slug"
            >
              <v-list-item-title class="text-capitalize">
                {{ slug }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>

    <!-- <our-story-section /> -->

    <!-- <what-we-do-differently /> -->

    <!-- <what-to-expect /> -->

    <!-- <improve-stress-response /> -->

    <!-- <fight-stress-section /> -->

    <!-- <subscribe-section :header-text="$t('subscribeSave')" /> -->

    <!-- <benefits-section /> -->

    <!-- Add 4px of negative margin to avoid gap between curve above -->
    <!-- <testimonials class="mt-n1" /> -->

    <!-- <faq :is-home="true" /> -->

    <!-- <ready-to-take-on-stress-section /> -->

    <!-- <client-only>
      <join-our-community-section />
    </client-only> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    PresentationSection: () =>
      import('~/components/HomePage/PresentationSection'),
    StressEffectSection: () =>
      import('~/components/HomePage/StressEffectSection'),
    BestSellerSection: () => import('~/components/HomePage/BestSellerSection'),
    // OurStorySection: () => import('~/components/HomePage/OurStorySection'),
    // WhatToExpect: () => import('~/components/HomePage/WhatToExpect'),
    // ImproveStressResponse: () =>
    //   import('~/components/HomePage/ImproveStressResponse'),
    // FightStressSection: () =>
    //   import('~/components/HomePage/FightStressSection'),
    // WhatWeDoDifferently: () =>
    //   import('~/components/HomePage/WhatWeDoDifferently'),
    // SubscribeSection: () =>
    //   import('~/components/HomePage/SubscribeSection.vue'),
    // BenefitsSection: () => import('~/components/HomePage/BenefitsSection'),
    // Testimonials: () => import('~/components/HomePage/Testimonials.vue'),
    // Faq: () => import('~/components/HomePage/Faq'),
    // JoinOurCommunitySection: () =>
    //   import('~/components/JoinOurCommunitySection'),
    // ReadyToTakeOnStressSection: () =>
    //   import('~/components/HomePage/ReadyToTakeOnStressSection'),
  },
}
</script>

<i18n>
  {
    "en": {
      "subscribeSave": "Subscribe and Save"
    },
    "es": {
      "subscribeSave": "Ahorra con tu SolleSuscription"
    }
  }
</i18n>
