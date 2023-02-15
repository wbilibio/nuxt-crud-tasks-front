<template>
  <div class="container mx-auto sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="h2 mb-3">Dashboard</h2>
        <h3 class="h3">Olá, {{ user.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth.user,
    };
  },
  layout: "dashboard",
};
</script>

<style lang="scss" scoped>
</style>
