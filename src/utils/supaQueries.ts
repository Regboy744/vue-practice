import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

// Tasks query plus nested projects
//
export const tasksProjectsQuery = supabase.from('tasks').select(`
  *,
  projects(
    id,
    name,
    slug
  )
  `)

export type TasksAndProjectsType = QueryData<typeof tasksProjectsQuery>

// Projects query
//
export const projectsQuery = supabase.from('projects').select(`*`)
export type ProjectsType = QueryData<typeof projectsQuery>

// Single project query
//
export const singleProjectQuery = (slug: string) => {
  return supabase
    .from('projects')
    .select(`*,tasks( id, name, status,  due_date ) `)
    .eq('slug', slug)
    .single()
}
export type SingleProjectType = QueryData<ReturnType<typeof singleProjectQuery>>

// Single Task query
//
export const singleTaskQuery = (id: number) => {
  return supabase
    .from('tasks')
    .select(`*, projects(id, name, slug)`)
    .eq('id', id)
    .single()
}

export type SingleTaskType = QueryData<ReturnType<typeof singleTaskQuery>>
