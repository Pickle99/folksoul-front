<template>
  <div class="flex items-center">
    <NavigationBar />
    <WhiteWindow class="max-w-[70rem] min-w-[70rem]">
      <div>
        <header
          class="flex justify-center border-b-2 border-black pb-3 mx-24 pt-20"
        >
          <h1>ჯგუფის წევრები</h1>
        </header>
        <div class="flex mt-20 justify-around mx-16">
          <BandMember class="px-5" />
          <BandMember class="px-5" />
          <BandMember class="px-5" />
        </div>
      </div>
      <div class="flex justify-center flex-col items-center mt-16">
        <div class="justify-around flex w-[5rem] justify-center">
          <basic-button class="bg-black rounded-full p-2.5" />
          <basic-button class="bg-gray-600 opacity-30 rounded-full p-2.5" />
        </div>
        <div class="flex">
          <RouterLink
            :to="{ name: 'add-member' }"
            class="underline cursor-pointer text-[#3A7DA3] mt-20 font-bold"
          >
            ახალი წევრი გყავს?
          </RouterLink>
        </div>
      </div>
    </WhiteWindow>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/UI/NavigationBar.vue";
import WhiteWindow from "@/components/WhiteWindow.vue";
import BandMember from "@/components/BandMember.vue";
import BasicButton from "@/components/UI/BasicButton.vue";
</script>
