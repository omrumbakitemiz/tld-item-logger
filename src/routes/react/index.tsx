import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/integrations/react';

export default component$(() => {
  console.log('Qwik Render');
  const count = useSignal(0);

  return (
    <div class="flex flex-col gap-4 items-center">
      <h1 class="text-2xl text-emerald-400">Qwik/React this is React component</h1>
      <Button
        onClick$={() => {
          console.log('button clicked');
          count.value++;
        }}
        client:visible
      >
        Armut
      </Button>

      <div class="text-2xl text-red-400">Count: {count}</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React',
};
