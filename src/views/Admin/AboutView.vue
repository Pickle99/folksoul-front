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
      <div class="flex items-center">
        <div class="mx-12">
          <PencilSquareIcon class="cursor-pointer" />
        </div>
        <div class="flex justify-center items-center flex-col mr-24">
          <div class="flex items-center mt-10 rounded-full">
            <div class="flex">
              <div>
                <img
                  src="@/assets/picture.jpg"
                  alt="img"
                  class="rounded-full w-32 h-32"
                />
              </div>
              <div
                class="p-2 rounded-full bg-gray-400 border-[1.5px] border-[#535353] absolute mt-[6.05rem] ml-[5.2rem] ml-7"
              >
                <CameraIcon class="h-5 w-5" />
              </div>
            </div>
          </div>
          <div class="mt-16">
            <p class="text-justify">
              დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
              დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა
              იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში
              არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია
              ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული
              იმპლანტაცია“ ეწოდება. დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ
              შემთხვევაში — ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და
              ძალიან ჰგვანან პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და
              ბეწვის გარეშე იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან,
              მისი ნოყიერი რძით იკვებებიან და სწრაფად იზრდებიან. როდესაც
              გაზაფხულზე ისინი ბარბაცით გამოდიან ბუნაგიდან და მზეს ეფიცხებიან,
              უკვე მოზრდილები არიან დათვები, როგორც წესი, ეულად ბინადრობენ,
              თუმცა საკვების მოპოვების დროს ხშირად იკრიბებიან. ბელები ორი-სამი
              წლის განმავლობაში დედასთან რჩებიან. ამ პერიოდში მდედრი დათვი კიდევ
              მაკეობს, ამგვარად, მამრი დათვებიც ცხოვრების რაღაც ნაწილს
              ნაშიერებთან ატარებენ. საუკუნეების განმავლობაში დათვების ყველა
              სახეობაზე ნადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ
              აბარებე ზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო ნადირობდნენ
              მათზე.
            </p>
          </div>
        </div>
      </div>
    </WhiteWindow>
  </div>
</template>
<script setup>
import NavigationBar from "@/components/UI/NavigationBar.vue";
import WhiteWindow from "@/components/WhiteWindow.vue";
import PencilSquareIcon from "@/components/icons/PencilSquareIcon.vue";
import CameraIcon from "@/components/icons/CameraIcon.vue";
</script>
