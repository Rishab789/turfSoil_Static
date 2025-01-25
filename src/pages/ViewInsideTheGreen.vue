<script setup>
import equipement from "./../assets/HomeImages/mascoroprofiler.jpg";
import scale from "./../assets/HomeImages/Scale.jpg";
import profile from "./../assets/HomeImages/core-drawing.jpg";
import BottomMenu from "../components/BottomMenu.vue";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 text-sm">
    <div class="my-10">
      <p
        class="text-red-500 text-lg sm:text-xl md:text-2xl lg:text-2xl text-center mt-5"
      >
        A View Inside the Green
      </p>
      <p class="text-center mb-5">by: Sam Ferro, Turf Diagnostics & Design</p>
      <div class="flex flex-col gap-y-5">
        <p>
          Before you spend a lot of money and time renovating or remodeling the
          greens at your golf course,
          <span class="text-red-500"
            >wouldn’t it be great to peer down below the surface to see how the
            rootzone and drainage are working.</span
          >
          A look below the surface can provide insight into green make-up and
          performance. Sub-surface investigations when performed properly can be
          minimally invasive, yet provide insight and guidance for golf course
          maintenance and renovation activities.
        </p>
        <p>
          This article provides information about soil profiling, a series of
          techniques to study the inner working of a turfgrass system. A soil
          profile examination consists of taking an undisturbed sample from the
          soil. By providing a cross section of the turf system, the profile
          acts as a window into the inner workings and make-up of the green.
          Soil profile analyses can be a simple visual check performed by the
          golf course superintendent or an in-depth analysis performed by a
          testing lab or agronomist.
        </p>
        <p>
          <span class="text-red-500"
            >The ability to visually observe the current condition of the green
            is what makes soil profiles so powerful. </span
          >Problems such as layering (which disrupts water movement) are often
          evident once the profile is evaluated. Additionally, inconsistencies
          in green depths, migration of sand into the gravel layer, and root
          growth problems and successes can also be identified.
        </p>
        <p>
          In its simplest form a profile analysis consists of pushing a probe
          into the soil, withdrawing the probe from the soil, then observing the
          soil for stratification or other issues. A variety of soil profilers
          are commercially available. These devices typically have sampling
          depths of 10 cm to 30 cm, and allow for simple sampling and easy
          replacement of the removed soil.
        </p>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-x-5 my-10"
      >
        <div class="w-full lg:w-1/2 flex justify-end">
          <img :src="equipement" class="" />
        </div>
        <div class="w-full lg:w-1/2">
          <p>Figure 1: Soil profiles taken from a golf green using</p>
          <p>two types of sampling equipment.</p>
          <p>Photograph used with permission.</p>
        </div>
      </div>
      <div class="flex flex-col gap-y-5">
        <p>
          Figure 1 shows profile samples taken with two different types of
          samplers. These samplers are great for routine observations of the
          soil profile. The smaller tubular samplers typically provide a fast
          method for observing soil conditions. Wedge samplers provide a bigger
          viewing area. With both of these types of samplers you can observe
          issues such as soil layering and organic build up at the green
          surface. The larger profilers may also provide additional visuals such
          as root structure and pest presence.
        </p>
        <p>
          <span class="text-red-500"
            >Diagnostic cores are a more detailed version of soil profile
            analyses.</span
          >
          In this technique soil profiles are taken at the golf course, and then
          sent off to a qualified physical-testing laboratory for the diagnostic
          analysis. When a golf course is experiencing problems with drainage or
          turf growth, core testing can often pinpoint the cause of these
          problems. The test reports can provide detail on past maintenance
          practices, the current condition of the soil and turf, and provide
          recommendations for proper maintenance techniques to encourage deep
          root growth and excellent air and water movement. In addition,
          diagnostic core analysis is used to obtain information for greens that
          are performing well. This information can be used to guide routine
          maintenance practices (e.g. topdressing and core aerification) and as
          a baseline for comparison in the future.
        </p>
        <p>
          Diagnostic cores are especially useful when considering remodeling.
          <span class="text-red-500">
            The test results can help to provide guidance as to whether
            regrassing, minor renovations (removal of surface layers), or
            complete rebuilding of greens and drainage are needed.</span
          >
        </p>
      </div>
      <div
        class="my-10 flex flex-col lg:flex-row justify-center items-center gap-x-5"
      >
        <div class="w-full lg:w-1/2 flex justify-end">
          <img :src="profile" />
        </div>
        <div class="w-full lg:w-1/2">
          <p>Figure 2: Diagnostic Core Profile Collection.</p>
          <p>Depiction of 2" (25 cm) PVC pipe being driven</p>
          <p>
            through the green into the subgrade to collect profile core sample.
          </p>
        </div>
      </div>
    </div>
    <p class="my-10">
      Diagnostic core sampling is similar to other soil profiling techniques,
      but it does not require any specialized tools or equipment. The core
      sample is typically collected by the golf course maintenance staff, using
      a piece of beveled PVC pipe, a hammer, and a piece of lumber (figure 2).
      Sample collection is achieved by driving the beveled end of the PVC pipe
      through the green profile until subgrade is penetrated. The pipe is then
      removed from the soil, packed very tightly, and shipped to the laboratory.
    </p>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2">
        <p class="mb-10">
          <span class="text-red-500"
            >This article appeared in the March 2012 issue of Asian Golf
            Business. </span
          >Upon arrival at the laboratory, cores are carefully handled so as not
          to disturb the sample. A qualified consultant makes visual
          observations, and the cores are then tested to determine their
          physical characteristics. Testing is performed at various depths
          throughout the soil profile to determine where the rootzone is
          performing well and where there are problems. With proper analysis and
          recommendations, the golf course can make direct cost/benefit
          comparisons of various maintenance and reconstruction practices.
        </p>
        <div class="">
          <p class="my-5">Figure 3: Core sample from healthy golf green.</p>
          <p>
            Core has been cut open lengthwise for visual and <br />
            physical analysis of the rootzone and drainage.
          </p>
          <p class="my-5">
            This article appeared in the March 2012 issue of Asian Golf
            Business.
          </p>
        </div>
      </div>
      <div class="lg:w-1/2 flex justify-center">
        <div>
          <img :src="scale" />
        </div>
      </div>
    </div>
    <BottomMenu></BottomMenu>
  </main>
</template>
<style scoped></style>
