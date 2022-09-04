<template>
  <div class="flex items-center">
    <NavigationBar />
    <WhiteWindow
      ><div class="flex justify-center items-center h-full flex-col">
        <h1 class="text-5xl tracking-widest mb-24">დილამშვიდობისა!</h1>
        <div class="flex flex-col justify-center items-center">
          <TVHeadIcon />
          <img
            src="@/assets/picture.jpg"
            class="border-[1rem] max-w-[35rem] max-h-[20rem] bg-white border-black"
            alt="picture"
          />
          <TVFeetIcon />
        </div></div
    ></WhiteWindow>
  </div>
</template>

<script>
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
import { mapWritableState } from "pinia";
import NavigationBar from "@/components/UI/NavigationBar.vue";
import TVHeadIcon from "@/components/icons/TVHeadIcon.vue";
import TVFeetIcon from "@/components/icons/TVFeetIcon.vue";
import WhiteWindow from "@/components/WhiteWindow.vue";
export default {
  components: {
    WhiteWindow,
    NavigationBar,
    TVFeetIcon,
    TVHeadIcon,
  },
  computed: {
    ...mapWritableState(useLocalStorageStore, ["token"]),
  },
};
</script>
