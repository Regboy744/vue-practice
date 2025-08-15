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
        {{ customCode || code }}
      </h1>
      <p class="text-3xl font-extrabold text-primary" v-if="statusCode">
        Status Code: {{ statusCode }}
      </p>

      <p class="text-3xl font-extrabold text-primary">{{ message }}</p>
      <p v-if="hint">{{ hint }}</p>
      <p v-if="details">{{ details }}</p>
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
defineProps<{
  message: string
  customCode: number
  details: string
  code: string
  hint: string | null
  statusCode: number
}>()
</script>
