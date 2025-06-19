<template>
  <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-white text-2xl font-playfair">
          Artisan Aperture
        </NuxtLink>
        
        <div class="hidden md:flex space-x-8">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="text-white hover:text-gray-300 transition-colors font-opensans"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="isOpen = !isOpen"
          class="md:hidden text-white"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div 
        v-show="isOpen"
        class="md:hidden mt-4 space-y-4"
      >
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="block text-white hover:text-gray-300 transition-colors font-opensans"
          @click="isOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import MobileMenuIcon from '~/components/icons/MobileMenuIcon.vue'

const isOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
]
</script>