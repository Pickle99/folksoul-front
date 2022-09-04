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
        <ValidationForm class="">
          <div class="flex justify-center">
            <Field
              name="name"
              class="border-[1px] border-[#143B52] text-center rounded-md w-[19rem] p-5"
              placeholder="სახელი"
            />
            <ErrorMessage name="name" />
          </div>
          <div class="flex justify-around w-[55rem] mt-5">
            <Field
              name="instrument"
              class="border-[1px] border-[#143B52] w-[15rem] rounded-md p-4"
              placeholder="ინსტრუმენტი"
            />
            <ErrorMessage name="instrument" />
            <Field
              name="orbit_width"
              class="border-[1px] border-[#143B52] w-[15rem] rounded-md p-4"
              placeholder="ორბიტის სიგანე"
            />
            <ErrorMessage name="orbit_width" />
            <Field
              name="color"
              class="border-[1px] border-[#143B52] w-[15rem] rounded-md p-5"
              placeholder="ფერი"
            />
            <ErrorMessage name="color" />
          </div>
          <div class="flex justify-center mt-10">
            <Field
              as="textarea"
              name="biography"
              class="border-[1px] border-[#143B52] w-[55rem] h-[15rem] rounded-md p-5"
              placeholder="ბექა, ბასზე ბასი ადამიანი . . ."
            />
            <ErrorMessage name="biography" />
          </div>
          <div class="flex justify-center mt-8 flex-col">
            <div class="flex justify-center">
              <basic-button
                class="bg-[#143B52] py-3 px-7 rounded-md text-white"
              >
                დაამატე წევრი
              </basic-button>
            </div>
            <div class="flex justify-center mt-2 underline text-[#3A7DA3] font-bold">
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
</script>
