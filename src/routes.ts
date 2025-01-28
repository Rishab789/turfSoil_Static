import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Articles from "./views/Articles.vue";
import Contacts from "./views/Contacts.vue";
import LabAccreditation from "./views/LabAccreditation.vue";
import SampleSubmittal from "./views/SampleSubmittal.vue";
import Services from "./views/Services.vue";
import GolfCourseTraining from "./pages/GolfCourseTraining.vue";
import GreenRoof from "./pages/GreenRoof.vue";
import LandscapeTesting from "./pages/LandscapeTesting.vue";
import SportsTurfTesting from "./pages/SportsTurfTesting.vue";
import TurfDiagnostic from "./pages/TurfDiagnostic.vue";
import NotFound from "./pages/NotFound.vue";
import SoilTestDescription from "./pages/SoilTestDescription.vue";
import ViewInsideTheGreen from "./pages/ViewInsideTheGreen.vue";
import UnderstandingGmaxReports1 from "./pages/UnderstandingGmaxReports1.vue";
import DirtyThoughts from "./pages/DirtyThoughts.vue";
import SamplePack from "./pages/SamplePack.vue";
import NutrientTesting from "./pages/NutrientTesting.vue";
import CoreAeration from "./pages/CoreAeration.vue";
import UnderstandingGmaxReports2 from "./pages/UnderstandingGmaxReports2.vue";
import UnderstandingGmaxReports3 from "./pages/UnderstandingGmaxReports3.vue";
import Policy from "./pages/Policy.vue";

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Articles", path: "/articles", component: Articles },
  { name: "Contacts", path: "/contacts", component: Contacts },
  { name: "Policy", path: "/privacy-policy", component: Policy },
  {
    name: "LabAccreditation",
    path: "/labaccreditation",
    component: LabAccreditation,
  },
  {
    name: "SampleSubmittal",
    path: "/samplesubmittal",
    component: SampleSubmittal,
  },
  { name: "Services", path: "/services", component: Services },
  { name: "GolfCourse", path: "/golfcourse", component: GolfCourseTraining },
  { name: "GreenRoof", path: "/greenroof", component: GreenRoof },
  { name: "Landscape", path: "/landscapetesting", component: LandscapeTesting },
  { name: "SportsTurf", path: "/sportsturf", component: SportsTurfTesting },
  {
    name: "TurfDiagnostic",
    path: "/turfdiagnostic",
    component: TurfDiagnostic,
  },
  {
    name: "SoilTestDescription",
    path: "/soiltestdescription",
    component: SoilTestDescription,
    meta: { noHeaderFooter: true },
  },
  {
    name: "ViewInsideTheGreen",
    path: "/a-view-inside-the-green",
    component: ViewInsideTheGreen,
  },
  {
    name: "UnderstandingGmaxReports1",
    path: "/understanding-gmax-reports",
    component: UnderstandingGmaxReports1,
  },
  {
    name: "UnderstandingGmaxReports2",
    path: "/understanding-gmax-reports2",
    component: UnderstandingGmaxReports2,
  },
  {
    name: "UnderstandingGmaxReports3",
    path: "/understanding-gmax-reports3",
    component: UnderstandingGmaxReports3,
  },
  {
    name: "DirtyThoughts",
    path: "/dirty-thoughts",
    component: DirtyThoughts,
  },
  {
    name: "SamplePack",
    path: "/sample_pack",
    component: SamplePack,
  },
  {
    name: "NutrientTesting",
    path: "/nutrient-testing",
    component: NutrientTesting,
  },
  {
    name: "CoreAeration",
    path: "/core-aeration",
    component: CoreAeration,
  },
  { name: "NotFound", path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
