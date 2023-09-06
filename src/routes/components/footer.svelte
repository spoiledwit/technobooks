<script>
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
  import FaFacebookF from "svelte-icons/fa/FaFacebookF.svelte";

  import financialNav from "../navs/financial-services.json";
  import technicalNav from "../navs/technical-services.json";
  import { toTitleCase } from "$lib/utils";
    import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
</script>

<div
  class=" pt-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
>
  <div
    class=" module w-full flex flex-col gap-12 bg-zinc-900 px-4 py-12 md:px-20 xl:px-40"
  >
    <div class=" flex w-full justify-center gap-6">
      <a href="https://www.facebook.com/profile.php?id=61550876102941" target="_blank" class=" w-5 aspect-square text-gray-300">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/tbcgulf/" target="_blank" class=" w-5 aspect-square text-gray-300">
        <FaInstagram />
      </a>
    
      <a href="https://www.linkedin.com/company/technobooks/?viewAsMember=true" target="_blank" class=" w-5 aspect-square text-gray-300">
        <FaLinkedin />
      </a>
    </div>
    <div
      class=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-4"
    >
      {#each Object.entries(financialNav) as e}
        <div class=" flex flex-col gap-2">
          <p class=" text-gray-300 font-bold text-sm whitespace-nowrap">
            {toTitleCase(e[0])}
          </p>
          {#each e[1] as service}
            <a
              href={`/services/${service}`}
              class=" text-sm text-gray-400 hover:text-gray-200 transition-all"
            >
              {toTitleCase(service)}
            </a>
          {/each}
        </div>
      {/each}
      <div class=" flex flex-col gap-2">
        <p class=" text-gray-300 font-bold text-sm whitespace-nowrap">
          Technical
        </p>
        {#each Object.entries(technicalNav) as [path, name]}
          <div class=" flex flex-col gap-2">
            <a
              href={`/services/${path}`}
              class=" text-sm text-gray-400 hover:text-gray-200 transition-all"
            >
              {name}
            </a>
          </div>
        {/each}
      </div>
      <div class=" flex flex-col gap-2">
        <p class=" text-gray-300 font-bold text-sm whitespace-nowrap">
          Useful Links
        </p>
        <div class=" flex flex-col gap-2">
          <a
            href={`/about`}
            class=" text-sm text-gray-400 hover:text-gray-200 transition-all"
          >
            About Us
          </a>
          <a
            href={`/privacy-policy`}
            class=" text-sm text-gray-400 hover:text-gray-200 transition-all"
          >
            Privacy
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
