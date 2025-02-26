<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-8">All Posts</h1>
    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else>
      <PostCard 
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup>
const postsStore = usePostsStore();
const { posts } = storeToRefs(postsStore);
const { pending } = await useAsyncData(() => postsStore.fetchPosts());
</script>