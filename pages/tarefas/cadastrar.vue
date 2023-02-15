<template>
  <div class="container mx-auto sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="h2">Cadastrar uma tarefa</h2>
      </div>
      <div v-show="showError" class="msg-error mb-3" role="alert">
        <p>{{ msgError }}</p>
      </div>
      <form
        class="mt-8 space-y-6"
        @submit.prevent="submit"
        action="#"
        method="POST"
      >
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="name" class="sr-only">Nome</label>
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
            <label for="date-conclusion" class="sr-only"
              >Data de conclusão</label
            >
            <Datepicker
              placeholder="Data de conclusão"
              v-model="date_conclusion"
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
              format="yyyy-MM-dd"
            ></Datepicker>
          </div>
          <div>
            <label for="status" class="sr-only">Status</label>
            <select
              id="countries"
              v-model="status"
              class="
                select
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            >
              <option value="">Escolha um status</option>
              <option value="start">Inicio</option>
              <option value="progress">Em progresso</option>
              <option value="finished">Concluída</option>
            </select>
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
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      msgError: "",
      showError: false,
      name: "",
      date_conclusion: "",
      status: "",
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    async submit() {
      let body = {
        name: this.name,
        date_conclusion: this.formatDate(this.date_conclusion),
        status: this.status,
      };

      const { data } = await this.$axios.post(
        process.env.baseApiUrl + "/task/save",
        JSON.stringify(body)
      );

      if (data.status === "success") {
        this.$router.push("/tarefas");
      } else {
        this.showError = true;
        this.msgError = "Não foi possível criar a tarefa";
        console.log("error", res.message);
      }
    },
    formatDate(date) {
      let d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
  },
  layout: "dashboard",
};
</script>

<style lang="scss" scoped>
</style>
