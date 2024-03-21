<template>
  <v-card class="redirect-enrollment py-4" color="#f4f4f4">
    <v-card-title class="subtitle_color text-h4">
      {{ $t('instructionsTitle') }}
    </v-card-title>
    <v-card-text class="solleBlack--text">
      {{ member ? $t('instructionsMember1') : $t('instructionsSpecialist1') }}
      <strong>{{ $t('instructionsShared') }}</strong>
      <br />
      {{ member ? $t('instructionsMember2') : $t('instructionsSpecialist2') }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        @click="member ? enrollMember() : enrollSpecialist()"
      >
        {{
          member
            ? $t('nav.specialist.enrollMbr')
            : $t('nav.specialist.enrollSpc')
        }}
      </v-btn>
      <v-btn color="#d8d8d8" @click="closeModal()">
        {{ $t('cancel') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'RedirectEnrollment2',
  props: {
    member: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    enrollMember() {
      this.$router.push('/logout-redirect-member')
      //logout and send to replicate site shopping page
    },
    enrollSpecialist() {
      this.$router.push('/logout-redirect-specialist')
      //logout and send to replicate site signup page
    },
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped>
.redirect-enrollment {
  border: none !important;
  border-radius: 0px !important;
}
.subtitle_color {
  color: #a0a6b1;
}
</style>

<i18n>
{
  "en": {
    "cancel": "Cancel",
    "instructionsTitle": "This is exciting!",
    "instructionsMember1": "To continue enrolling a new member,",
    "instructionsSpecialist1": "To continue enrolling a new specialist,",
    "instructionsShared": " click the button below. This will log you out of your account and redirect you to your replicate site.",
    "instructionsMember2": " You can then place an order and complete the new member enrollment. This guarantees that the newly enrolled member will be properly placed in your organization.",
    "instructionsSpecialist2": " You will then be able to enter in their information and place an order to complete the enrollment from there. This guarantees that the newly enrolled specialist will be properly placed in your organization."
  },
  "es": {
    "cancel": "Regresar",
    "instructionsTitle": "¡Esto es emocionante!",
    "instructionsMember1": "Para inscribir a un Miembro,",
    "instructionsSpecialist1": "Para inscribir a un Especialista,",
    "instructionsShared": " haz clic aquí. Esto te hará salir de tu cuenta y te llevará a tu sitio replicado.",
    "instructionsMember2": " Luego puedes completar la orden y la inscripción del nuevo miembro. Esto garantiza que el nuevo miembro estará puesto correctamente en tú organización.",
    "instructionsSpecialist2": " Luego puedes meter la información del especialista y hacer la orden y completar la inscripción. Esto garantiza que el nuevo especialista estará puesto correctamente en tú organización."
  }
}
</i18n>
