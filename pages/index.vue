<template>
  <div class="m-5">
    <div class="m-5">
      <p class="">Nuxt pages:</p>
      <p class="my-2">Active:</p>
      <div class="gap-3 flex">
        <nuxt-link class="btn-success" :to="`${fixturePrefix}/user/login`">Login (mobile and password)</nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/login-email-password`">Login (email and
          password)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/login-username-password`">Login (username
          and password)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/login-oauth`">Login (OAuth)</nuxt-link>
        <nuxt-link class="btn-success" :to="`${fixturePrefix}/user/register`">Register (name - mobile - password)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/register-username-password`">Register
          (username password)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/register-oauth`">Register (OAuth)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/verify`">Verify (SMS)</nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/verify-otp`">Verify (OTP or Email)
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${fixturePrefix}/user/success`">Success Registration</nuxt-link>
      </div>
      <p class="my-2">Archived:</p>
      <div class="gap-3 flex mt-5">
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market`">Market Landing</nuxt-link>
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market/profile`">Profile</nuxt-link>
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market/profile/orders`">Orders</nuxt-link>
        <nuxt-link class="btn-success-outlined btn-disabled" :to="`${prefix}/market/profile/order-details/1`">Order
          Details
        </nuxt-link>
        <nuxt-link class="btn-success-outlined" :to="`${prefix}/market/products/8364953`">Product page</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const fixturePrefix = "";
const prefix = "/v1";
</script>