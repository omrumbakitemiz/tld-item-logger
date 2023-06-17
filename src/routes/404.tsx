import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <div class="text-center mt-5 text-xl">
        <div class="text-center">You entered an invalid route. Please go to &nbsp;</div>
        <div>
          Please go to &nbsp;
          <a href="/maps/1">
            <code class="text-blue-400">/maps/1</code>
          </a>
          &nbsp; route to start using the app.
        </div>
      </div>
    </div>
  );
});
