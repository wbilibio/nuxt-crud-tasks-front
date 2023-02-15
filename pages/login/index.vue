<template>
  <div class="container mx-auto sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="h2">Acessar painel com seu login</h2>
      </div>
      <div class="msg-error" v-show="msgError" role="alert">
        <strong class="font-bold">Oops!</strong>
        <span class="block sm:inline">Senha incorreta, tente novamente</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
      <form
        class="mt-8 space-y-6"
        action="#"
        method="POST"
        @submit.prevent="login"
      >
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              v-model="email"
              required
              class="
                rounded-t-md
                field
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
              name="password"
              type="password"
              v-model="password"
              autocomplete="current-password"
              required
              class="
                field
                rounded-b-md
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
            Login
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
      email: "",
      password: "",
      msgError: false,
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("laravelJWT", {
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push("/");
      } catch (error) {
        if (error) {
          this.msgError = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
