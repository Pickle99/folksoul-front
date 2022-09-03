<template>
  <div class="flex items-center">
    <NavigationBar />
    <WhiteWindow>
      <div>
        <header
          class="flex justify-center border-b-2 border-black pb-3 mx-24 pt-20"
        >
          <h1>სოციალური ქსელები</h1>
        </header>
      </div>

      <SocialLink />
      <SocialLink />
      <SocialLink />
      <div class="flex justify-center flex-col items-center mt-16">
        <div class="flex">
          <h1 class="underline cursor-pointer text-[#3A7DA3] mt-20 font-bold">
            დაამატე ახალი სოციალური ბმული
          </h1>
        </div>
      </div>
    </WhiteWindow>
  </div>
</template>
<script setup>
import NavigationBar from "@/components/UI/NavigationBar.vue";
import WhiteWindow from "@/components/WhiteWindow.vue";
import SocialLink from "@/components/SocialLink.vue";
</script>
