<template>
    <div class="w-7/12 float-left bg-white rounded-xl inline m-8 mt-16 flex justify-center items-center">
        <h1 class="text-3xl">Login</h1>
        <div class="p-8">
            <form action="">
                <div class="float-left inline pt-4">
                    <input class="pl-2 border-solid border-2 border-slate-800 border-b-0 h-12 rounded-ss-xl outline-none block" type="text" name="username" placeholder="Username" required>
                    <input class="pl-2 border-solid border-2 border-slate-800 border-t-0 h-12 rounded-es-xl outline-none block" type="password" name="password" placeholder="Password" required>
                </div>
                <div class="float-left inline pt-4 text-center">
                    <button class="w-8 h-24 bg-slate-800 text-white rounded-r-xl group"><span class="group-hover:animate-pulse"><IconLogin/></span></button>
                </div>
            </form>
        </div>
    </div>
    <SidePanels />
</template>

<script setup>
    import SidePanels from '../components/SidePanels.vue'
    import { IconLogin } from '@tabler/icons-vue' 
</script>