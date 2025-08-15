<template>
  <div>
    <div v-if="projects">
      <DataTable :columns="columns" :data="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useErrorStore } from '@/stores/error'
import { usePageStore } from '@/stores/page'
import { projectsQuery } from '@/utils/supaQueries'
import type { ProjectsType } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'

const projects = ref<ProjectsType | null>(null)

usePageStore().pageData.title = 'Projects'

const getProjects = async () => {
  const { data, error, status } = await projectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  projects.value = data
}

await getProjects()
</script>

<style scoped>
:deep(td) {
  padding: 0;
}

:deep(td > *) {
  padding: 16px;
}
</style>
