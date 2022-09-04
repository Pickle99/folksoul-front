<template>
  <div class="flex items-center h-screen">
    <div>
      <nav
        class="text-white text-[1.20rem] justify-around flex-col w-[21.3rem] border-[1px] border-l-0 border-[#898989] rounded-r-xl h-[26rem] flex bg-[#333333]"
      >
        <RouterLink
          :to="{ name: 'admin' }"
          :class="
            $route.name === 'admin'
              ? 'flex py-3  bg-white text-[#143B52] items-center'
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
            $route.name === 'members' || $route.name === 'add-member'
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
        <RouterLink
          :to="{ name: 'socials' }"
          :class="
            $route.name === 'socials'
              ? 'flex py-3 bg-white text-[#143B52] items-center'
              : 'flex py-3 items-center'
          "
        >
          <div class="w-24 flex justify-center">
            <youtube-icon />
          </div>
          <div>
            <p>სოციალური ქსელები</p>
          </div>
        </RouterLink>
        <RouterLink
          :to="{ name: 'about' }"
          :class="
            $route.name === 'about'
              ? 'flex py-3 bg-white text-[#143B52] items-center'
              : 'flex py-3 items-center'
          "
        >
          <div class="w-24 flex justify-center">
            <note-icon />
          </div>
          <div>
            <p>ბენდის შესახებ</p>
          </div>
        </RouterLink>
        <basic-button @click="logout()" class="flex items-center">
          <div class="w-24 flex justify-center">
            <door-icon />
          </div>
          <div>
            <p>გადი გარეთ</p>
          </div>
        </basic-button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import DoorIcon from "@/components/icons/DoorIcon.vue";
import NoteIcon from "@/components/icons/NoteIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import MemberIcon from "@/components/icons/MemberIcon.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import { useRouter } from "vue-router";
import axios from "@/config/axios/index.js";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
import BasicButton from "@/components/UI/BasicButton.vue";

const LocalStorageStore = useLocalStorageStore();
const router = useRouter();

function logout() {
  axios
    .post("logout")
    .then(() => {
      LocalStorageStore.token = null;
      localStorage.removeItem("token");
      router.push({ name: "home" });
    })
    .catch((err) => console.log(err));
}
</script>
