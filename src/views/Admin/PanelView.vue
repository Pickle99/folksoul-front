<template>
  <div class="flex items-center h-screen">
    <div>
      <nav
        class="text-white text-[1.20rem] justify-around flex-col w-[20.3rem] border-[1px] border-l-0 border-[#898989] rounded-r-xl h-[26rem] w-fit flex bg-[#333333] flex"
      >
        <RouterLink
          :to="{ name: 'admin' }"
          :class="
            $route.name === 'admin'
              ? 'flex py-3 bg-white text-[#143B52] items-center'
              : 'flex py-3 items-center'
          "
        >
          <div class="w-24 flex justify-center">
            <home-icon />
          </div>
          <div>
            <p>მთავარი</p>
          </div>
        </RouterLink>

        <RouterLink
          :to="{ name: 'members' }"
          :class="
            $route.name === 'members'
              ? 'flex py-3 bg-white text-[#143B52] items-center'
              : 'flex py-3 items-center'
          "
        >
          <div class="w-24 flex justify-center">
            <member-icon />
          </div>
          <div>
            <p>ჯგუფის წევრები</p>
          </div>
        </RouterLink>
        <article class="flex items-center">
          <div class="w-24 flex justify-center">
            <youtube-icon />
          </div>
          <div>
            <p>სოციალური ქსელები</p>
          </div>
        </article>
        <article class="flex items-center">
          <div class="w-24 flex justify-center">
            <note-icon />
          </div>
          <div>
            <p>ბენდის შესახებ</p>
          </div>
        </article>
        <article class="flex items-center">
          <div class="w-24 flex justify-center">
            <door-icon />
          </div>
          <div>
            <p>გადი გარეთ</p>
          </div>
        </article>
      </nav>
    </div>
    <div
      class="bg-white shadow-inner shadow-[#4D4D4D] rounded-3xl mx-[7rem] w-full h-[45rem]"
    >
      <div class="flex justify-center items-center h-full flex-col">
        <h1 class="text-5xl tracking-widest mb-24">დილამშვიდობისა!</h1>
        <div class="flex flex-col justify-center items-center">
          <TVHeadIcon />
          <img
            src="@/assets/picture.jpg"
            class="border-[1rem] max-w-[35rem] max-h-[20rem] bg-white border-black"
            alt="picture"
          />
          <TVFeetIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/config/axios";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
import { mapWritableState } from "pinia";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import MemberIcon from "@/components/icons/MemberIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import NoteIcon from "@/components/icons/NoteIcon.vue";
import DoorIcon from "@/components/icons/DoorIcon.vue";
import TVHeadIcon from "@/components/icons/TVHeadIcon.vue";
import TVFeetIcon from "@/components/icons/TVFeetIcon.vue";
export default {
  components: {
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
