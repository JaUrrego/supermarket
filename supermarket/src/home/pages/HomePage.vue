<template>
    <NavbarHome />

    <div class="flex justify-center items-center mt-20">
        <div class="carousel max-w-7xl">
            <div id="slide1" class="carousel-item relative w-full flex justify-center items-center">
                <div
                    class="w-[48rem] border p-10 bg-[url('/src/assets/fondo-slider.png')] bg-[length:200px_200px] bg-right-bottom bg-no-repeat bg-gray-200"
                >
                    <p class="text-justify text-3xl">
                        En OSAK, hemos llevado a la experiencia de compra de productos del campo sin
                        intermediarios directamente a tu pantalla. Nuestra plataforma en línea está
                        diseñada para ofrecerle la máxima calidad y frescura en cada producto, sin
                        que tengas que preocuparte por intermediarios o manipulaciones innecesarias
                    </p>
                </div>
                <div
                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                >
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full flex justify-center">
                <div class="w-[48rem] border p-10 bg-gray-200 flex justify-center items-center">
                    <img src="/src/assets/logo.png" class="w-64 h-64" />
                </div>
                <div
                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                >
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <div class="flex justify-between gap-4 ml-32">
                    <div class="card border w-80 bg-base-100" @click="redirectTo()">
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
                    <div class="card border w-80 bg-base-100" @click="redirectTo()">
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
                    <div class="card border w-80 bg-base-100" @click="redirectTo()">
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
                </div>

                <div
                    class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                >
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </div>

    <FooterOsakVue />
</template>

<script setup lang="ts">
import FooterOsakVue from '@/shared/components/FooterOsak.vue'
import NavbarHome from '../components/NavbarHome.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const redirectTo = () => {
    router.push({ name: 'ProductByIdPage' })
}
</script>

<style scoped></style>
