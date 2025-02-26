export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        postsCache: {},
        lastFetch: null
    }),
    actions: {
      async fetchPosts() {
        if (this.lastFetch && Date.now() - this.lastFetch < 900000) {
          return;
        }
  
        const { data } = await useFetch('https://dummyjson.com/posts');
        this.posts = data.value.posts;
        this.lastFetch = Date.now();
        data.value.posts.forEach(post => {
          this.postsCache[post.id] = {
            data: post,
            timestamp: Date.now()
          };
        });
      },
  
      async fetchPost(id) {
        const cachedPost = this.postsCache[id];
        if (cachedPost && Date.now() - cachedPost.timestamp < 900000) {
          return cachedPost.data;
        }
        const { data } = await useFetch(`https://dummyjson.com/posts/${id}`);
        this.postsCache[id] = {
          data: data.value,
          timestamp: Date.now()
        };
        return data.value;
      }
    }
  });