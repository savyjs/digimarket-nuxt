<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-login-box @action="login">
      <user-ntm-get-mobile mobile="" />
      <user-ntm-get-password password=""/>
    </user-ntm-login-box>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";

async function login(credential) {
  useApi("/v1/auth/login", {method: "POST",body:{}}).then(res => {
    useRouter().push('./verify')
  })
}

</script>
