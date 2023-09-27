<template>
    <header>
        <NavbarAuth />
    </header>

    <div class="flex justify-around items-center mt-16">
        <div>
            <img src="/src/assets/logo.png" class="w-64 h-64" />
        </div>
        <div>
            <h1 class="text-3xl font-medium text-center my-6">INICIAR SESIÓN</h1>

            <div class="card w-[26rem] bg-warning">
                <div class="card-body">
                    <form action="">
                        <div class="form-control w-full mb-4">
                            <input
                                type="text"
                                placeholder="Usuario"
                                class="input input-bordered w-full"
                            />
                        </div>
                        <div class="form-control w-full">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                class="input input-bordered w-full"
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div class="flex justify-center mt-6">
                <button class="btn btn-warning w-48">Ingresar</button>
            </div>
        </div>
    </div>

    <FooterOsak />
</template>

<script setup lang="ts">
import FooterOsak from '@/shared/components/FooterOsak.vue'
import NavbarAuth from '../components/NavbarAuth.vue'
</script>

<style scoped></style>
