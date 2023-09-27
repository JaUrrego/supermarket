<template>
    <NavbarHome />
    
    <div class="top-4 left-4">
        <button class="btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-big-left-filled"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z"
                    stroke-width="0"
                    fill="currentColor"
                ></path>
            </svg>
        </button>
    </div>
    <div class="flex justify-center">
        <div class="card bg-warning">
            <div class="card-body">
                <div class="flex justify-around">
                    <div class="card border w-80 bg-base-100 shadow-lg">
                        <figure class="px-10 pt-10">
                            <img
                                src="https://www.millerchemical.com/es/wp-content/uploads/sites/2/2021/03/iStock-1184345169.png"
                                alt="Shoes"
                                class="rounded-xl"
                            />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Cebolla</h2>
                            <p class="font-bold">$ 12.000</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center mx-10">
                        <h4 class="text-3xl">Cebolla</h4>
                        <div class="flex justify-center">
                            <span class="text-xl font-normal">-5%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <FooterOsak />
</template>

<script setup lang="ts">
import FooterOsak from '@/shared/components/FooterOsak.vue'
import NavbarHome from '../components/NavbarHome.vue'
</script>

<style scoped></style>
