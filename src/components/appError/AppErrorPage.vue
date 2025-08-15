<template>
  <ErrorTemplate
    :message
    :customCode
    :details
    :code
    :hint
    :statusCode
    :isCustomError="errorStore.isCustomError"
  />
</template>

<script setup lang="ts">
import { useErrorStore } from '@/stores/error'

const router = useRouter()

//It gets the whole useErroStore returnes
const errorStore = useErrorStore()

//Gets the activeErrro current state and assignes to error
const error = ref(errorStore.activeError)

// Create the ref that will be assigend with the data from
// the store

const message = ref('')
const customCode = ref(0)
const details = ref('')
const code = ref('')
const hint = ref('')
const statusCode = ref(0)

// if error that comes from the store  has something than it
// will assing to the message and customCode reactive
// variables.

if (error.value && !('code' in error.value)) {
  console.log('string error')
  message.value = error.value.message
  customCode.value = error.value.customCode ?? 0
}

if (error.value && 'code' in error.value) {
  message.value = error.value.message
  details.value = error.value.details
  hint.value = error.value.hint
  code.value = error.value.code
  statusCode.value = error.value.statusCode ?? 0
}

router.afterEach(() => {
  errorStore.clearError()
})

const ErrorTemplate = import.meta.env.DEV
  ? defineAsyncComponent(() => import('./AppErrorDevSection.vue'))
  : defineAsyncComponent(() => import('./AppErrorProduction.vue'))
</script>
