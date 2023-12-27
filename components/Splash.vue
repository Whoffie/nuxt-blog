<template>
    <div class="float-left inline w-8/12">
        <h1 v-if="title" class="text-white text-3xl mt-16 ml-16 mr-16 mb-8">{{ title }}</h1>
        <h2 v-if="subtitle" class="text-white text-xl ml-16 mr-16 mb-16">{{ subtitle }}</h2>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()

    const request = await useFetch("http://" + config.public.apiHost + ":" + config.public.apiPort + "/fetch/splash")
    // const request = await useFetch("http://localhost:2000/fetch/splash") <-- it works when I don't use environment variables
    const response = JSON.parse(JSON.stringify(unref(request.data)))
    
    let titleRow = response.find(item => item.property === "splash_title")
    let subtitleRow = response.find(item => item.property === "splash_subtitle")
    
    const title = ref(titleRow.content)
    const subtitle = ref(subtitleRow.content)
</script>