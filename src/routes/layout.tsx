import { component$, Slot } from '@builder.io/qwik';

import Header from '../components/header/header';

export default component$(() => {
  return (
    <div class="flex flex-col justify-between h-full">
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer class="w-full text-center py-2">
        <a href="https://github.com/omrumbakitemiz" target="_blank">
          Made with ❤️ by @immino{' '}
        </a>{' '}
        @{new Date().getFullYear()} - {import.meta.env.VITE_VERCEL_ENV}.
        {import.meta.env.PACKAGE_VERSION.replace('"', '')}
      </footer>
    </div>
  );
});
