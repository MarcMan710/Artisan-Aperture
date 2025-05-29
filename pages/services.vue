<template>
  <div>
    <Navbar />
    
    <main class="pt-20">
      <!-- Services Header -->
      <div class="bg-black text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl font-playfair mb-6">Services</h1>
          <p class="text-xl font-opensans max-w-2xl mx-auto">
            Professional photography services tailored to your needs
          </p>
        </div>
      </div>

      <!-- Services List -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="relative aspect-video">
                <img 
                  :src="service.image" 
                  :alt="service.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-playfair mb-4">{{ service.title }}</h3>
                <p class="text-gray-600 font-opensans mb-6">{{ service.description }}</p>
                <ul class="space-y-3 mb-8">
                  <li v-for="feature in service.features" :key="feature" class="flex items-center text-gray-700 font-opensans">
                    <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
                <div class="text-center">
                  <p class="text-3xl font-playfair mb-4">${{ service.price }}</p>
                  <a 
                    href="/contact"
                    class="inline-block bg-black text-white px-8 py-3 rounded-full font-opensans hover:bg-gray-800 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing PDF Download -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-playfair mb-6">Download Full Pricing Guide</h2>
          <p class="text-xl font-opensans mb-8 max-w-2xl mx-auto">
            Get detailed information about all our services and packages in our comprehensive pricing guide.
          </p>
          <a 
            href="/pricing-guide.pdf"
            download
            class="inline-flex items-center bg-black text-white px-8 py-3 rounded-full font-opensans hover:bg-gray-800 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capture your special day with our comprehensive wedding photography package.',
    image: '/images/services/wedding.jpg',
    price: '2500',
    features: [
      'Full day coverage (8 hours)',
      'Engagement session',
      'Online gallery',
      '100+ edited photos',
      'USB with all images'
    ]
  },
  {
    id: 2,
    title: 'Portrait Sessions',
    description: 'Professional portrait photography for individuals, couples, and families.',
    image: '/images/services/portrait.jpg',
    price: '350',
    features: [
      '1-hour session',
      'Location of your choice',
      'Online gallery',
      '20 edited photos',
      'Print release'
    ]
  },
  {
    id: 3,
    title: 'Product Photography',
    description: 'High-quality product photography for your business or e-commerce.',
    image: '/images/services/product.jpg',
    price: '150',
    features: [
      'Up to 5 products',
      'White background',
      'Multiple angles',
      'Basic retouching',
      'Fast turnaround'
    ]
  }
]
</script>

<style scoped>
.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-opensans {
  font-family: 'Open Sans', sans-serif;
}
</style> 