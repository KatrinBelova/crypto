import $ from 'jquery';
import vex from 'vex-js';


$(document).on('click', '[data-vex-toggle="join"]', function (e) {
  e.preventDefault();

  const $trigger = $(this);
  const $template = $(`[data-vex-modal="join"]`);

 

  if (!$template.length) {
    return;
  }

  const attrs = {
    description: 'data-join-description',
    linkMonthly: 'data-join-link-paypal',
    linkLifetime: 'data-join-link-bitcoins'
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

      contentEl.find('[data-auth]').attr('value', $trigger.attr('data-auth'));
      contentEl.find('[data-period]').attr('value', $trigger.attr('data-period'));
      contentEl.find('[data-amount]').attr('data-amount', $trigger.attr('data-amount'));
      contentEl.find('[data-description]').attr('data-description', $trigger.attr('data-description'));
    }
  });

});
