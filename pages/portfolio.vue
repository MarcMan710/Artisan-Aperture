<template>
  <div>
    <Navbar />
    
    <main class="pt-20 pb-16">
      <!-- Portfolio Header -->
      <div class="bg-black text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl font-playfair mb-6">Portfolio</h1>
          <p class="text-xl font-opensans max-w-2xl mx-auto">
            Explore my collection of photographs across different categories
          </p>
        </div>
      </div>

      <!-- Filter Buttons -->
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2 rounded-full font-opensans transition-colors"
            :class="selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="item in filteredGallery" 
            :key="item.id"
            class="group cursor-pointer"
            @click="openLightbox(item)"
          >
            <div class="relative overflow-hidden aspect-square">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center">
                  <h3 class="text-2xl font-playfair mb-2">{{ item.title }}</h3>
                  <p class="font-opensans">{{ item.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Lightbox -->
    <div 
      v-if="selectedImage"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      @click="closeLightbox"
    >
      <div class="relative max-w-7xl max-h-[90vh] mx-4">
        <img 
          :src="selectedImage.image" 
          :alt="selectedImage.title"
          class="max-h-[90vh] object-contain"
        />
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref('All')
const selectedImage = ref(null)

const categories = ['All', 'Weddings', 'Portraits', 'Nature', 'Events']

const gallery = [
  {
    id: 1,
    title: 'Sunset Wedding',
    category: 'Weddings',
    image: '/images/portfolio/wedding-1.jpg'
  },
  {
    id: 2,
    title: 'Urban Portrait',
    category: 'Portraits',
    image: '/images/portfolio/portrait-1.jpg'
  },
  {
    id: 3,
    title: 'Mountain Landscape',
    category: 'Nature',
    image: '/images/portfolio/nature-1.jpg'
  },
  {
    id: 4,
    title: 'Corporate Event',
    category: 'Events',
    image: '/images/portfolio/event-1.jpg'
  },
  // Add more gallery items as needed
]

const filteredGallery = computed(() => {
  if (selectedCategory.value === 'All') {
    return gallery
  }
  return gallery.filter(item => item.category === selectedCategory.value)
})

const openLightbox = (item) => {
  selectedImage.value = item
}

const closeLightbox = () => {
  selectedImage.value = null
}
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-opensans {
  font-family: 'Open Sans', sans-serif;
}
</style> 