<template>
  <div class="s-splash w-full h-screen flex items-center justify-center">
    <div>
      <div class="w-3/5 mx-auto">
        <img src="@/assets/images/cloud.png" alt="Gerimis" class="mx-auto">
      </div>
      <h1 class="font-bold text-4xl text-white text-center mb-6">Gerimis</h1>
      <p class="font-light text-center text-white opacity-50 text-lg w-3/5 mx-auto">
        Dont worry about the weather we all here
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    setTimeout(() => {
      this.$router.push('/dashboard');
    }, 3000);
  },
};
</script>
