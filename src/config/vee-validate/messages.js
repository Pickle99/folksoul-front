import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize({
    ka: {
      names: {
        name: "სახელი",
        password: "პაროლი",
        member_name: "ჯგუფის წევრის სახელი",
        instrument: "ინსტრუმენტი",
        orbit_width: "ორბიტის სიგანე",
        color: "ფერი",
        biography: "ბიოგრაფია",
      },
      messages: {
        required: "{field}ს ველი სავალდებულოა",
        min: "{field}ს ველი უნდა შედგებოდეს მინიმუმ 0:{min} სიმბოლოსგან",
        max: "{field}ს ველი უნდა შედგებოდეს მაქსიმუმ 0:{max} სიმბოლოსგან",
        numeric: "{field}ს ველი უნდა შეიცავდეს მხოლოდ რიცხვებს",
      },
    },
  }),
});
