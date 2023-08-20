import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Immino } from '~/integrations/react/immino';

export default component$(() => {
  return (
    <>
      <h1 class="text-2xl text-emerald-400">Qwik/React this is React component</h1>
      <Immino client:visible></Immino>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React',
};
