<script setup>
import storage from "./../assets/HomeImages/storage.jpg";
import sack from "./../assets/HomeImages/sack.jpg";
import BottomMenu from "../components/BottomMenu.vue";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 my-16 text-sm">
    <div>
      <p class="text-xl text-center">
        Turf Diagnostics & Design<br />

        Helping You Have Healthy Turf
      </p>
      <div class="text-center">
        <span>Issues 1 </span>
        <span>2005</span>
      </div>
      <p class="text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-3xl my-5">
        HOW TO SEND SAMPLES TO THE LAB FOR TESTING
      </p>
      <div class="flex flex-col lg:flex-row my-10">
        <div class="lg:w-2/3 flex flex-col gap-y-5">
          <p>
            Our goal with the Helping You Have Healthy Turf newsletter has
            always been two-fold. The first goal is to be informative and
            educational for our customers. The second goal, of course, is to try
            to encourage the reader to use Turf & Soil Diagnostics for their
            soil testing.
          </p>
          <p>
            This newsletter concerns how to properly package and send samples in
            to the lab for the various testing procedures we perform. We feel
            this is useful information for our customers. However, it is also a
            little more self-serving than most of our newsletters. We often
            receive samples that are inadequate in one form or another. Bad
            samples are the biggest problem that we encounter in our lab, and it
            also causes problems for our customers. Please allow us to be
            somewhat self indulgent, as we hope the information in this
            newsletter will be a benefit to our lab and to you our customer.
          </p>
        </div>
        <div class="lg:w-1/3 flex justify-center">
          <img :src="storage" />
        </div>
      </div>
      <div class="flex flex-col lg:flex-row my-10">
        <div class="lg:w-1/3 flex justify-center">
          <img :src="sack" />
        </div>
        <div class="lg:w-2/3 flex flex-col gap-y-5">
          <p>
            The most common problems encountered are improper packaging and
            incorrect sample volume. Improperly packaged samples can lead to
            containers opening during shipment, cross-contamination of samples
            or total loss of sample content. Improper sample amounts to lead to
            project delays, as tests can not begin until enough sample is
            available.
          </p>
          <p>
            Photo on left is of actual samples received by our lab. The bags
            broke open during shipment causing labels to rub off. Individual
            samples were unidentifiable and unusable.
          </p>
        </div>
      </div>
      <p class="my-5">
        Turf & Soil Diagnostics does not accept samples containing hazardous
        materials. Our labs can only process clean soils, sands, aggregates,
        etc.
      </p>
      <div class="my-5">
        <p class="text-red-500">
          We recommend the following procedure for shipment of samples of soils
          or sands to the lab:
        </p>
        <p>1) Place sample in a zipper lock type of bag(s).</p>
        <p>2) Close the bag and label with a permanent marker.</p>
        <p>3) Place bag inside of another bag. Then close the outer bag.</p>
        <p>4) Repeat this process for all samples that are to be submitted.</p>
        <p>
          5) Place samples in a box for shipment. Place packing materials (e.g.
          bubble wrap) around the sample bags.
        </p>
        <p>
          6) Include a sample submittal form inside the box. Submittal forms are
          available on this web site.
        </p>
        <p>
          7) Close and tape the box, then ship to the lab via courier. UPS and
          FedEx deliver to our lab in the afternoon, with DHL delivery late in
          the afternoon. If morning delivery is needed please use FedEx First
          Overnight.
        </p>
      </div>
      <div class="flex flex-col gap-y-5">
        <p>
          How much sample is needed depends upon the testing that is to be
          performed.
        </p>
        <p>
          For most of our soil testing procedures the proper amount of sample to
          supply is one gallon. This amount will also be sufficient for sands
          that are to be tested for rootzones, topdress, or bunkers.
        </p>
        <p>
          A half gallon sample is sufficient for nutrient evaluations, drainage
          gravels, or organic and inorganic amendments.
        </p>
        <p>
          Base stone/top stone testing for artificial turf requires two gallons
          of sample.
        </p>
        <p class="text-red-500">
          Green roof growing media or drainage aggregrate requires five gallons
          of sample.
        </p>
        <p>It is usually best to send these in 5 gallon buckets</p>
        <p>
          Green roof filters or fabrics requires a minimum of two 4"x4" samples.
        </p>
        <p>
          LA Abrasion and sulfate soundness testing for gravels requires three
          gallons.
        </p>
      </div>
      <BottomMenu />
    </div>
  </main>
</template>
<style scoped></style>
