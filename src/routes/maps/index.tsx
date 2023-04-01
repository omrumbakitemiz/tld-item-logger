import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="text-center mt-5 text-xl">
      Please go to &nbsp;
      <code class="text-blue-400">/maps/{'{someId}'}</code>
      &nbsp; route to start using the app.
    </div>
  );
});
