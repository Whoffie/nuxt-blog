<template>
    <nav class="top-0 bg-slate-800 h-16 p-4">
        <ul>
            <li class="inline mr-5"><a href="#" class="text-slate-400 hover:text-white"><IconHome class="inline align-middle" :size="20" /> <span class="align-middle">Home</span></a></li>
            <li class="inline mr-5"><a href="#" class="text-slate-400 hover:text-white"><IconFileText class="inline align-middle" :size="20" /> <span class="align-middle">About</span></a></li>
            <li class="inline mr-5"><a href="#" class="text-slate-400 hover:text-white"><IconAddressBook class="inline align-middle" :size="20" /> <span class="align-middle">Contact</span></a></li>
            <li class="inline mr-5"><a href="#" class="text-slate-400 hover:text-white"><IconLogin class="inline align-middle" :size="20" /> <span class="align-middle">Login</span></a></li>
        </ul>
    </nav>
</template>

<script>
    import { IconHome } from '@tabler/icons-vue'
    import { IconFileText } from '@tabler/icons-vue'
    import { IconAddressBook } from '@tabler/icons-vue'
    import { IconLogin } from '@tabler/icons-vue'

    export default {
        components: { IconHome, IconFileText, IconAddressBook, IconLogin }
    }
</script>