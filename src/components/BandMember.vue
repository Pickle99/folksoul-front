<template>
  <article class="bg-[#333333] rounded-xl">
    <div
      class="flex flex-col justify-center border-[1px] border-white p-10 rounded-full bg-[#143B52] items-center mt-8"
    >
      <div>
        <member-icon class="relative w-[5rem] h-[5rem]" />
      </div>
      <div class="bg-black w-5 h-5 p-1 absolute mt-32 ml-[6.25rem]"></div>
    </div>
    <div
      class="justify-center flex text-white my-4 border-b-[1px] border-black pb-5"
    >
      <h1>{{ props.member.name }}</h1>
    </div>
    <div class="flex justify-center justify-between mx-5 my-3">
      <green-button-icon class="cursor-pointer" />
      <yellow-button-icon class="cursor-pointer" />
      <red-button-icon class="cursor-pointer" />
    </div>
  </article>
</template>

<script setup>
import MemberIcon from "@/components/icons/MemberIcon.vue";
import GreenButtonIcon from "@/components/icons/GreenButtonIcon.vue";
import YellowButtonIcon from "@/components/icons/YellowButtonIcon.vue";
import RedButtonIcon from "@/components/icons/RedButtonIcon.vue";
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});
</script>
