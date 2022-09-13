import { defineRule } from "vee-validate";
import {
  required,
  email,
  min,
  max,
  confirmed,
  numeric,
} from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("confirmed", confirmed);
defineRule("numeric", numeric);

defineRule("geo", (value) => {
  if (!/^[ა-ჰ ]+$/.test(value)) {
    return `#წერე ქართულად!`;
  }
  return true;
});

defineRule("hashtag", (value) => {
  if (!value.startsWith("#")) {
    return `წერა დაიწყეთ # -ით`;
  }
  return true;
});

defineRule("uppercase", (value) => {
  if (value !== value.toUpperCase()) {
    return "მხოლოდ მაღალი რეგისტრის ასოებია დაშვებული";
  }
  return true;
});
