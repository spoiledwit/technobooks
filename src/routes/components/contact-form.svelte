<script lang="ts">
  import Input from "./input.svelte";
  import user from "../../assets/user.svg";
  import email from "../../assets/email.svg";
  import Textarea from "./textarea.svelte";
  import CTA from "./cta.svelte";
  import { enhance } from "$app/forms";
  import MdPhone from "svelte-icons/md/MdPhone.svelte";
  import MdLocationOn from "svelte-icons/md/MdLocationOn.svelte";
  import DiWebplatform from "svelte-icons/di/DiWebplatform.svelte";
  import MdEmail from "svelte-icons/md/MdEmail.svelte";
  export let className: string = "";
</script>

<div
  id="application-form"
  class={" w-full flex flex-col pt-12 items-center gap-20 md:px-32 xl:px-64 px-4 " +
    className}
>
  <h2
    class=" w-full text-5xl md:text-7xl font-serif text-center text-red-200 tracking-tight"
  >
    Get In Touch With Us!
  </h2>

  <div class=" flex flex-col md:flex-row w-full gap-12">
    <div class="w-full gap-4 flex flex-col">
      <h3 class=" text-gray-300 text-xl font-bold tracking-tight">
        Contact Us
      </h3>
      <p class=" text-gray-400 text-sm">
        It is our pleasure to serve you and your company on both; short & long
        term business relationship contact. We provide IT services for new
        customer and our existed clients. And our client's satisfaction is our
        main mission. satisfaction of customer grows is a part of our company's
        success.
      </p>
      <div class="h-full" />
      <div class=" w-full gap-4 flex items-center">
        <div class=" w-8 text-gray-300">
          <MdPhone />
        </div>
        <p class=" text-gray-300 font-bold">+971 521508056</p>
      </div>
      <a href="/" class=" w-full gap-4 flex items-center">
        <div class=" w-8 text-gray-300">
          <DiWebplatform />
        </div>
        <p class=" text-gray-300 font-bold">www.tbcgulf.com</p>
      </a>
      <div class=" w-full gap-4 flex items-center">
        <div class=" w-8 text-gray-300">
          <MdLocationOn />
        </div>
        <p class=" text-gray-300 font-bold">
          IFZA, Silicon Oasis, DDP, Building A1, Dubai, UAE
        </p>
      </div>
      <a
        href="mailto:info@technobooks.com"
        class=" w-full gap-4 flex items-center"
      >
        <div class=" w-8 text-gray-300">
          <MdEmail />
        </div>
        <p class=" text-gray-300 font-bold">info@tbcgulf.com</p>
      </a>
      <div class="h-full" />
    </div>

    <form
      class=" w-full flex flex-col items-center gap-4"
      method="POST"
      use:enhance
    >
      <div class="w-full flex flex-col gap-4">
        <Input
          required
          name="full-name"
          id="full-name"
          label="Full Name"
          placeholder="John Doe"
        >
          <img
            loading="lazy"
            src={user}
            alt="user icon"
            class="w-5"
            slot="icon"
          />
        </Input>
        <Input
          required
          name="email"
          id="email"
          type="email"
          label="Your Email"
          placeholder="example@example.com"
        >
          <img
            loading="lazy"
            src={email}
            alt="email icon"
            class="w-5"
            slot="icon"
          />
        </Input>
      </div>

      <Textarea
        name="experience"
        id="experience"
        placeholder="Please provide details about your business or specific needs"
      />
      <CTA type="submit" className="w-32 h-10 self-end">Submit</CTA>
    </form>
  </div>
</div>
