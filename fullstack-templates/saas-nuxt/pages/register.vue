<template>
  <Layout>
    <form class="px-5 min-h-screen flex flex-col items-center justify-center bg-gray-100" @submit.prevent="handleSubmit">
      <div
        class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-md
          w-50
          max-w-md
        "
      >
        <h1 class="lg:text-2xl text-xl text-center">Register</h1>

        <fieldset class="mt-10">
          <div class="relative mb-4">
            <label for="name" class="text-xs tracking-wide text-gray-600">Name:</label>
            <FontAwesomeIcon
              :icon="faUser"
              class="absolute left-3 top-[30%]"
            />
            <input
              type="text"
              id="name"
              v-model="name"
              required
              class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-black"
              placeholder="Enter your name"
            />
          </div>

          <div class="relative mb-4">
            <label for="email" class="text-xs tracking-wide text-gray-600">E-Mail Address:</label>
            <FontAwesomeIcon
              :icon="faAt"
              class="absolute left-3 top-[30%]"
            />
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-black"
              placeholder="Enter your email"
            />
          </div>

          <div class="relative mb-4">
            <label for="password" class="text-xs tracking-wide text-gray-600">Password:</label>
            <FontAwesomeIcon
              :icon="faLock"
              class="absolute left-3 top-[30%]"
            />
            <input
              :type="pwVis ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
              class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-black"
              placeholder="Enter your password"
            />
            <FontAwesomeIcon
              :icon="pwVis ? faEyeSlash : faEye"
              class="absolute right-3 top-[30%]"
              @click="togglePassword"
            />
          </div>

          <div class="relative mb-4">
            <label for="passwordConfirm" class="text-xs tracking-wide text-gray-600">Confirm Password:</label>
            <FontAwesomeIcon
              :icon="faLock"
              class="absolute left-3 top-[30%]"
            />
            <input
              :type="pwVis ? 'text' : 'password'"
              id="passwordConfirm"
              v-model="passwordConfirm"
              required
              class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-black"
              placeholder="Confirm your password"
            />
            <FontAwesomeIcon
              :icon="pwVis ? faEyeSlash : faEye"
              class="absolute right-3 top-[30%]"
              @click="togglePassword"
            />
          </div>

          <div class="flex w-full">
            <button
              type="submit"
              class="
                flex
                mt-2
                items-center
                justify-center
                focus:outline-none
                text-white text-sm
                sm:text-base
                bg-black
                hover:bg-slate-950
                rounded-md
                py-2
                w-full
                transition
                duration-150
                ease-in
              "
            >
              <span class="mr-2 uppercase">Sign Up &rarr;</span>
            </button>
          </div>
          </fieldset>
        </div>

        <div class="flex justify-center items-center mt-6">
          <span
            class=" inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center"
          >
            You have an account?
            <NuxtLink to="/login" class="text-xs ml-2 text-black font-semibold">
              Login here
            </NuxtLink>
          </span>
        </div>
      </form>
    </Layout>
  </template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  faAt,
  faEye,
  faEyeSlash,
  faFaceFrownOpen,
  faLock,
  faMailBulk,
  faPassport,
  faUser,
  faUserAlt,
  faUserCircle,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const pwVis = ref(false);

const router = useRouter();

const handleSubmit = async () => {
  const url = `//${window.location.host}/api/auth/register`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });

    router.push('/login');
  } catch (e: any) {
    console.log(`Error: ${e}`);
  }
};

const togglePassword = () => {
  pwVis.value = !pwVis.value;
};
</script>
