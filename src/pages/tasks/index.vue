<template>
  <div>
    <div v-if="tasks">
      <DataTable :columns="columns" :data="tasks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { useErrorStore } from '@/stores/error'
import { usePageStore } from '@/stores/page'
import {
  tasksProjectsQuery,
  type TasksAndProjectsType,
} from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<TasksAndProjectsType | null>(null)

const getTasks = async () => {
  const { data, error, status } = await tasksProjectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  tasks.value = data
}
await getTasks()
// useErrorStore().setError({ error: Error('I am un uncought error') })
</script>

<style scoped>
:deep(td) {
  padding: 0;
}

:deep(td > *) {
  padding: 16px;
}
</style>
