<script setup lang="ts">
import globePlant from "./../assets/HomeImages/globePlant.jpg";
</script>
<template>
  <main>
    <div class="px-5 md:px-24 lg:px-24 text-sm">
      <p class="text-3xl md:text-4xl lg:text-5xl">A few words about us</p>
      <div class="flex flex-col md:flex-row lg:flex-row gap-x-10">
        <div class="md:w-3/4 lg:w-3/4">
          <p class="text-red-700 my-5">
            At the start of 2015, the two leading physical testing labs serving
            the landscape, golf and sports turf industries joined together to
            form the Turf & Soil Diagnostics laboratory network.
          </p>
          <p class="my-5">
            Since that time we have been building on the rich legacies of the
            former Turf Diagnostics & Design and Hummel & Co. labs, to provide
            our customers with a network that has unmatched testing capabilities
            and resources. We provide our customers with legacy testing, as well
            as, new and innovative techniquest for evaluation of soils, growing
            media, and drainage systems. Our areas of expertise include natural
            and synthetic turf systems for sports fields and golf courses, and
            specialty landscape soils including structural soils, green roofs,
            and retention basins.
          </p>
          <p class="my-5">
            We pledge to provide our customers with the highest quality data and
            consultation, fastest turnaround, and best possible service. We
            further pledge to work with the industries we serve to provide
            better, more consistent test methods and results.
          </p>
          <p class="my-5">
            No matter the specifications or budget, our testing can help ensure
            high quality growing media, rootzones and subgrades with consistent
            performance. Physical evaluation of aggregates, soils and amendments
            gives our clients assurance that they are using quality materials
            for projects ranging from green roofs to athletic fields to golf
            greens.
          </p>
          <p class="my-5">
            Turf and landscape managers benefit from our soil diagnostics and
            turf management program development. Quality control testing
            programs, verify consistent materials are used during construction.
            We also perform Gmax testing for synthetic turf surfaces, and we
            provide product development testing for materials suppliers.
          </p>
          <p class="text-2xl md:text-3xl lg:text-3xl my-5">
            We are proud members and supporters of the following organizations
          </p>
          <ul class="flex flex-col gap-y-5">
            <a href="https://www.gcbaa.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Golf Course Builders Association of America</p>
              </li>
            </a>
            <a href="https://greenroofs.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Green Roofs for Healthy Cities</p>
              </li>
            </a>
            <a href="https://www.sportsfieldmanagement.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Sports Field Management Association</p>
              </li>
            </a>
            <a href="https://texasturf.com/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Texas Turfgrass Association</p>
              </li>
            </a>
            <a href="http://www.hagcsa.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Heart of America Golf Course Superintendents Association</p>
              </li>
            </a>
            <a href="https://www.kgcsa.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Kansas Golf Course Superintdents Association</p>
              </li>
            </a>
            <a href="https://gcsaofny.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Golf Course Superintendents Association of New York</p>
              </li>
            </a>
            <a href="http://www.mokanstma.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>MoKan Sports Turf Managers Association</p>
              </li>
            </a>
            <a href="https://www.nysta.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>New York State Turfgrass Association</p>
              </li>
            </a>
            <a href="https://www.syntheticturfcouncil.org/" target="_blank">
              <li>
                <i class="fa-solid fa-check"></i>
                <p>Synthetic Turf Council</p>
              </li>
            </a>
          </ul>
        </div>
        <!--  -->
        <div class="md:w-1/4 lg:w-1/4">
          <img :src="globePlant" class="mx-auto" />
          <p class="text-3xl text-center">Green Initiative</p>
          <p class="text-red-700 my-5">
            Turf & Soil Diagnostics is commited to protecting our environment.
          </p>
          <p class="my-5">
            All of our test procedures, sample processing, and disposal efforts
            are performed with the intent to reduce, reuse, and recycle.
          </p>
          <p class="my-5">
            We have eliminated the use of hazardous materials in our test
            procedures, and we are committed to reducing or eliminating the use
            of any potentially unsafe substances.
          </p>
          <p>
            Turf & Soil Diagnostics policy is to receive and test only
            uncontaminated soil, growing media and aggregate samples in our
            laboratory. To the extent allowed by law, these materials are reused
            after testing.
          </p>
          <p class="my-5">
            Our green activities include efforts to reduce the amount of waste
            generated in office and lab procedures. Electronic reports and
            documents are produced and used whenever possible. Clean packaging
            materials are reused in-house and through relationships with other
            local businesses. When reuse is not possible, waste is diverted
            through recycling of paper products, metal, glass, and plastics used
            by our company.
          </p>
          <p class="my-5">
            Turf & Soil Diagnostics doesn't test samples containing hazardous
            materials, and we don't produce hazardous waste.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
}
li p {
  text-decoration: underline;
}

li i {
  margin-right: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: green;
}
</style>
