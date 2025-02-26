<template>
    <div class="bg-amber-200 h-screen flex items-center justify-center text-center">
        <nav class="p-4">
            <NuxtLink 
                to="/posts" 
                class="text-black hover:text-blue-300 text-xl  transition duration-300 ease-in-out transform hover:scale-110    "
            >
                Posts
            </NuxtLink>
        </nav>
        <NuxtPage />
    </div>
</template>

