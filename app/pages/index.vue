<script setup lang="ts">
    import { type RecipeResponse } from "../../types/types";
    const { data, error } = await useFetch<RecipeResponse>("https://dummyjson.com/recipes?limit=12");

    definePageMeta({
        layout: 'default',
    });
</script>

<template>
    <main>
        <section class="bg-[#f1f1f1]">
            <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
                <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
                    <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
                        Master the Kitchen with Ease: Unleash Your Inner Chef Today!
                    </h1>
                    <p class="text-xl lg:text-2xl mb-8 text-balance">
                        Discover recipes helping you to find the easiest way to cook.
                    </p>
                    <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
                        Browse Recipes
                    </button>
                </div>
                <div class="flex-1 order-1 lg:order-2">
                    <NuxtImg
                        sizes="xs:100vw sm:667px"
                        src="/nuxt-course-hero.png"
                        format="webp"
                        densities="x1"
                        alt=""
                    />
                </div>
            </div>
        </section>
        <section class="py-20 container">
            <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
            <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
                <div v-for="recipe in data?.recipes" :key="recipe.id" class="flex flex-col shadow rounded-md">
                    <img :src="recipe.image" class="rounded-t-md" alt="Recipe Image" />
                    <div class="flex flex-col p-6 px-4 flex-1">
                        <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
                        <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
                            <div class="flex items-center gap-1">
                                <icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                                <span>{{ recipe.cookTimeMinutes }} mins</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <icon name="mdi:fire" style="color: #f79f1a" />
                                <span>{{ recipe.caloriesPerServing }} kcal</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <icon name="mdi:star" style="color: #f79f1a" />
                                <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
                            </div>
                        </div>
                        <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg cursor-pointer">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>