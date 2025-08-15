import { supabase } from '@/lib/supabaseClient'
import { useAuthStore } from '@/stores/auth'
import type { LoginForm, RegisterForm } from '@/types/supaAuth'

const authStore = useAuthStore()

// Handle loging process on the register.vue file
export const register = async (formData: RegisterForm) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  })

  if (error) console.log(error)

  if (data.user) {
    const {} = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.userName,
      full_name: formData.firstName + ' ' + formData.lastName,
    })

    if (error) return console.log('Profiles err: ', error)
  }

  authStore.setAuth(data.session)

  return true
}

// Handle login on the login.vue file

export const loginAuth = async (formData: LoginForm) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if (error) return console.log('Something went wrong', error)

  authStore.setAuth(data.session)
  return true
}
