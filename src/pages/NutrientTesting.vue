<script setup>
import BottomMenu from "../components/BottomMenu.vue";
</script>

<template>
  <main class="px-5 md:px-24 lg:px-24 my-16 text-sm">
    <div>
      <p class="text-center">HELPING YOU HAVE HEALTHY TURF</p>
      <div class="flex my-5 justify-around">
        <p>TURF DIAGNOSTICS & DESIGN NEWSLETTER ISSUE #2 2007</p>
        <p>ISSUE #2</p>
        <p>2007</p>
      </div>
      <p
        class="text-sm sm:text-2xl md:text-3xl lg:text-3xl text-center text-red-500"
      >
        How to Interpret a Soil-Test Report
      </p>
      <p class="text-[12px] text-center">By Steve Frack, AgSource Harris</p>
      <p class="my-5">
        In this newsletter we present very useful information from Steve Frack,
        Vice President of AgSource Laboratories in Lincoln, Nebraska.
      </p>
      <p>Soil Characteristics</p>
      <p class="mb-5">
        Soil pH is a measurement of the hydrogen ion concentration in the soil.
        Soil with a pH of < 7.0 is acidic and if > 7.0 is alkaline. Soil pH
        impacts nutrient availability. If extremely acid, limestone is required
        to neutralize the H concentration. Different grass species differ in
        ability to tolerate acidic conditions.
      </p>
      <div class="flex justify-center my-5">
        <table>
          <tbody>
            <tr>
              <td>Grass Species</td>
              <td>Optimum pH range</td>
            </tr>
            <tr>
              <td>Fescue, Bentgrass, or Rye Grass</td>
              <td>5.6 – 6.6</td>
            </tr>
            <tr>
              <td>Bluegrass or Bermudagrass</td>
              <td>5.8 – 6.8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Buffer pH is a laboratory method specifically designed to determine the
        amount of limestone required to raise the soil pH on acid soils. This
        test is only ran when the soil pH value is below 6.5. In addition, it is
        also used to estimate the total amount of hydrogen reported on the soil
        test.
      </p>
      <p>
        Soluble Salt is measured by the soil’s ability to conduct electricity.
        The more electricity conducted the higher the salt content in the soil.
        Soluble salts are mobile in the soil solution and will move up and down
        with the soil water. High soluble salt levels will affect plant growth.
        On this report soluble salt is analyzed as a 1:1 soil water ratio. The
        optimum range for Soluble Salt values is 0.2 to 1.5 mmhos/cm.
      </p>
      <p>
        Cation Exchange Capacity (CEC) is reported as an index of a soil’s
        ability to hold cations. It is an estimated value based on the extracted
        cations from the soil analysis (calcium Ca++, magnesium Mg++, potassium
        K+, sodium Na+ and hydrogen H+). Since the clay and organic sites in the
        soil have a negative charge, the positively charged cations bond with
        these sites. Therefore, CEC is closely related to soil texture.
      </p>
      <div class="flex justify-center my-5">
        <table>
          <tbody>
            <tr>
              <td>CEC value</td>
              <td>Estimated texture</td>
            </tr>
            <tr>
              <td>1 – 8</td>
              <td>Sand</td>
            </tr>
            <tr>
              <td>9 – 12</td>
              <td>Loamy sand</td>
            </tr>
            <tr>
              <td>13 – 20</td>
              <td>Sandy or silty loam</td>
            </tr>
            <tr>
              <td>21 – 28</td>
              <td>Loam</td>
            </tr>
            <tr>
              <td>29 – 40</td>
              <td>Clay or clay loam</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Percentage of base saturation is calculated by dividing each individual
        cation by the total CEC. Below is a table representing the optimum
        ratings.
      </p>
      <div class="flex justify-center my-5">
        <table>
          <tbody>
            <tr>
              <td>CEC range</td>
              <td>3-7</td>
              <td>8-15</td>
              <td>16-25</td>
              <td>25-36</td>
              <td>>35</td>
            </tr>
            <tr>
              <td>Cation Optimum percent base saturation</td>
            </tr>
            <tr>
              <td>Hydrogen</td>
              <td><30</td>
              <td><30</td>
              <td><30</td>
              <td><30</td>
              <td><30</td>
            </tr>
            <tr>
              <td>Sodium</td>
              <td><5</td>
              <td><5</td>
              <td><5</td>
              <td><5</td>
              <td><5</td>
              <td><5</td>
            </tr>
            <tr>
              <td>Magnesium</td>
              <td>11-20</td>
              <td>11-20</td>
              <td>11-20</td>
              <td>11-20</td>
              <td>11-20</td>
            </tr>
            <tr>
              <td>Calcium</td>
              <td>50-75</td>
              <td>50-75</td>
              <td>50-75</td>
              <td>50-75</td>
              <td>50-75</td>
            </tr>
            <tr>
              <td>Potassium</td>
              <td>3.3-7.7</td>
              <td>1.5-4.3</td>
              <td>1.0-2.2</td>
              <td>0.7-1.3</td>
              <td>0.5-1.3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="my-5">
        Sodium provides information for reducing saline and/or alkaline
        conditions.
        <span class="text-red-500"
          >Whenever the base saturation of sodium exceeds 5%, water infiltration
          rates can be reduced.</span
        >
        When correcting soils with high sodium, check and rate drainage
        conditions. To reduce the salt load it is important to improve
        percolation rates. If appropriate, select one of these soil amendments:
        gypsum, epsom salts or elemental sulfur.
      </p>
      <p>Soil nutrients</p>
      <p>
        Potassium is a cation held on soil’s exchange sites. The form of
        potassium extracted is readily available for plant uptake. The table
        below provides a generalized interpretation.
      </p>
      <p>
        As noted,
        <span class="text-red-500"
          >soil texture influences availability. Sandy textures do not have
          enough holding sites; resulting in high leaching rates.</span
        >
        Heavier textures will hold onto increasing amounts of K. Therefore, high
        application rates are not advisable on sand based greens, unless using a
        slow release source of K.
      </p>
      <p>
        Potassium is necessary for the translocation of sugars and the process
        of starch formation. It is also required for the opening and closing of
        the stomata. Potassium is contained in the plant cells and tissues,
        therefore, it is removed in large quantities when vegetative growth is
        removed (removal of clippings).
      </p>
      <p>
        Magnesium is contained in the chlorophyll molecule, making it essential
        for photosynthesis. It is also used as an activator for many enzymes
        required in growth processes.
      </p>
      <p>
        Calcium is used in the structural stability of the plant. It is part of
        the cell walls and membranes and needed for the formation of new cells.
        Calcium deficiencies can be associated with alkaline or high pH soils as
        the solubility of calcium can be quite low.
      </p>
      <div class="flex justify-center my-5">
        <table>
          <tbody>
            <tr>
              <td>Optimum range</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Soil Cation Exchange Capacity (CEC)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>5</td>
              <td>10</td>
              <td>15</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Potassium</td>
              <td>91 – 121</td>
              <td>121 - 160</td>
              <td>151 – 200</td>
              <td>181 – 240</td>
            </tr>
            <tr>
              <td>Magnesium</td>
              <td>60 – 119</td>
              <td>120 – 239</td>
              <td>180 – 359</td>
              <td>240 – 479</td>
            </tr>
            <tr>
              <td>Calcium</td>
              <td>600 – 1199</td>
              <td>1200 – 2399</td>
              <td>1800 – 3599</td>
              <td>2400 –</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Phosphorus has two types of extraction that are used in this report; if
        soil pH < 7.2 Bray I, if soil pH > 7.1, Olson P. To avoid confusion, P
        is always reported as a Bray I value. In the plant, phosphorus
        stimulates early growth and root formation. Its primary usage is in
        storage and transfer of energy throughout the plant. The optimum
        Phosphorus range is 30 - 37 ppm, and the warning rage is < 30 ppm or >
        50 ppm.
      </p>
      <p>Micronutrients</p>
      <p>
        Zinc is an essential component of several enzyme systems affecting plant
        growth. If deficient, terminal growth areas will be affected resulting
        in decreased stem elongation, malformed or decreased terminal buds and
        leaf development.
      </p>
      <p>
        Manganese serves as an activator for enzymes utilized in growth
        processes and assists iron in chlorophyll formation. Deficiencies will
        appear as chlorosis on new plant tissue.
      </p>
      <p>
        Copper is an activator of several plant enzymes involved in protein
        synthesis.
      </p>
      <p>
        Iron is required for the formation of chlorophyll in plant cells and
        serves as an activator for processes such as respiration and
        photosynthesis. A deficiency will occur as chlorosis of new (young)
        tissue.
      </p>
      <p>
        Boron is used by the differentiation process of meristem cells. A
        deficiency will cause the death of terminal growth, stimulating lateral
        buds to develop. Sulfur is a component of three amino acids, which are
        involved in the synthesis of protein.
      </p>
      <div class="flex justify-center my-5">
        <table>
          <tbody>
            <tr>
              <td>Nutrient</td>
              <td>Optimum range</td>
            </tr>
            <tr>
              <td>Zinc</td>
              <td>1.2 – 3.5</td>
            </tr>
            <tr>
              <td>Manganese</td>
              <td>5.0 - 20</td>
            </tr>
            <tr>
              <td>Copper</td>
              <td>0.3 – 1.0</td>
            </tr>
            <tr>
              <td>Iron</td>
              <td>5.0 - 20</td>
            </tr>
            <tr>
              <td>Boron</td>
              <td>0.5 – 1.0</td>
            </tr>
            <tr>
              <td>Sulfur</td>
              <td>7.0 - 12</td>
            </tr>
          </tbody>
        </table>
      </div>
      <BottomMenu />
    </div>
  </main>
</template>
<style scoped></style>
