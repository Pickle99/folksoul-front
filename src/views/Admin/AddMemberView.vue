<template>
  <div class="flex items-center">
    <NavigationBar />
    <WhiteWindow class="max-w-[70rem] min-w-[70rem]">
      <div>
        <header
          class="flex justify-center border-b-2 border-black pb-3 ml-36 mr-24 pt-20"
        >
          <h1>ჯგუფის წევრები</h1>
        </header>
      </div>
      <div
        class="flex justify-center text-[#143B52] placeholder-[#143B52] mt-10"
      >
        <ValidationForm v-slot="{ resetForm }">
          <div class="flex justify-center">
            <Field
              name="member_name"
              v-model="name"
              class="border-[1px] border-[#143B52] text-center rounded-md w-[19rem] p-5"
              placeholder="სახელი"
              rules="required|min:3|geo"
            />
            <ErrorMessage name="member_name" class="text-red-500 text-xl" />
          </div>
          <div class="flex justify-around w-[55rem] mt-5">
            <Field
              name="instrument"
              v-model="instrument"
              class="border-[1px] border-[#143B52] w-[15rem] rounded-md p-4"
              placeholder="ინსტრუმენტი"
              rules="required|min:2|geo"
            />
            <ErrorMessage name="instrument" />
            <Field
              name="orbit_width"
              v-model="orbit_width"
              class="border-[1px] border-[#143B52] w-[15rem] rounded-md p-4"
              placeholder="ორბიტის სიგანე"
              rules="required|numeric"
            />
            <ErrorMessage name="orbit_width" />
            <Field
              name="color"
              v-model="color"
              class="border-[1px] border-[#143B52] w-[15rem] rounded-md p-5"
              placeholder="ფერი"
              rules="required|min:7|max:7|hashtag|uppercase"
            />
            <ErrorMessage name="color" />
          </div>
          <div class="flex justify-center mt-10">
            <Field
              as="textarea"
              name="biography"
              v-model="biography"
              class="border-[1px] border-[#143B52] w-[55rem] h-[15rem] rounded-md p-5"
              placeholder="ბექა, ბასზე ბასი ადამიანი . . ."
              rules="required|geo"
            />
            <ErrorMessage name="biography" />
          </div>
          <div class="flex justify-center mt-8 flex-col">
            <div class="flex justify-center">
              <basic-button
                @click.prevent="onSubmit()"
                class="bg-[#143B52] py-3 px-7 rounded-md text-white"
              >
                დაამატე წევრი
              </basic-button>
            </div>
            <div
              class="flex justify-center mt-2 underline text-[#3A7DA3] font-bold"
            >
              <RouterLink :to="{ name: 'members' }"> გადი უკან </RouterLink>
            </div>
          </div>
        </ValidationForm>
      </div>
    </WhiteWindow>
  </div>
</template>
<script setup>
import NavigationBar from "@/components/UI/NavigationBar.vue";
import WhiteWindow from "@/components/WhiteWindow.vue";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import BasicButton from "@/components/UI/BasicButton.vue";
import { ref } from "vue";
import axios from "@/config/axios/index.js";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const instrument = ref("");
const orbit_width = ref("");
const color = ref("");
const biography = ref("");

function onSubmit() {
  axios
    .post("add-member", {
      name: name.value,
      instrument: instrument.value,
      orbit_width: parseInt(orbit_width.value),
      color: color.value,
      biography: biography.value,
    })
    .then((res) => {
      console.log(res);
      router.push({ name: "members" });
    })
    .catch((err) => console.log(err));
}
</script>
