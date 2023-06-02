<template>
  <ntm-login-username-password @next="login"/>
</template>
<script setup>

async function login(data) {
  console.log({data})
}
</script>