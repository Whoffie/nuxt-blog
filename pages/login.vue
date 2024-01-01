<template>
    <div class="w-7/12 float-left inline">
        <div class="flex justify-center items-center flex-col">
            <div class="m-8">
                <h1 class="text-3xl text-white">Login</h1>
                <form action="">
                    <div class="float-left inline pt-4">
                        <input class="w-92 pl-2 border-solid border-2 border-slate-800 border-b-0 h-12 rounded-ss-lg outline-none block" type="text" name="username" placeholder="Username" required>
                        <input class="w-92 pl-2 border-solid border-2 border-slate-800 border-t-0 h-12 rounded-es-lg outline-none block" type="password" name="password" placeholder="Password" required>
                    </div>
                    <div class="float-left inline pt-4 text-center">
                        <button class="w-8 h-24 bg-slate-800 text-white rounded-r-lg group inline-flex items-center"><span class="group-hover:animate-pulse"><IconLogin class="ml-1" /></span></button>
                    </div>
                </form>
            </div>
            <div class="m-8">
                <h1 class="text-3xl text-white">Register</h1>
                <form @submit.prevent="register">
                    <div class="float-left inline pt-4">
                        <input class="w-92 pl-2 border-solid border-2 border-slate-800 border-b-0 h-12 rounded-ss-lg outline-none block" type="text" v-model="rusername" placeholder="Username" required>
                        <input class="w-92 pl-2 border-solid border-2 border-slate-800 border-t-0 h-12 outline-none block" type="email" v-model="remail" placeholder="Email" required>
                        <input class="w-92 pl-2 border-solid border-2 border-slate-800 border-t-0 h-12 rounded-es-lg outline-none block" type="password" v-model="rpassword" placeholder="Password" required>
                    </div>
                    <div class="float-left inline pt-4 text-center">
                        <button class="w-8 h-36 bg-slate-800 text-white rounded-r-lg group inline-flex items-center" type="submit" @click.prevent="register"><span class="group-hover:animate-pulse"><IconLoader2 class="ml-1 animate-spin" v-if="rloading" /><IconCheck class="ml-1" v-else /></span></button>
                    </div>
                </form>
            </div>
            <div class="w-full bg-red-800 text-white text-xl p-6 ml-8" v-if="rerror">
                <h3>{{ rerror }}</h3>
            </div>
        </div>
    </div>
    <SidePanels />
</template>

<script setup>
    import SidePanels from '../components/SidePanels.vue'
    import { IconLogin, IconCheck, IconLoader2 } from '@tabler/icons-vue'

    const config = useRuntimeConfig()

    const rusername = ref('')
    const remail = ref('')
    const rpassword = ref('')
    const rloading = ref(false)

    const rerror = ref('') // user input error
    
    const register = async () => {
        if (!rusername.value || !remail.value || !rpassword.value) {
            rloading.value = false
            rerror.value = "Please fill out the entire form"
        }else {
            rloading.value = true
            await useFetch("https://" + config.public.apiHost + ":" + config.public.apiPort + "/new/user", {
                method: 'POST',
                headers: {
                    'x-api-key': config.public.apiKey 
                },
                body: {
                    username: rusername.value,
                    email: remail.value,
                    password: rpassword.value
                }
            })

            rloading.value = false
        }
    }
</script>