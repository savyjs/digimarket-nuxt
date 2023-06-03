<template>
  <user-ntm-login-username-password @next="login"/>
</template>
<script setup>

async function login(data) {
  definePageMeta({
    name: "NtmLogin"
  })
}
</script>