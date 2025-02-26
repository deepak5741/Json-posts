<template>
  <article 
    class="p-6 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    @click="$router.push(`/posts/${post.id}`)"
  >
    <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
    <p class="text-gray-600">{{ post.body }}</p>
    <div class="mt-4 flex gap-2">
      <span 
        v-for="tag in post.tags"
        :key="tag"
        class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>