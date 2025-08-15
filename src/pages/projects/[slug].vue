<template>
  <Table v-if="project">
    <TableRow>
      <TableHead> Name </TableHead>
      <TableCell> {{ project?.name }}</TableCell>
    </TableRow>
    <TableRow>
      <TableHead> Description </TableHead>
      <TableCell> {{ project?.description }} </TableCell>
    </TableRow>
    <TableRow>
      <TableHead> Status </TableHead>
      <TableCell>{{ project?.status }}</TableCell>
    </TableRow>
    <TableRow>
      <TableHead> Collaborators </TableHead>
      <TableCell>
        <div class="flex">
          <Avatar
            class="-mr-4 border border-primary hover:scale-110 transition-transform"
            v-for="colab in project.collaborators"
            :key="colab"
          >
            <RouterLink
              class="w-full h-full flex items-center justify-center"
              to=""
            >
              <AvatarImage src="" alt="" />
              <AvatarFallback> </AvatarFallback>
            </RouterLink>
          </Avatar>
        </div>
      </TableCell>
    </TableRow>
  </Table>

  <section
    v-if="project"
    class="mt-10 flex flex-col md:flex-row gap-5 justify-between grow"
  >
    <div class="flex-1">
      <h2>Tasks</h2>
      <div class="table-container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Name </TableHead>
              <TableHead> Status </TableHead>
              <TableHead> Due Date </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="task in project?.tasks" :key="task.id">
              <TableCell> {{ task.name }} </TableCell>
              <TableCell> {{ task.status }} </TableCell>
              <TableCell> {{ task.due_date }} </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    <div class="flex-1">
      <h2>Documents</h2>
      <div class="table-container">
        <p class="text-muted-foreground text-sm font-semibold px-4 py-3">
          This project doesn't have documents yet...
        </p>
        <!-- <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Name </TableHead>
              <TableHead> Visibility </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell> Lorem ipsum dolor sit amet. </TableCell>
              <TableCell> Private </TableCell>
            </TableRow>
          </TableBody>
        </Table> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import { singleProjectQuery, type SingleProjectType } from '@/utils/supaQueries'
const route = useRoute('/projects/[slug]')

const project = ref<SingleProjectType | null>(null)

watch(
  () => project.value?.name,
  () => {
    usePageStore().pageData.title = `Project ${project.value?.name || ''}`
  },
)

const getProject = async () => {
  const { data, error } = await singleProjectQuery(route.params.slug)

  if (error) console.log(error)

  project.value = data
}

await getProject()
</script>

<style scoped>
th {
  width: 100px;
  /* Or use: width: var(--width-25); for 100px equivalent */
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  width: fit-content;
}

.table-container {
  overflow: hidden;
  overflow-y: auto;
  border-radius: 0.375rem;
  background-color: rgb(15 23 42);
  height: 20rem;
}

td {
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal; /* Override any nowrap */
}
</style>
