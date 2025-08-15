import type { CustomError, ExtendedPostgrestError } from '@/types/error'
import { PostgrestError } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)
  const isCustomError = ref(false)

  const setError = ({
    error,
    customCode,
  }: {
    error: string | PostgrestError | Error
    customCode?: number
  }) => {
    if (typeof error === 'string') isCustomError.value = true

    //Handle string error => When I manually pass the error
    if (typeof error === 'string' || error instanceof Error) {
      activeError.value = typeof error === 'string' ? Error(error) : error
      activeError.value.customCode = customCode || 500
      return
    }

    // Handle when the supabase gets an error
    if (error && typeof error === 'object') {
      ;(error as ExtendedPostgrestError).statusCode = customCode || 500
      activeError.value = error as ExtendedPostgrestError
      return
    }
  }

  const clearError = () => {
    activeError.value = null
    isCustomError.value = false
  }

  return {
    activeError,
    setError,
    isCustomError,
    clearError,
  }
})
