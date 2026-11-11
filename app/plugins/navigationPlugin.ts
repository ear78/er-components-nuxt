import { useNavigation } from '~/composables/navigation';

export default defineNuxtPlugin({
  name: 'navigation-plugin',
  parallel: true,
  async setup() {
    addRouteMiddleware(
      'navigation-change',
      () => {
        // Resets navigation to show when route change happens
        const { showNav } = useNavigation();
        showNav.value = true;
      },
      { global: true },
    );
  },
});
