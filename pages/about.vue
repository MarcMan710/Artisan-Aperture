<template>
  <div>
    <Navbar />
    
    <main class="pt-20">
      <!-- About Header -->
      <div class="bg-black text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-5xl font-playfair mb-6">About Me</h1>
          <p class="text-xl font-opensans max-w-2xl mx-auto">
            Capturing moments that tell your story
          </p>
        </div>
      </div>

      <!-- Bio Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="relative aspect-square">
              <img 
                src="/images/about/profile.jpg" 
                alt="Photographer Profile"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 class="text-4xl font-playfair mb-6">Hello, I'm [Your Name]</h2>
              <div class="prose prose-lg font-opensans">
                <p class="mb-4">
                  I'm a passionate photographer with over 10 years of experience capturing life's most precious moments. 
                  My journey in photography began when I received my first camera as a gift, and since then, I've been 
                  dedicated to perfecting my craft and creating timeless memories for my clients.
                </p>
                <p class="mb-4">
                  Specializing in wedding photography, portrait sessions, and nature photography, I strive to capture 
                  authentic emotions and create images that tell a story. My approach combines technical expertise 
                  with a keen eye for detail and composition.
                </p>
                <p>
                  When I'm not behind the camera, you can find me exploring new locations, experimenting with 
                  different photography techniques, and continuously learning to bring fresh perspectives to my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Instagram Feed -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-playfair text-center mb-12">Follow My Journey</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="post in instagramPosts" :key="post.id" class="relative aspect-square group">
              <img 
                :src="post.image" 
                :alt="post.caption"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center p-4">
                  <p class="font-opensans text-sm">{{ post.caption }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-8">
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank"
              class="inline-block bg-black text-white px-8 py-3 rounded-full font-opensans hover:bg-gray-800 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const instagramPosts = [
  {
    id: 1,
    image: '/images/instagram/post-1.jpg',
    caption: 'Sunset at the beach #naturephotography'
  },
  {
    id: 2,
    image: '/images/instagram/post-2.jpg',
    caption: 'Wedding day magic #weddingphotography'
  },
  {
    id: 3,
    image: '/images/instagram/post-3.jpg',
    caption: 'Urban portrait session #portraitphotography'
  },
  {
    id: 4,
    image: '/images/instagram/post-4.jpg',
    caption: 'Mountain landscapes #naturephotography'
  },
  {
    id: 5,
    image: '/images/instagram/post-5.jpg',
    caption: 'Corporate event coverage #eventphotography'
  },
  {
    id: 6,
    image: '/images/instagram/post-6.jpg',
    caption: 'Family portrait session #familyphotography'
  },
  {
    id: 7,
    image: '/images/instagram/post-7.jpg',
    caption: 'Product photography #commercialphotography'
  },
  {
    id: 8,
    image: '/images/instagram/post-8.jpg',
    caption: 'Behind the scenes #photography'
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