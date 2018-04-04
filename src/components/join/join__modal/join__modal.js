import $ from 'jquery';
import vex from 'vex-js';


$(document).on('click', '[data-vex-toggle="join"]', function (e) {
  e.preventDefault();

  const $trigger = $(this);
  const $template = $(`[data-vex-modal="${$trigger.data('vex-toggle')}"]`);

  if (!$template.length) {
    return;
  }

  const attrs = {
    description: 'data-join-description',
    linkMonthly: 'data-join-link-monthly',
    linkLifetime: 'data-join-link-lifetime'
  };

  vex.open({
    unsafeContent: $template.html(),
    className: 'vex-theme-default',
    closeClassName: 'modal__close',
    afterOpen() {
      const contentEl = $(this.contentEl);

      for (let key in attrs) if (attrs.hasOwnProperty(key)) {
        const currentAttr = `[${attrs[key]}]`;

        if (($(currentAttr).length > 0) && $trigger.is(currentAttr)) {
          const modalEl = contentEl.find(currentAttr);

          if ($(modalEl).is('[href]')) {
            modalEl.attr('href', $trigger.attr(attrs[key]));
          } else {
            modalEl.text($trigger.attr(attrs[key]));
          }
        }
      }
    }
  });
});
