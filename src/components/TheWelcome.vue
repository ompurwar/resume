<script module>
export default {
  data() {
    return {
      email: "ompurwar96@gmail.com",
      name: "om purwar",
      experties: "full-stack engineer",
      linkedIn_profile: "https://www.linkedin.com/in/om-purwar-6ba4416a/",
      instagram_profile: "https://www.instagram.com/code_with_om/",
      github_profile: "https://github.com/ompurwar",
      cv_link:
        "https://drive.google.com/file/d/1GSG2FKq-3rElYF9PEMNZMeq8zCNt9GoW/view?usp=sharing",
      contact_number: "+918933876208",
    };
  },
  computed: {
    whatsapp_me_at() {
      return `https://wa.me/${this.contact_number}`;
    },
  },
};
// hello
// asd
console.log('om');
</script>

<template>
  <div
    id="main-panel"
    class="
      md:grid md:grid-flow-row
      bg-skin-fill
      md:m-10
      flex
      md:w-[60rem]
      w-[100%]
      h-[40rem]
    "
    style=""
  >
    <div
      class="
        md:absolute
        grid
        md:h-[100%]
        h-[50%]
        md:w-full
        w-[30%]
        md:place-items-center
        z-0
      "
    >
      <img
        src="../assets/om-removebg-preview.png"
        class="aspect-auto object-cover md:w-[30%] sm:ml-0 md:-ml-32"
      />
    </div>
    <div class="md:relative h-full w-full py-3 px-11 font-poppins z-10">
      <div class="flex h-8">
        <div class="px-3">
          <p class="text-skin-base text-xl capitalize font-medium">
            {{ name }}
          </p>
        </div>
        <div class="h-full grid place-content-center ml-10">
          <a :href="`mailto: ${email}`">
            <p class="text-skin-base text-xs">{{ email }}</p>
          </a>
        </div>
        <div
          class="grid  place-content-center ml-auto float-right animate-pulse"
        >
          <div class="w-full grid justify-end">
            <div class="w-[30px] h-[0.1rem] a bg-gray-400 mb-1"></div>
          </div>
          <div class="w-full grid justify-end">
            <div class="w-[25px] h-[0.1rem] a bg-gray-400 mb-1"></div>
          </div>
          <div class="w-full grid justify-end">
            <div class="w-[20px] h-[0.1rem] a bg-gray-400"></div>
          </div>
        </div>
      </div>
      <div class="flex h-[80%] justify-between px-3">
        <div class="grid place-items-center">
          <div class="h-[60%] py-14">
            <h1 class="font-bold text-4xl font-playFair text-skin-base">
              <div class="font-bold">Hi.</div>
              <div class="font-bold mt-2">
                I'm
                <span class="font-bold text-skin-primary capitalize">{{
                  name
                }}</span>
              </div>
            </h1>
            <div class="text-skin-base mt-5 text-xl capitalize">
              {{ experties }}
            </div>

            <div
              class="
                grid
                w-[8.5rem]
                place-items-center
                bg-skin-bg-accent-primary
                rounded-xl
                mt-16
                h-[40px]
              "
            >
              <div class="flex w-full px-2 justify-between font-poppins">
                <div class="flex place-content-center">
                  <span class="self-center text-sm px-2 font-medium"
                    >Hire Me</span
                  >
                </div>
                <div
                  class="
                    font-extrabold
                    border
                    rounded-md
                    h-[1.8rem]
                    w-[1.8rem]
                    grid
                    place-content-center
                    border-orange-500
                    bg-orange-500
                  "
                >
                  <span class="mb-1"> > </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid place-items-center md:w-[17rem]">
          <div class="h-[36%]">
            <div class="font-bold text-skin-primary text-[1rem]">Expert on</div>

            <div class="text-skin-base mt-2 text-2xl leading-8">
              Based in India <br />
              I'm

              <span class="capitalize"> {{ experties }}. </span>
            </div>
            <div class="text-skin-muted text-md mt-3">
              Hey are you looking for
              <strong>
                {{ experties }}
              </strong>
              who can materialize your dream app? <br />
              let's shake hand with me.
            </div>
            <div
              class="
                text-skin-primary
                mt-3
                text-sm
                py-[2px]
                border-b-2 border-orange-500
              "
              style="width: fit-content"
            >
              <a :href="cv_link" target="_blank">
                Download CV <font-awesome-icon :icon="['fas', 'download']" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex h-16">
        <div class="flex gap-1 pl">
          <div class="text-2xl text-skin-base">
            <div>
              <a :href="instagram_profile" class="text-sm" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
            </div>
            <div>
              <a :href="linkedIn_profile" class="text-sm" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </div>
          </div>
          <div class="grid place-content-end text-2xl">
            <div class="flex ml-5 text-sm mb-1">
              <font-awesome-icon
                class="text-skin-base"
                :icon="['fab', 'github-square']"
              />

              <a
                class="text-xs self-center ml-2 font-poppins"
                :href="github_profile"
                target="_blank"
                >{{ github_profile }}</a
              >
            </div>
          </div>
        </div>
        <div class="flex grow justify-end">
          <a
            :href="whatsapp_me_at"
            class="self-end flex md:mr-5"
            target="_blank"
          >
            <font-awesome-icon
              class="text-green-600 touch-pinch-zoom text-xl mr-2"
              :icon="['fab', 'whatsapp']"
            />
            WhatsApp me @
            <span class="underline ml-1">
              {{ contact_number }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
