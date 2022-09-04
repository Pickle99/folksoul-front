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
        <ValidationForm>
          <div
            class="flex justify-between w-[55rem] mt-24 h-[10rem] flex-col justify-center"
          >
            <div class="flex justify-center">
              <Field
                name="social_name"
                class="border-[1px] border-[#143B52] w-[18rem] rounded-md p-4"
                placeholder="სოციალური ქსელის სახელი"
              />
              <ErrorMessage name="social_name" />
            </div>
            <div class="flex justify-center">
              <Field
                name="social_link"
                class="border-[1px] border-[#143B52] text-center w-[35rem] rounded-md p-4"
                placeholder="ბმული"
              />
              <ErrorMessage name="social_link" />
            </div>
          </div>
          <div class="flex justify-center mt-8 flex-col">
            <div class="flex justify-center">
              <basic-button
                class="bg-[#143B52] py-3 px-7 rounded-md text-white"
              >
                დაამატე სოციალური ბმული
              </basic-button>
            </div>
            <div
              class="flex justify-center mt-2 underline text-[#3A7DA3] font-bold"
            >
              <RouterLink :to="{ name: 'socials' }"> გადი უკან </RouterLink>
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
