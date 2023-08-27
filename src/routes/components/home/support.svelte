<script>
  import SupportCard from "./support-card.svelte";
</script>

<div class=" flex flex-col gap-16">
  <h2 class=" text-5xl text-gray-900 text-center">Customer Support</h2>

  <div
    class=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-x-12 gap-y-16 px-4 md:px-28 lg:px-56 xl:px-80"
  >
    <SupportCard index={1}>
      <svelte:fragment slot="head">Purchase a Package</svelte:fragment>
      <svelte:fragment slot="content">
        We offer different packages, choose the suitable one for you or your
        company.
      </svelte:fragment>
    </SupportCard>
    <SupportCard index={2}>
      <svelte:fragment slot="head"
        >Register To Our Support System</svelte:fragment
      >
      <svelte:fragment slot="content">
        You can register using your personal email address or with your
        Facebook, Twitter or Gamail account.
      </svelte:fragment>
    </SupportCard>
    <SupportCard index={3}>
      <svelte:fragment slot="head">Submit Your Ticket</svelte:fragment>
      <svelte:fragment slot="content">
        Describe your device's issue at our easy form. And you'll receive a
        confirmation email from our support team.
      </svelte:fragment>
    </SupportCard>
    <SupportCard index={4}>
      <svelte:fragment slot="head">Download Remote Support App</svelte:fragment>
      <svelte:fragment slot="content">
        We'll sen you a link to download our free app which allows us to access
        your device and fix the problem remotely.
      </svelte:fragment>
    </SupportCard>
    <SupportCard index={5}>
      <svelte:fragment slot="head">Run The App</svelte:fragment>
      <svelte:fragment slot="content">
        Run the app, and use our provided access username and password.
      </svelte:fragment>
    </SupportCard>
    <SupportCard index={6}>
      <svelte:fragment slot="head">Let Us Solve It</svelte:fragment>
      <svelte:fragment slot="content">
        Accepting access request will allow our agent to control your device
        securely. We may call you if required.
      </svelte:fragment>
    </SupportCard>
  </div>
</div>
