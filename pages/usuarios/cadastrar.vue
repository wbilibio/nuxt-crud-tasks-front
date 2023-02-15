<template>
  <div class="container mx-auto sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="h2">Cadastrar um usuário</h2>
      </div>
      <form
        class="mt-8 space-y-6"
        @submit.prevent="submit"
        action="#"
        method="POST"
      >
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="Name" class="sr-only">Nome</label>
            <input
              id="name"
              v-model="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="
                field
                rounded
                mb-3
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Nome"
            />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="
                field
                rounded
                mb-3
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="
                field
                rounded
                mb-3
                focus:z-10
                focus:border-indigo-500
                focus:outline-none
                focus:ring-indigo-500
                sm:text-sm
              "
              placeholder="Senha"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="
              group
              button
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: mini/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Registrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      let body = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      const { data } = await this.$axios.post(
        process.env.baseApiUrl + "/auth/register",
        JSON.stringify(body)
      );

      this.$router.push("/usuarios");
    },
  },
  layout: "dashboard",
};
</script>

<style lang="scss" scoped>
</style>
