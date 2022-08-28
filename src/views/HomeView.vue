<template>
  <div class="flex text-gray-300 items-center mx-20 justify-between mt-7">
    <div class="flex-col w-fit items-center flex">
      <guy-with-guitars-icon />
      <h1 class="font-mono mt-1">FolkSoul</h1>
    </div>
    <div>
      <h1 class="cursor-pointer">შესვლა</h1>
    </div>
  </div>

  <div class="flex mx-20 justify-between mt-5">
    <main>
      <div class="flex justify-center items-center">
        <div class="absolute animate-pulse">
          <music-icon />
        </div>
        <div class="absolute">
          <div
            class="border-dashed border-2 animate-none border-[#F2C94C] rounded-full p-[7rem]"
          >
            <div class="animate-spin-slow">
              <div class="bg-black p-2 transform translate-x-[7.5rem]"></div>
            </div>
          </div>
        </div>
        <div class="absolute">
          <div
            class="border-dashed border-2 border-[#F2C94C] rounded-full p-[12rem]"
          >
            <div class="animate-spin-slow flex">
              <div class="bg-black p-2 transform -translate-x-[12.5rem]"></div>
            </div>
          </div>
        </div>
        <div class="absolute">
          <div
            class="border-dashed border-2 border-[#F2C94C] rounded-full p-[16rem]"
          >
            <div class="animate-spin-slow">
              <div class="bg-black p-2 transform translate-x-[16.5rem]"></div>
            </div>
          </div>
        </div>
        <div class="absolute">
          <div
            class="border-dashed border-2 border-[#F2C94C] rounded-full p-[20rem]"
          >
            <div class="animate-spin-slow">
              <div class="bg-black p-2 transform translate-y-[20.5rem]"></div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="border-dashed border-2 border-[#F2C94C] rounded-full p-[25rem]"
          >
            <div class="animate-spin-slow">
              <div class="bg-black p-2 transform -translate-y-[25.5rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div>
      <div>
        <div class="justify-center p-10 flex-col items-center flex">
          <div
            class="w-fit absolute mt-16 p-[6rem] border-2 border-white rounded-full flex bg-[#534571] items-center flex-col"
          >
            <div class="absolute -mt-[2.2rem]">
              <div class="flex flex-col">
                <div class="flex items-center flex-col">
                  <guy-with-guitars-icon />
                  <h1 class="font-mono mt-1">FolkSoul</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#FBD560] pb-10 rounded-2xl">
        <div class="flex justify-between mx-3">
          <div class="mt-3 flex">
            <div class="bg-[#534571] rounded-full p-2"></div>
          </div>
          <div class="mt-3 flex">
            <div class="bg-[#534571] rounded-full p-2"></div>
          </div>
        </div>
        <div class="w-[45rem] leading-8 px-12">
          <p class="mt-40">
            დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
            დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის
            გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ
            იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება
            მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“
            ეწოდება.
          </p>
          <p class="mt-10">
            დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს.
            ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა
            ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან.
            პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან
            და სწრაფად.
          </p>
        </div>
      </div>
      <div class="flex mx-44 justify-around mt-4 mb-12 items-center">
        <div
          class="bg-white cursor-pointer rounded-full flex items-center justify-center p-5"
        >
          <facebook-icon class="absolute" />
        </div>
        <twitter-icon class="cursor-pointer" />
        <youtube-icon class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GuyWithGuitarsIcon from "@/components/icons/GuyWithGuitarsIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import YoutubeIcon from "@/components/icons/YoutubeIcon.vue";
import MusicIcon from "@/components/icons/MusicIcon.vue";
</script>
