import $ from 'jquery';
import vex from 'vex-js';


$(document).on('click', '[data-vex-toggle="month"]', function (e) {
  e.preventDefault();

  const $trigger = $(this);
  const $template = $(`[data-vex-modal="month"]`);

  if (!$template.length) {
    return;
  }

  vex.open({
    unsafeContent: $template.html(),
    className: 'vex-theme-default',
    closeClassName: 'modal__close',
  });

});

$(document).on('click', '[data-vex-toggle="year"]', function (e) {
  e.preventDefault();

  const $trigger = $(this);
  const $template = $(`[data-vex-modal="year"]`);

  if (!$template.length) {
    return;
  }

  vex.open({
    unsafeContent: $template.html(),
    className: 'vex-theme-default',
    closeClassName: 'modal__close',
  });

});

$(document).on('click', '[data-vex-toggle="life"]', function (e) {
  e.preventDefault();

  const $trigger = $(this);
  const $template = $(`[data-vex-modal="life"]`);

  if (!$template.length) {
    return;
  }

  vex.open({
    unsafeContent: $template.html(),
    className: 'vex-theme-default',
    closeClassName: 'modal__close',
  });

});