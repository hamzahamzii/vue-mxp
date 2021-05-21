import "@/assets/tailwind.css";
import { DefineComponent, Plugin } from "vue";

declare const VueMxp: Exclude<Plugin["install"], undefined>;
export default VueMxp;

export const VueMxpSample: DefineComponent<{}, {}, any>;
