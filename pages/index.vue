<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative h-screen">
      <div class="absolute inset-0">
        <div class="relative h-full">
          <div v-for="(slide, index) in slides" :key="index"
            class="absolute inset-0 transition-opacity duration-1000"
            :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }"
          >
            <img 
              :src="slide.image" 
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>
      
      <div class="relative h-full flex items-center justify-center text-center text-white">
        <div class="max-w-3xl px-4">
          <h1 class="text-5xl md:text-7xl font-playfair mb-6">
            Capturing Life's Beautiful Moments
          </h1>
          <p class="text-xl md:text-2xl font-opensans mb-8">
            Professional Photography Services
          </p>
          <NuxtLink 
            to="/portfolio"
            class="inline-block bg-white text-black px-8 py-3 rounded-full font-opensans hover:bg-gray-100 transition-colors"
          >
            View Portfolio
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Works -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-playfair text-center mb-12">Featured Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="work in featuredWorks" :key="work.id" class="group relative overflow-hidden">
            <img 
              :src="work.image" 
              :alt="work.title"
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-white text-center">
                <h3 class="text-2xl font-playfair mb-2">{{ work.title }}</h3>
                <p class="font-opensans">{{ work.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const currentSlide = ref(0)

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Wedding Photography'
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Portrait Sessions'
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Nature Photography'
  }
]

const featuredWorks = [
  {
    id: 1,
    title: 'Sunset Wedding',
    category: 'Wedding',
    image: '/images/featured-1.jpg'
  },
  {
    id: 2,
    title: 'Urban Portrait',
    category: 'Portrait',
    image: '/images/featured-2.jpg'
  },
  {
    id: 3,
    title: 'Mountain Landscape',
    category: 'Nature',
    image: '/images/featured-3.jpg'
  }
]

// Auto-advance slideshow
onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-opensans {
  font-family: 'Open Sans', sans-serif;
}
</style> 