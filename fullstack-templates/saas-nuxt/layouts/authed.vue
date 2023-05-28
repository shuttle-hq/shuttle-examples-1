<template>
  <div class="min-h-screen flex-col items-center">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import { useAccountStore } from '@/stores/account'
import Navbar from '@/components/navbar.vue'

const router = useRouter()
const route = useRoute()
const accountStore = useAccountStore()

const checkUserStatus = () => {
  if (route.fullPath.includes("/dashboard") && !accountStore.email) {
    router.push('/login')
  }
}

watchEffect(checkUserStatus)

</script>

