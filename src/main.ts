import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes/router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
