import { pkg } from "@carbon/ibm-cloud-cognitive/es/settings";

// Enable all 'canary' (not yet reviewed/released) components
// that we want to make use of

pkg.setAllComponents(true);
pkg.setAllFeatures(true);