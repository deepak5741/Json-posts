<template>
  <div class="container mx-auto p-4">
    <button 
      @click="$router.back()"
      class="mb-6 text-blue-600 hover:text-blue-800 cursor-pointer"
    >
      ← Back to Posts
    </button>
    
    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="post" class="bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-700 mb-6">{{ post.body }}</p>
      <div class="flex gap-2">
        <span 
          v-for="tag in post.tags"
          :key="tag"
          class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div v-else class="text-center">Post not found</div>
  </div>
</template>

<script setup>
const route = useRoute();
const postsStore = usePostsStore();

const post = ref(null);
const pending = ref(true);

const { data } = await useAsyncData(
  `post-${route.params.id}`,
  async () => {

      const postData = await postsStore.fetchPost(route.params.id);
    return postData;
  }
);

post.value = data.value;
pending.value = false;
</script>