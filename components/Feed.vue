<template>
    <div class="float-left inline w-1/2 max-[1195px]:m-8 max-[1195px]:w-full max-[1195px]:block max-[1195px]:float-none">
        <div class="bg-white rounded-xl ml-12 max-[1195px]:ml-0">
            <img class="w-full rounded-t-xl h-inherit" src="https://placehold.co/600x400" alt="Thumbnail">
            <div class="p-6">
                <h1 class="text-4xl">A brand new title-- OMG</h1>
                <div class="mt-6">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus porta nulla, id mollis elit efficitur nec. Aliquam fermentum erat tempor eros tincidunt condimentum. Quisque luctus, augue dignissim convallis iaculis, nunc tellus feugiat nunc, a posuere orci tortor et elit.</h3>
                </div>
            </div>
            <button class="w-full h-8 text-white text-center bg-slate-800 rounded-b-xl"><IconArticleFilledFilled class="inline align-middle" :size="18" /> <span class="inline">View Post</span></button>
        </div>
    </div>
</template>

<script setup>
    import { IconArticleFilledFilled } from '@tabler/icons-vue';

</script>