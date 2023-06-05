<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-register-box @action="register">
      <user-ntm-get-mobile mobile="">
      </user-ntm-get-mobile>
      <user-ntm-get-password password="">
      </user-ntm-get-password>
    </user-ntm-register-box>
  </nuxt-layout>
</template>
<script setup>

import {useRouter} from "#app";

async function register(credential) {
  const api = useApi()
  api("/v1/auth/register", {method: "post"}).then(res => {
    useRouter().push('./verify')
  })
}

</script>
