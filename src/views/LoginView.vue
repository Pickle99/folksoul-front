<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <div
      class="flex border-[0.01em] border-white rounded-sm bg-gradient-to-b from-[#345161] to-[#7B5A5A] px-8 py-7 items-center flex-col"
    >
      <div class="my-7 font-bold flex items-center justify-center">
        <rectangle-icon />
        <h1 class="absolute">კარიბჭე</h1>
      </div>
      <ValidationForm>
        <div class="mb-9">
          <Field
            name="username"
            v-model="this.username"
            class="w-[18rem] pl-5 p-2 bg-[#C3B6B2] placeholder-[#501C1C]"
            placeholder="მეტსახელი"
          />
          <ErrorMessage name="username" />
        </div>
        <div class="mb-9">
          <Field
            name="password"
            v-model="this.password"
            class="w-[18rem] pl-5 p-2 bg-[#C3B6B2] placeholder-[#501C1C]"
            placeholder="პაროლი"
          />
          <ErrorMessage name="password" />
        </div>
        <div class="flex justify-center">
          <div
            class="cursor-pointer flex justify-center w-[15rem] rounded-sm mb-5 py-3.5 border-[0.01em] border-white bg-[#345161] text-white"
          >
            <basic-button
              @click.prevent="login()"
              class="tracking-[0.12em] text-sm"
              >შემობრძანდი</basic-button
            >
          </div>
        </div>
      </ValidationForm>
    </div>
  </div>
</template>

<script>
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import axios from "@/config/axios/index.js";
import BasicButton from "@/components/UI/BasicButton.vue";
import RectangleIcon from "@/components/icons/RectangleIcon.vue";
import { useLocalStorageStore } from "@/stores/useLocalStorageStore.js";
import { mapWritableState } from "pinia";

export default {
  components: {
    ValidationForm,
    Field,
    ErrorMessage,
    BasicButton,
    RectangleIcon,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapWritableState(useLocalStorageStore, ["token"]),
  },
  methods: {
    login() {
      axios
        .get("http://localhost:8000/sanctum/csrf-cookie")
        .then((res) => {
          console.log(res);
          axios
            .post("login", {
              username: this.username,
              password: this.password,
            })
            .then((res) => {
              console.log(res);
              localStorage.setItem("token", res.data);
              this.token = localStorage.getItem("token");
              window.location.href =
                import.meta.env.VITE_FRONT_BASE_URL + "admin-panel";
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
