<template>
    <div class="container absolute grid h-full min-w-full content-center py-10">
        <div class="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:p-6">
            <div class="mb-5 flex w-full justify-center text-center">
                <nuxt-link to="/">
                    <a class="text-link px-0.5">
                        <img width="150" height="40" :src="logo" :alt="title"/>
                    </a>
                </nuxt-link>
            </div>
            <h1 class="rtl font-weight-bold pull-right text-[18px]">
                ورود | ثبت‌نام
            </h1>
            <div>
                <div class="rtl mb-6">
                    <div class="font-light rtl my-5 block text-right text-[12px] text-gray-900 dark:text-gray-300">
                        <p class="my-1 font-light">سلام!</p>
                        <p class="font-light">
                            لطفا شماره موبایل یا ایمیل خود را وارد کنید
                        </p>
                    </div>
                    <div>
                        <input
                                type="text"
                                class="input-primary py-3 w-full dark:border-gray-800"
                                required
                        />
                    </div>
                    <button type="submit" class="btn-primary w-full mt-5 py-3.5">
                        ورود
                    </button>

                    <p class="font-weight-light mt-5 w-full text-right text-[10px]">
                        با ورود به دیجی‌کالا،
                        <nuxt-link to="rules" class="text-link px-0.5"> شرایط دیجی‌کالا
                        </nuxt-link>
                        و
                        <nuxt-link to="privacy" class="text-link px-0.5"> قوانین حریم‌خصوصی
                        </nuxt-link>
                        را می‌پذیرم
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const {logo, title} = useNtm().options();
</script>