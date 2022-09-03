<template>
  <div class="mt-10 mx-36 rounded-xl bg-[#333333]">
    <article class="flex justify-between text-[#FBFBFB] p-4">
      <div class="flex">
        <div><youtube-icon /></div>
        <div class="p-1 rounded-full bg-gray-400 absolute mt-[1.15rem] ml-7">
          <CameraIcon />
        </div>
      </div>
      <div>
        <p>Youtube</p>
      </div>
      <div>
        <p>LINK</p>
      </div>
      <div class="flex justify-around w-32">
        <yellow-button-icon class="cursor-pointer" />
        <red-button-icon class="cursor-pointer" />
      </div>
    </article>
  </div>
</template>

<script setup>
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import CameraIcon from "@/components/icons/CameraIcon.vue";
import YellowButtonIcon from "@/components/icons/YellowButtonIcon.vue";
import RedButtonIcon from "@/components/icons/RedButtonIcon.vue";
</script>
