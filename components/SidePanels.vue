<template>
    <div class="float-right inline h-100 w-3/12 mt-16 ml-16 mr-16 mb-8 max-[1195px]:float-none max-[1195px]:block max-[1195px]:w-auto max-[1195px]:ml-10 max-[1195px]:mr-22">
        <div class="bg-white rounded-lg pl-6 pt-4 pr-6 pb-4 mb-12 max-[1195px]:hidden">
            <h1 class="text-2xl">Search</h1>
            <div class="pt-2">
                <input class="inline w-10/12 h-8 border-solid border-2 border-slate-800 rounded-l-md pl-2" type="text" name="search">
                <button class="inline bg-slate-800 rounded-r-md h-8 w-8"><IconSearch class="inline align-middle text-white" :size="20" /></button>
            </div>
        </div>
        <div class="bg-white rounded-md pl-6 pt-4 pr-6 pb-4 mb-12">
            <h1 class="text-2xl p-0 m-0">Recent Activity</h1>
            <div class="pl-4 pt-2 max-[1195px]:pl-0">
                <ul class="list-disc text-slate-800 underline">
                    <li><a href="#">Post one</a></li>
                    <li><a href="#">Post two</a></li>
                    <li><a href="#">Post three</a></li>
                    <li><a href="#">Post four</a></li>
                </ul>
            </div>
        </div>
        <div class="bg-white rounded-lg pl-6 pt-4 pr-6 pb-4 mb-12">
            <h1 class="text-2xl">Extra</h1>
            <div class="pt-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus porta nulla, id mollis elit efficitur nec. Aliquam fermentum erat tempor eros tincidunt condimentum. Quisque luctus, augue dignissim convallis iaculis, nunc tellus feugiat nunc, a posuere orci tortor et elit. Cras vel tincidunt lorem. Vivamus non leo nec ligula condimentum interdum in id dolor. Nulla commodo vel nunc et efficitur. Suspendisse vestibulum, sem at pellentesque bibendum, tellus sapien ultricies nisi, ac aliquet nisi augue a ex. Suspendisse vitae lorem non tortor lobortis tempus id suscipit metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nec ultrices enim. Proin commodo iaculis libero, id sagittis turpis ornare et. Donec mattis imperdiet ex quis pretium. Suspendisse potenti. Etiam ullamcorper egestas orci, in pulvinar nunc scelerisque et. </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { IconSearch } from '@tabler/icons-vue'
</script>