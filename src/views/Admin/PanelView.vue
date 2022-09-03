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
import axios from "@/config/axios";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
import { mapWritableState } from "pinia";
import NavigationBar from "@/components/UI/NavigationBar.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import MemberIcon from "@/components/icons/MemberIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import NoteIcon from "@/components/icons/NoteIcon.vue";
import DoorIcon from "@/components/icons/DoorIcon.vue";
import TVHeadIcon from "@/components/icons/TVHeadIcon.vue";
import TVFeetIcon from "@/components/icons/TVFeetIcon.vue";
import WhiteWindow from "@/components/WhiteWindow.vue";
export default {
  components: {
    WhiteWindow,
    NavigationBar,
    TVFeetIcon,
    TVHeadIcon,
    DoorIcon,
    NoteIcon,
    YoutubeIcon,
    MemberIcon,
    HomeIcon,
  },
  computed: {
    ...mapWritableState(useLocalStorageStore, ["token"]),
  },
  methods: {
    logout() {
      axios
        .post("logout")
        .then((res) => {
          console.log(res);
          this.token = null;
          localStorage.removeItem("token");
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
