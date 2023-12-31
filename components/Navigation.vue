<template>
    <nav class="top-0 bg-slate-800 h-16 p-4 sticky">
        <ul>
            <li class="inline mr-5"><NuxtLink to="/" class="text-slate-400 hover:text-white"><IconHome class="inline align-middle" :size="20" /> <span class="align-middle">Home</span></NuxtLink></li>
            <li class="inline mr-5"><a href="#" class="text-slate-400 hover:text-white"><IconFileText class="inline align-middle" :size="20" /> <span class="align-middle">About</span></a></li>
            <li class="inline mr-5"><a href="#" class="text-slate-400 hover:text-white"><IconAddressBook class="inline align-middle" :size="20" /> <span class="align-middle">Contact</span></a></li>
            <div class="float-right">
                <li class="inline mr-5"><NuxtLink to="/login" class="text-slate-400 hover:text-white"><IconLogin class="inline align-middle" :size="20" /> <span class="align-middle">Login</span></NuxtLink></li>
            </div>
        </ul>
    </nav>
</template>

<script setup>
    import { IconHome } from '@tabler/icons-vue'
    import { IconFileText } from '@tabler/icons-vue'
    import { IconAddressBook } from '@tabler/icons-vue'
    import { IconLogin } from '@tabler/icons-vue'
</script>