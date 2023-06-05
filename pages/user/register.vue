<template>
  <nuxt-layout name="ntm-auth">
    <user-ntm-register-box @action="register">
      <ntm-get-mobile mobile="">
      </ntm-get-mobile>
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

import NtmGetMobile from "~/components/user/NtmGetMobile.vue";
import NtmLoginBox from "~/components/user/NtmLoginBox.vue";
</script>
