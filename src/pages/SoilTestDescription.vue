<script setup lang="ts">
import { RouterLink } from "vue-router";
import testBottles from "./../assets/Home images/testBottles.jpg";
import bunkerSeeds from "./../assets/Home images/BunkerSeeds.jpg";
</script>
<template>
  <main class="my-48 text-sm">
    <div class="px-24">
      <p class="text-5xl text-center my-10">Turf & Soil Diagnostics</p>
      <p class="text-3xl text-center my-5">
        Brief Descriptions of Some of our most common Soil Tests
      </p>
      <p class="my-5">
        Some of our most common golf and sports turf tests are described below.
      </p>
      <div class="flex items-center">
        <div class="w-3/4">
          <p class="my-5">
            <span class="text-red-700">Particle Size Analysis:</span>
            Particle Size Analysis (PSA) is one of the most descriptive analyses
            performed on soil materials. The PSA analysis includes a
            determination of the clay content using a pipette method and a sand
            grain distribution. Parameters such as the diameter 15 (D15) and
            uniformity coefficient (Cu) are reported. A textural classification
            based on the United States Department of Agriculture (USDA) will
            also be provided. Sands for use in sand based turf systems and sand
            traps for golf courses will have a shape of sand particle provided
            according to United States Golf Association (USGA) - Green Section
            requirements. The PSA analysis is composed of two distinct phases.
          </p>
          <p class="my-5">
            The first phase is the soil textural analysis and is defined by the
            sand, silt, and clay content. The USDA classification criteria
            define sand as the material retained on a 270 mesh (0.05mm) sieve.
            The second phase of the PSA is the sand grain distribution analysis.
            Sand grain distribution can be based on the USDA, USGA, or other
            specifications. All sand grain distributions are determined on the
            sand component that has had all the silt and clay removed. The
            results of the PSA are useful in estimating the physical and
            chemical performance of a sand or soil.
          </p>
        </div>
        <div class="w-1/4">
          <img :src="testBottles" />
          <p>Soil Texture Test Cylinders with varying amounts of silt & clay</p>
        </div>
      </div>
      <p class="my-5">
        Particle size distribution and textural analysis can be performed as
        independent tests.
      </p>
      <p class="my-5">
        <span class="text-red-700">Physical Performance Evaluation: </span>The
        physical performance evaluation (PE) provides information concerning the
        infiltration rate, bulk density, and porosity characteristics of a
        proposed rootzone material. The methods used for determining the
        parameters are based on standard agronomic test methods and the USGA
        protocol. Conceptually, the method involves compacting a sample at field
        capacity and determining the listed parameters. The USGA protocol
        requires a particle density determination for every sample. The samples
        are compacted using a 14.3 ft-lbs/in2 force. Infiltration rates are
        determined using a constant head saturated hydraulic conductivity
        (K-SAT). The infiltration rates (K-SAT) are adjusted to a rate
        equivalent to 20C water temperature for consistency of reporting.
      </p>
      <p class="my-5">
        The PE analysis is a useful risk assessment tool in determining the
        suitability of submitted materials for use in gravity drained perched
        sand turf systems such as the USGA putting green system. Important
        parameters that aid in risk assessment are the K-SAT and capillary
        porosity values. The PE is performed on a compacted sample and
        represents a worst possible case scenario in regards to the rootzone
        performance. The USGA offers guides for selecting or designing
        acceptable rootzones. The PE analysis can be performed on field or lab
        blended mixes.
      </p>
      <div class="my-5">
        <p class="text-red-700">Lab Made Mix</p>
        <p>
          Submitted components are used to make a mix in the lab and perform the
          PE analysis. The mix preparation and analyses are tailored to design
          agronomically acceptable rootzones for sand based systems. The bulk
          weights and moisture contents of each component are defined and
          reported with the PE results. Organic amendment bulk weights are
          usually based on the manufacturer criteria, while the bulk weights of
          sand and other amendment are determined in the lab. Since most mixes
          are defined as a volume ratio, we offer a volume conversion to provide
          an objective analysis. To offer a guide as to how much of each
          component is necessary to make the mix, an estimated yield report is
          provided. The actual yields of components may vary according to
          moisture contents of the respective materials on-site.
        </p>
      </div>
      <div class="my-5">
        <p class="text-red-700">Field Blended Mix</p>
        <p>
          There are times that rootzone mixes are already available and a
          determination of the physical performance is required. In this case,
          the PE analysis involves the determination of a submitted rootzone mix
          for suitability in perched sand based turf systems. Analysis of a
          submitted mix is offered at lower price than lab blend testing. If
          desired only the infiltration rate (K-SAT) will be provided.
        </p>
      </div>
      <p class="my-5">
        The USGA protocol requires an organic matter content to be determined in
        conjunction with the PE analysis. This defines the mix ratio, and
        provides criteria for future quality control of construction programs.
        For quality control testing, the organic matter content and particle
        size analysis (PSA) are required to properly check the integrity of the
        rootzone as it is produced. These two analyses offer a quick, reliable,
        and affordable method of providing quality control for rootzone mixes.
      </p>
      <p class="my-5">
        <span class="text-red-700">Organic Matter Determination:</span> Organic
        matter test results are determined via combustion. Results are reported
        on a dry weight basis. Temperature of combustion is defined by the
        material being tested and/or the specified test method. Organic soils,
        composts, and peats are combusted at 750C per ASTM D2974. Most soils and
        rootzone mixes are combusted at 360C or 440C depending upon application.
      </p>
      <p class="my-5">
        Organic matter testing is performed to evaluate existing soils and to
        define and provide benchmark data for the quality control of
        construction of sand based rootzones. We report the OM on existing
        soils, mixes made in the lab, and field blended soil mixes to compare to
        to help interpret physical evaluation data. The performance of soiles
        and mixes is directly related to the particle size analysis and the
        organic matter content.
      </p>
      <p class="my-5">
        <span class="text-red-700">Particle Density:</span> Particle density is
        necessary for determining the total porosity of a soil core. Autmated
        pycnometers are used for particle density determination. A pycnometer is
        a specific gravity vessel capable of being filled accurately with a
        definite amount of gas without any air space. Dry weight and volume of
        the sample are determined. Particle density, which equals the dry weight
        divided by the volume, is important in the calculation of total pore
        space.
      </p>
      <p class="my-5">
        <span class="text-red-700">Water Release Characterization: </span>Used
        for moisture release and retention evaluation. Testing can be performed
        on undisturbed soil cores or laboratory compacted samples. Our lab is
        capable of producing a range of soil tensions from 15 bars (permanent
        wilt point), to 1/3 bar pressure (field capacity for continuous soil
        profile), or any range of soil tensions points between 15 bars to less
        than 1/3 bar. A series of moisture release points can be plotted to
        determine at which pressures a soil or amendment product releases
        moisture. The Kansas laboratory is also equipped with Tempe cells for
        low soil tension evaluation from 10 centimeters to 1000 centimeters.
      </p>
      <div class="my-5 flex gap-x-10">
        <p class="w-3/4">
          <span class="text-red-700">Bunker Sand Testing:</span> The bunker sand
          testing package provides data indicating ball lie characteristics
          (fried egg lie testing), sand size shape & color, drainage
          characteristics, and maintenance needs. Everything a superintendent or
          suppplier needs to evaluate current or potential bunker sands. Our
          moisture column test is an innovative procedure that provides guidance
          concerning optimum bunker sand depths. We also offer angle of repose
          testing to evaluate whether sands are suitable steep bunker faces.
        </p>
        <div class="w-1/4">
          <img :src="bunkerSeeds" />
          <p>Photomicrograph of Bunker Sand.</p>
        </div>
      </div>
      <div class="flex justify-center my-10">
        <ul class="flex gap-x-8 list-menu">
          <RouterLink to="/greenRoofs"><li>GREEN ROOFS</li></RouterLink>

          <RouterLink to="/turfdiagnostic"
            ><li>SYNTHETIC TURF-GMAX</li></RouterLink
          >

          <RouterLink to="/golfcourse"><li>GOLF COURSES</li></RouterLink>
          <RouterLink to="/sportsturf"><li>SPORTS TURF</li></RouterLink>

          <RouterLink to="/landscapetesting"
            ><li>LANDSCAPE/SPECIALITY SOILS</li></RouterLink
          >
        </ul>
      </div>
    </div>
  </main>
</template>
<style scoped>
.list-menu li {
  cursor: pointer;
  border: 1px solid black;
  padding: 1rem 1.5rem;
  border-radius: 0.2rem;
}

.list-menu li:hover {
  background-color: burlywood;
  color: white;
}
</style>
