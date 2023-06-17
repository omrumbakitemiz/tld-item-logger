import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="text-center mt-5 text-xl">
      Please go to &nbsp;
      <a href="/maps/1">
        <code class="text-blue-400">/maps/1</code>
      </a>
      &nbsp; route to start using the app.
    </div>
  );
});

export const head: DocumentHead = {
  title: 'TLD Item Logger',
  meta: [
    {
      name: 'description',
      content: 'The Long Dark Item Logger',
    },
  ],
};
