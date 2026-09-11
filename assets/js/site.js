(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const calculator = document.querySelector('[data-mortgage-calculator]');
  if (calculator) {
    const price = calculator.querySelector('[name="price"]');
    const downPayment = calculator.querySelector('[name="down_payment"]');
    const years = calculator.querySelector('[name="years"]');
    const rate = calculator.querySelector('[name="rate"]');
    const output = calculator.querySelector('[data-payment-output]');
    const amountOutput = calculator.querySelector('[data-loan-output]');

    const formatMoney = (value) => new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(value || 0);

    const calculate = () => {
      const p = Math.max(0, Number(price?.value) || 0);
      const d = Math.min(p, Math.max(0, Number(downPayment?.value) || 0));
      const y = Math.max(1, Number(years?.value) || 1);
      const annualRate = Math.max(0, Number(rate?.value) || 0);
      const principal = Math.max(0, p - d);
      const months = y * 12;
      const monthlyRate = annualRate / 100 / 12;

      let payment = months ? principal / months : principal;
      if (monthlyRate > 0 && principal > 0) {
        const factor = Math.pow(1 + monthlyRate, months);
        payment = principal * monthlyRate * factor / (factor - 1);
      }

      if (output) output.textContent = formatMoney(payment);
      if (amountOutput) amountOutput.textContent = formatMoney(principal);
    };

    [price, downPayment, years, rate].filter(Boolean).forEach((field) => {
      field.addEventListener('input', calculate);
    });
    calculate();
  }

  document.querySelectorAll('[data-copy-phone]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.getAttribute('data-copy-phone');
      try {
        await navigator.clipboard.writeText(value);
        const initial = button.textContent;
        button.textContent = 'Номер скопирован';
        setTimeout(() => { button.textContent = initial; }, 1800);
      } catch (_) {
        window.location.href = `tel:${value}`;
      }
    });
  });

  const draftForm = document.querySelector('[data-draft-form]');
  if (draftForm) {
    const status = draftForm.querySelector('[data-draft-status]');
    draftForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!draftForm.reportValidity()) return;

      const data = new FormData(draftForm);
      const lines = [
        'Здравствуйте! Хочу проконсультироваться по ипотеке.',
        '',
        `Имя: ${String(data.get('name') || '').trim() || 'не указано'}`,
        `Город: ${String(data.get('city') || '').trim() || 'не указан'}`,
        `Телефон: ${String(data.get('phone') || '').trim() || 'не указан'}`,
        `Задача: ${String(data.get('task') || '').trim() || 'не указана'}`,
        `Ситуация: ${String(data.get('comment') || '').trim() || 'без комментария'}`
      ];
      const text = lines.join('\n');

      try {
        await navigator.clipboard.writeText(text);
        if (status) status.textContent = 'Текст заявки скопирован. Теперь откройте ВКонтакте или отправьте его любым удобным способом.';
      } catch (_) {
        if (status) status.textContent = 'Не удалось скопировать автоматически. Выделите данные вручную или позвоните по телефону.';
      }
    });
  }
})();
