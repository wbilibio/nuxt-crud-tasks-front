<!-- Please remove this file from your project -->
<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2
              text-gray-400
              hover:bg-gray-700 hover:text-white
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            @click.prevent="openMenuMobile"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Abrir menu mobile</span>
            <svg
              v-show="!showMenuMobile"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              v-show="showMenuMobile"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex flex-1
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NuxtLink class="link hover:bg-gray-700 hover:text-white" to="/"
                >Dashboard</NuxtLink
              >

              <NuxtLink
                class="link hover:bg-gray-700 hover:text-white"
                to="/usuarios"
                >Usu??rios</NuxtLink
              >

              <NuxtLink
                class="link hover:bg-gray-700 hover:text-white"
                to="/tarefas"
                >Tarefas</NuxtLink
              >
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <button
              type="button"
              class="link bg-blue-300 text-black"
              @click.prevent="logout"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="showMenuMobile" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <NuxtLink class="link hover:bg-gray-700 hover:text-white" to="/"
          >Dashboard</NuxtLink
        >

        <NuxtLink class="link hover:bg-gray-700 hover:text-white" to="/usuarios"
          >Usu??rios</NuxtLink
        >

        <NuxtLink class="link hover:bg-gray-700 hover:text-white" to="/tarefas"
          >Tarefas</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NuxtNavigation",
  data() {
    return {
      showMenuMobile: false,
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();

      this.$router.push("/login");
    },
    openMenuMobile() {
      this.showMenuMobile = !this.showMenuMobile;
    },
  },
};
</script>
