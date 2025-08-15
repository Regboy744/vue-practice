<template>
  <section
    class="mx-auto flex justify-center items-center flex-1 p-10 text-center -mt-20 min-h-[90vh]"
  >
    <div>
      <iconify-icon
        icon="lucide:triangle-alert"
        class="text-7xl text-destructive"
      />
      <h1 class="font-extrabold text-7xl text-secondary">
        {{ error.code }}
      </h1>

      <p class="text-3xl font-extrabold text-primary">{{ error.message }}</p>
      <div
        class="flex flex-col items-center justify-center gap-5 mt-6 font-light"
      >
        <p class="text-lg text-muted-foreground">
          You'll find lots to explore on the home page.
        </p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: string
  customCode: number
  statusCode: number
  isCustomError: boolean
}>()

const error = ref({
  code: 500,
  message: 'Something went wrong',
})

if (props.isCustomError) {
  error.value.code = props.customCode
  error.value.message = props.message
}

if (props.statusCode === 406) {
  error.value.code = 404
  error.value.message = 'Sorry we could not find this page'
}
</script>
