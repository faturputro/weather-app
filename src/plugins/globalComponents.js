import WMapbox from '@/components/common/WMapbox.vue';
import WInput from '@/components/common/WInput.vue';
import WButton from '@/components/common/WButton.vue';
import WSwitch from '@/components/common/WSwitch.vue';

const globalComponents = {
  install(Vue) {
    Vue.component('w-input', WInput);
    Vue.component('w-map', WMapbox);
    Vue.component('w-button', WButton);
    Vue.component('w-switch', WSwitch);
  },
};

export default globalComponents;
