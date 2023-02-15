<template>
  <div class="container mx-auto sm:px-6 lg:px-8 flex flex-wrap">
    <h2 class="h2 w-full flex justify-around">
      Lista de usuários
      <NuxtLink
        to="/usuarios/cadastrar"
        class="group button btn-add hover:bg-indigo-700"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="h-6 w-6 mr-3 [color]-$fill-color"
          style="
            stroke-width: var(--grid-item-icon-stroke-width);
            transform: scale(var(--grid-item-icon-scale));
          "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        Adicionar
      </NuxtLink>
    </h2>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 w-full mt-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <div
            v-show="!list.length && !loading"
            class="msg-warning mb-3"
            role="alert"
          >
            <p>Nenhum usuário foi encontrado.</p>
          </div>
          <div v-show="showError" class="msg-error mb-3" role="alert">
            <p>{{ msgError }}</p>
          </div>
          <table v-if="list.length" class="min-w-full text-center table">
            <thead class="border-b">
              <tr>
                <th scope="col" class="th">#</th>
                <th scope="col" class="th">Nome</th>
                <th scope="col" class="th">E-mail</th>
                <th scope="col" class="th">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(user, i) in list"
                :key="i"
                class="border-b boder-gray-900"
              >
                <td class="td">{{ user.id }}</td>
                <td class="td">{{ user.name }}</td>
                <td class="td">{{ user.email }}</td>
                <td class="px-6 py-4">
                  <div class="flex justify-end gap-4">
                    <NuxtLink
                      x-data="{ tooltip: 'Edite' }"
                      class="text-blue-800"
                      :to="'/usuarios/' + user.id"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </NuxtLink>
                    <a
                      x-data="{ tooltip: 'Delete' }"
                      class="text-red-500 cursor-pointer"
                      @click.prevent="remove(user.id)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "dashboard",
  data() {
    return {
      msgError: "",
      showError: false,
      loading: true,
    };
  },
  computed: {
    ...mapState("user", ["list"]),
  },
  methods: {
    ...mapActions("user", ["listUsers", "deleteUser"]),
    async remove(id) {
      const res = await this.deleteUser(id);

      if (res.status === "error") {
        this.showError = true;
        this.msgError = "Não foi possível deletar o usuário";
        console.log("error", res.message);
      }
    },
  },
  async mounted() {
    const data = await this.listUsers();
    if (data) {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
