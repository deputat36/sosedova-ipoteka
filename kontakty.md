---
layout: default
title: "Контакты ипотечного брокера"
description: "Связаться с ипотечным брокером Людмилой Соседовой: телефон и ВКонтакте. Балашов и дистанционно по России."
permalink: /kontakty/
---
<section class="page-hero">
  <div class="container">
    <div class="breadcrumbs"><a href="/">Главная</a> / Контакты</div>
    <p class="section-kicker">Связаться напрямую</p>
    <h1>Расскажите, какую ипотечную задачу нужно решить</h1>
    <p>Для первого разговора не нужны паспортные данные и сканы документов. Достаточно кратко описать ситуацию и оставить удобный способ связи.</p>
  </div>
</section>

<section class="section section-white">
  <div class="container">
    <div class="contact-grid">
      <article class="contact-card">
        <h3>Телефон</h3>
        <p>Самый быстрый способ обсудить ситуацию.</p>
        <p><a href="tel:{{ site.data.site.contacts.phone_href }}">{{ site.data.site.contacts.phone_display }}</a></p>
        <a class="btn btn-primary" href="tel:{{ site.data.site.contacts.phone_href }}">Позвонить</a>
      </article>
      <article class="contact-card">
        <h3>ВКонтакте</h3>
        <p>Можно написать сообщение и кратко описать задачу.</p>
        <p><a href="{{ site.data.site.contacts.vk }}" target="_blank" rel="noopener">Профиль Людмилы Соседовой</a></p>
        <a class="btn btn-secondary" href="{{ site.data.site.contacts.vk }}" target="_blank" rel="noopener">Открыть ВКонтакте</a>
      </article>
    </div>

    <div class="form-shell" id="zayavka">
      <p class="section-kicker">Подготовить сообщение</p>
      <h2>Сформируйте краткую заявку</h2>
      <p class="section-lead">Пока отдельный канал онлайн-заявок для сайта настраивается, форма ниже ничего не отправляет на сервер. Она безопасно собирает текст на вашем устройстве, чтобы его можно было скопировать и отправить Людмиле удобным способом.</p>

      <form data-draft-form>
        <div class="form-grid">
          <div class="form-field"><label for="lead-name">Имя</label><input id="lead-name" name="name" autocomplete="name" placeholder="Как к вам обращаться"></div>
          <div class="form-field"><label for="lead-city">Город</label><input id="lead-city" name="city" autocomplete="address-level2" placeholder="Например, Балашов"></div>
          <div class="form-field"><label for="lead-phone">Телефон</label><input id="lead-phone" name="phone" inputmode="tel" autocomplete="tel" placeholder="+7 ..."></div>
          <div class="form-field"><label for="lead-task">Задача</label><select id="lead-task" name="task"><option>Подобрать ипотеку</option><option>Семейная ипотека</option><option>Строительство дома</option><option>Сельская ипотека</option><option>Отказ банка / сложная ситуация</option><option>Страхование</option><option>Другое</option></select></div>
          <div class="form-field full"><label for="lead-comment">Коротко о ситуации</label><textarea id="lead-comment" name="comment" placeholder="Что хотите приобрести, примерная стоимость, первоначальный взнос, обращались ли уже в банки"></textarea></div>
          <div class="form-field full"><label><input type="checkbox" name="consent" required> Я согласен(на) самостоятельно отправить сформированный текст и понимаю, что эта форма не передаёт данные на сервер сайта.</label></div>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" type="submit">Скопировать текст заявки</button>
          <a class="btn btn-secondary" href="{{ site.data.site.contacts.vk }}" target="_blank" rel="noopener">Открыть ВКонтакте</a>
        </div>
        <p class="form-help" data-draft-status aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <article class="prose">
      <h2>Что не отправлять через открытые каналы</h2>
      <p>Не присылайте через сайт паспорт, СНИЛС, данные банковских карт, логины, пароли, коды из SMS и фотографии документов, пока не согласован безопасный способ передачи и не понятно, зачем конкретный документ требуется.</p>
    </article>
    <aside class="callout"><h3>Работа из другого города</h3><p>Укажите населённый пункт в сообщении. Первичную консультацию можно провести дистанционно, а дальнейший формат зависит от банка, объекта и региона.</p></aside>
  </div>
</section>
