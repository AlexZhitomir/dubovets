const NEWS = [
  {
    id: "n-2026-04-06-1",
    kind: "news",
    date: "2026-04-06",
    title: "Оновлено сайт товариства",
    excerpt:
      "Запустили розділи Новини, Оголошення, Документи, Органи управління та Карта.",
    body: `
      <p>Вітаємо на офіційному сайті Садівницького товариства «Дубовець».</p>
      <p>Тут публікуватимемо важливі оголошення, новини та документи. Будь ласка, перевіряйте цей розділ регулярно.</p>
    `,
    tags: ["сайт", "інфо"],
  },
  {
    id: "n-2026-05-17-1",
    kind: "news",
    date: "2026-05-17",
    title: "Інтернет на масиві",
    excerpt: "Підключення оптоволоконного кабелю",
    url: "https://net-city.net/internet/?city=88",
    body: `
      <p>На масиві доступне підключення оптоволоконного інтернету від
        <a href="https://net-city.net/internet/?city=88" target="_blank" rel="noopener noreferrer">Net-City</a>.
      </p>
      <p>Тарифи та заявка на підключення — на сайті провайдера.</p>
    `,
    tags: ["інтернет", "net-city"],
  },
];

const ADS_CATEGORIES = [
  { id: "realty", label: "Нерухомість" },
  { id: "agro", label: "Агропослуги" },
  { id: "plants", label: "Рослини" },
  { id: "animals", label: "Тварини" },
  { id: "transport", label: "Транспорт" },
  { id: "construction", label: "Будівництво" },
  { id: "repair", label: "Ремонт" },
  { id: "job", label: "Робота" },
  { id: "tech", label: "Техніка" },
  { id: "furniture", label: "Меблі" },
  { id: "clothes", label: "Одяг" },
];

const ADS = [
  {
    id: "ad-2026-05-10-1",
    kind: "ann",
    date: "2026-05-10",
    category: "plants",
    title: "Розсада томатів",
    price: "200 грн. за 20 шт.",
    excerpt: "Міцна розсада, самовивіз.",
    contact: { name: "Василь Васильович", phone: "+380680644061" },
    gallery: [
      "images/ads/rozsada-1.jpg",
      "images/ads/rozsada-2.jpg",
      "images/ads/rozsada-3.jpg",
      "images/ads/rozsada-4.jpg",
    ],
    body: `
      <p><strong>Розсада</strong>: томати</p>
      <p><strong>Ціна</strong>: від 10 грн/шт (залежить від сорту).</p>
      <p><strong>Контакт</strong>: +38 (068) 064-40-61</p>
     
    `,
    tags: ["розсада", "сад", "рослини"],
  },
  {
    id: "ad-2026-05-05-1",
    kind: "ann",
    date: "2026-05-05",
    category: "agro",
    title: "Оранка/культивація мотоблоком",
    price: "договірна",
    excerpt: "Обробка ділянок у межах СТ. Швидко, акуратно.",
    contact: { name: "Іван", phone: "+380980881925" },
    body: `
      <p>Надаю послуги: <strong>оранка, культивація, підгортання</strong>.</p>
      <p>Працюю в межах СТ «Дубовець»</p>
      <p><strong>Телефон</strong>: +38 (098) 088-19-25</p>
    `,
    tags: ["мотоблок", "послуги", "оранка"],
  },


  {
    id: "ad-2026-05-05-2",
    kind: "ann",
    date: "2026-05-05",
    category: "agro",
    title: "Земляні роботи мотоблоком/трактором",
    price: "договірна",
    excerpt: "Послуги трактора/мотоблока",
    contact: { name: "Сергій", phone: "+380963677317" },
    body: `
      <p>Надаю послуги: <strong>оранка, культивація, підгортання, доставка грунту, піску, глини</strong>.</p>
      <p>Працюю в межах СТ «Дубовець» та поруч.</p>
      <p><strong>Телефон</strong>: +38 (096) 367-73-17</p>
    `,
    tags: ["мотоблок", "послуги", "оранка"],
  },


  {
    id: "ad-2026-05-17-1",
    kind: "ann",
    date: "2026-05-17",
    category: "construction",
    title: "Зварювальні роботи",
    price: "договірна",
    excerpt: "Інвентар, лавочки, вольєри, забори",
    contact: { name: "ПІБ", phone: "+380985294320" },
    body: `
      <p>Виконую: <strong>зварювальні роботи</strong>, інвентар, лавочки, вольєри, забори.</p>
      <p>Гарантія якості робіт.</p>
      <p><strong>Контакт</strong>: +38 (098) 529-43-20</p>
    `,
    tags: ["будівництво", "паркан", "зварювання"],
  },
  {
    id: "ad-2026-05-12-1",
    kind: "ann",
    date: "2026-05-12",
    category: "realty",
    title: "Продам ділянки №632 і №631 (1/2)",
    price: "договірна",
    excerpt: "7,5 соток, будиночок, світло. Поруч зупинка.",
    contact: { name: "Світлана", phone: "+380674918987" },
    body: `
      <p>Продаж ділянки: <strong>7,5 соток</strong>, є будиночок.</p>
      <p>Комунікації: світло, можливість підключення води.</p>
      <p><strong>Ціна</strong>: ціна договірна</p>
      <p><strong>Телефон</strong>: +38 (067) 491-89-87</p>
    `,
    tags: ["ділянка", "продаж", "нерухомість"],
  },
  {
    id: "ad-2026-03-30-1",
    kind: "ann",
    date: "2026-03-30",
    category: "transport",
    title: "Вантажні перевезення (приклад)",
    price: "від 20 грн/км",
    excerpt: "Доставка матеріалів, вивіз сміття, переїзди.",
    contact: { name: "ПІБ (вкажіть)", phone: "+380000000000" },
    body: `
      <p>Послуги: доставка будматеріалів, вивіз сміття, переїзди.</p>
      <p><strong>Телефон</strong>: +38 (000) 000-00-00</p>
    `,
    tags: ["доставка", "перевезення"],
  },
];

const DOC_PAGES = [
  {
    id: "doc-fees",
    kind: "doc",
    date: "2026-04-08",
    title: "Розмір внесків та терміни сплати",
    excerpt: "Актуальні внески та терміни сплати.",
    body: `
      <div style="overflow:auto">
        <table class="feesTable" aria-label="Таблиця внесків">
          <thead>
            <tr>
              <th scope="col">Назва</th>
              <th scope="col">Розмір</th>
              <th scope="col">Термін сплати</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Членський внесок</td>
              <td>50 грн / сотку — щорічно</td>
              <td>За перше півріччя — до 30 березня <br> За друге півріччя — до 30 вересня</td>
            </tr>
            <tr>
              <td>Вступний внесок</td>
              <td>1000 грн — разово</td>
              <td>При прийнятті в члени товариства</td>
            </tr>
             <tr>
              <td>цільовий внесок на розвиток Товариства</td>
              <td>300 грн - разово</td>
              <td>При прийнятті в члени товариства</td>
            </tr>
            <tr>
              <td>внесок за переоформлення земельних ділянок</td>
              <td>100 грн - разово </br> 0 грн - між родичами (спадкоємцями)</td>
              <td>при поданні відповідної заяви про переоформлення</td>
            </tr>
            <tr>
              <td>плата за підключення до енергомережі</td>
              <td>350 грн (однофазний) <br> 700 грн (трьохфазний)</td>
              <td>при поданні відповідної заяви</td>
            </tr>
             <tr>
              <td>за утримання КТП та техобслуговування</td>
              <td>150 грн - щорічно</td>
              <td>до 01 квітня</td>
            </tr>
            <tr>
              <td>за втрати по трансформатору</td>
              <td>80 грн - щорічно</td>
              <td>до 01 квітня</td>
            </tr>
            <tr>
              <td>оплата за електроенергію</td>
              <td>4,32 грн з ПДВ / 1 кВт</td>
              <td>до 5-го числа наступного за звітним місяцем</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    tags: ["внески", "оплата", "сума"],
  },
  {
    id: "doc-protocols",
    kind: "doc",
    date: "2026-04-08",
    title: "Протоколи загальних зборів",
    excerpt:
      "Список протоколів із датою підписання та файлами для завантаження.",
    body: `
      <div style="overflow:auto">
        <table class="filesTable" aria-label="Список протоколів">
          <thead>
            <tr>
              <th scope="col">Дата підписання</th>
              <th scope="col">Назва</th>
              <th scope="col">Файл</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08.07.2023</td>
              <td>Протокол загальних зборів</td>
              <td><a href="./docs/protocol_2023_07_08.pdf" download>Скачати PDF</a></td>
            </tr>
            <tr>
              <td>04.06.2022</td>
              <td>Протокол загальних зборів</td>
              <td><a href="./docs/protocol_2022_06_04.pdf" download>Скачати PDF</a></td>
            </tr>
            <tr>
              <td>22.02.2020</td>
              <td>Протокол загальних зборів</td>
              <td><a href="./docs/protocol_2020_02_22.pdf" download>Скачати PDF</a></td>
            </tr>
            <tr>
              <td>11.08.2019</td>
              <td>Протокол загальних зборів</td>
              <td><a href="./docs/protocol_2019_08_11.pdf" download>Скачати PDF</a></td>
            </tr>
            <tr>
              <td>13.04.2019</td>
              <td>Протокол загальних зборів</td>
              <td><a href="./docs/protocol_2019_04_13.pdf" download>Скачати PDF</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    `,
    tags: ["протоколи", "збори", "документи"],
  },

  //добавив графік маршруток
  {
    id: "doc-bus-schedule",
    kind: "doc",
    date: "2026-04-21",
    title: "Графік маршруток",
    excerpt: "Актуальний графік руху маршрутних транспортних засобів.",
    body: `
      <div style="overflow:auto">
        <table class="feesTable" aria-label="Розклад маршруток">
          <thead>
            <tr>
              <th scope="col">Житомир</th>
              <th scope="col">Дубовець</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>05:55</td>
              <td>06:50</td>
            </tr>
            <tr>
              <td>09:20</td>
              <td>10:15</td>
            </tr>
             <tr>
              <td>11:20</td>
              <td>12:18</td>
            </tr>
            <tr>
              <td>13:15</td>
              <td>14:10</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>17:55</td>
            </tr>
            <tr>
              <td>19:10</td>
              <td>20:00</td>
            </tr>
                       
          </tbody>
        </table>
      </div>
    `,
    tags: ["маршрутки", "розклад", "автобус"],
  },

  //закінчення внесення
];

function $(sel, root = document) {
  return root.querySelector(sel);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function openSimpleModal({ title, meta = "", bodyHtml = "" }) {
  const modal = $("#modal");
  if (!modal) return;

  closeGalleryOverlay();
  $("#modalTitle").textContent = title ?? "—";
  $("#modalMeta").textContent = meta ?? "";
  $("#modalBody").innerHTML = bodyHtml ?? "";
  modal.showModal();
}

function formatDate(iso) {
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("uk-UA", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

function telHref(phone) {
  if (!phone) return "";
  return String(phone).replace(/[^\d+]/g, "");
}

function renderCard(item) {
  const isNews = item.kind === "news";
  const badgeClass = isNews ? "badge--news" : "badge--ann";
  const badgeText = isNews ? "Новина" : "Оголошення";
  const catLabel = !isNews
    ? (ADS_CATEGORIES.find((c) => c.id === item.category)?.label ?? "Інше")
    : null;

  return `
    <article class="card" data-id="${escapeHtml(item.id)}" data-kind="${escapeHtml(item.kind)}">
      <div class="card__top">
        <div style="display:flex; gap:8px; flex-wrap:wrap">
          <span class="badge ${badgeClass}">${badgeText}</span>
          ${!isNews ? `<span class="badge badge--cat">${escapeHtml(catLabel)}</span>` : ""}
        </div>
        <div class="date">${escapeHtml(formatDate(item.date))}</div>
      </div>
      <h3 class="card__title">${escapeHtml(item.title)}</h3>
      ${!isNews && item.price ? `<div class="price">${escapeHtml(item.price)}</div>` : ""}
      <p class="card__text">${escapeHtml(item.excerpt)}${
        item.url
          ? ` — <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">Net-City</a>`
          : ""
      }</p>
      ${
        !isNews && (item.contact?.name || item.contact?.phone)
          ? `<div class="card__contact" aria-label="Контакт оголошення">
        ${
          item.contact?.name
            ? `<span class="card__contact-name">${escapeHtml(item.contact.name)}</span>`
            : ""
        }
        ${
          item.contact?.phone
            ? `<a class="card__contact-phone" href="tel:${escapeHtml(telHref(item.contact.phone))}">${escapeHtml(item.contact.phone)}</a>`
            : ""
        }
      </div>`
          : ""
      }
      <div class="card__actions">
        <button class="linkBtn" type="button" data-open="1">Детальніше</button>
      </div>
    </article>
  `;
}

function matchesQuery(item, q) {
  if (!q) return true;
  const hay = [item.title, item.excerpt, item.date, ...(item.tags ?? [])]
    .join(" ")
    .toLowerCase();
  return hay.includes(q.toLowerCase());
}

function getScope() {
  const checked = document.querySelector('input[name="scope"]:checked');
  return checked ? checked.value : "all";
}

function getAdCategory() {
  const checked = document.querySelector('input[name="adCategory"]:checked');
  return checked ? checked.value : "all";
}

function getUsefulCards() {
  return Array.from(document.querySelectorAll("#useful .doc"));
}

function matchesText(hay, q) {
  if (!q) return true;
  return hay.toLowerCase().includes(q.toLowerCase());
}

function applySearch() {
  const q = ($("#searchInput")?.value ?? "").trim();
  const scope = getScope();
  const adCategory = getAdCategory();

  const news = NEWS.filter((x) => matchesQuery(x, q));
  const adsBase = ADS.filter((x) => matchesQuery(x, q));
  const ads =
    adCategory === "all"
      ? adsBase
      : adsBase.filter((x) => x.category === adCategory);

  const newsList = $("#newsList");
  const annList = $("#annList");

  const showNews = scope === "all" || scope === "news";
  const showAnn = scope === "all" || scope === "ann";
  const showUseful = scope === "all" || scope === "useful";

  if (newsList) {
    newsList.parentElement?.classList.toggle("isDimmed", !showNews);
    newsList.innerHTML = showNews
      ? news.map(renderCard).join("")
      : NEWS.map(renderCard).join("");
    $("#newsEmpty").hidden = !(showNews && news.length === 0);
  }
  if (annList) {
    annList.parentElement?.classList.toggle("isDimmed", !showAnn);
    annList.innerHTML = showAnn
      ? ads.map(renderCard).join("")
      : ADS.map(renderCard).join("");
    $("#annEmpty").hidden = !(showAnn && ads.length === 0);
  }

  const usefulCards = getUsefulCards();
  let usefulMatches = 0;
  usefulCards.forEach((card) => {
    const hay = (card.textContent ?? "").replace(/\s+/g, " ").trim();
    const ok = matchesText(hay, q);
    if (ok) usefulMatches += 1;
    card.hidden = showUseful ? !ok : false;
  });
  const usefulEmpty = $("#usefulEmpty");
  if (usefulEmpty)
    usefulEmpty.hidden = !(
      showUseful &&
      usefulCards.length > 0 &&
      usefulMatches === 0
    );

  const allCount =
    (showNews ? news.length : NEWS.length) +
    (showAnn ? ads.length : ADS.length) +
    (showUseful ? usefulMatches : usefulCards.length);
  const countEl = $("#itemsCount");
  if (countEl) countEl.textContent = String(allCount);
}

function findById(id) {
  return (
    NEWS.find((x) => x.id === id) ??
    ADS.find((x) => x.id === id) ??
    DOC_PAGES.find((x) => x.id === id) ??
    //добавив графік маршруток
    DOC_BUS.find((x) => x.id === id) ??
    null
  );
}

function closeGalleryOverlay() {
  const el = document.getElementById("modalGalleryOverlay");
  if (!el) return;
  const h = el._galleryKeyHandler;
  if (typeof h === "function") document.removeEventListener("keydown", h);
  el.remove();
}

function openGalleryOverlay(sources) {
  closeGalleryOverlay();
  const modalCard = $("#modal")?.querySelector(".modal__card");
  if (!modalCard || !sources?.length) return;

  let index = 0;
  const overlay = document.createElement("div");
  overlay.id = "modalGalleryOverlay";
  overlay.className = "galleryOverlay";

  overlay.innerHTML = `
    <div class="galleryOverlay__backdrop" aria-hidden="true"></div>
    <div class="galleryOverlay__inner">
      <div class="galleryOverlay__stage">
        <button type="button" class="galleryOverlay__nav galleryOverlay__nav--prev">‹</button>
        <img class="galleryOverlay__img" width="1200" height="800" alt="" decoding="async" />
        <button type="button" class="galleryOverlay__nav galleryOverlay__nav--next">›</button>
      </div>
    </div>
  `;

  const imgEl = overlay.querySelector(".galleryOverlay__img");

  function update() {
    const src = sources[index];
    if (imgEl) {
      imgEl.src = String(src);
      imgEl.alt = "";
    }
  }

  function onKeyDown(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      closeGalleryOverlay();
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      index = (index - 1 + sources.length) % sources.length;
      update();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      index = (index + 1) % sources.length;
      update();
    }
  }

  overlay.addEventListener("click", (ev) => {
    const el = ev.target instanceof HTMLElement ? ev.target : null;
    if (!el) return;
    if (el.closest(".galleryOverlay__backdrop")) {
      ev.preventDefault();
      closeGalleryOverlay();
      return;
    }
    if (el.closest(".galleryOverlay__nav--prev")) {
      ev.preventDefault();
      index = (index - 1 + sources.length) % sources.length;
      update();
      return;
    }
    if (el.closest(".galleryOverlay__nav--next")) {
      ev.preventDefault();
      index = (index + 1) % sources.length;
      update();
      return;
    }
  });

  modalCard.appendChild(overlay);
  document.addEventListener("keydown", onKeyDown);
  overlay._galleryKeyHandler = onKeyDown;
  update();
}

function openModal(item) {
  const modal = $("#modal");
  if (!modal) return;
  closeGalleryOverlay();
  $("#modalTitle").textContent = item.title;

  const metaBits = [];
  if (item.kind === "news") {
    metaBits.push("Новина");
  } else if (item.kind === "ann") {
    metaBits.push("Оголошення");
    const catLabel = ADS_CATEGORIES.find((c) => c.id === item.category)?.label;
    if (catLabel) metaBits.push(catLabel);
    if (item.price) metaBits.push(item.price);
    if (item.contact?.name) metaBits.push(item.contact.name);
    if (item.contact?.phone) metaBits.push("Тел.: " + item.contact.phone);
  } else if (item.kind === "doc") {
    metaBits.push("Документ");
  }
  metaBits.push(formatDate(item.date));
  if (item.tags?.length) metaBits.push("Теги: " + item.tags.join(", "));
  $("#modalMeta").textContent = metaBits.join(" • ");

  let bodyHtml = item.body ?? "";
  if (Array.isArray(item.gallery) && item.gallery.length > 0) {
    bodyHtml += `<p class="modalGalleryAct"><button type="button" class="linkBtn" data-gallery-for="${escapeHtml(item.id)}">Фото</button></p>`;
  }
  $("#modalBody").innerHTML = bodyHtml;
  modal.showModal();
}

function setupNav() {
  const btn = $(".nav__toggle");
  const menu = $("#navMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("isOpen");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu.addEventListener("click", (e) => {
    const t = e.target;
    if (t instanceof HTMLAnchorElement) {
      menu.classList.remove("isOpen");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

function setupCardsClick() {
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;

    const galleryBtn = t.closest("[data-gallery-for]");
    if (galleryBtn) {
      e.preventDefault();
      const gid = galleryBtn.getAttribute("data-gallery-for");
      if (!gid) return;
      const galItem = findById(gid);
      if (galItem?.gallery?.length) {
        openGalleryOverlay(galItem.gallery);
      }
      return;
    }

    const showImageLink = t.closest("[data-show-image]");
    if (showImageLink) {
      e.preventDefault();
      const imageSrc = showImageLink.getAttribute("data-show-image");
      if (imageSrc) {
        const doc = showImageLink.closest(".doc");
        const title =
          showImageLink.getAttribute("data-show-image-title") ??
          doc?.querySelector(".doc__title")?.textContent?.trim() ??
          "Перегляд";
        const meta =
          showImageLink.getAttribute("data-show-image-meta") ??
          doc?.querySelector(".doc__meta")?.textContent?.trim() ??
          "";
        const alt =
          showImageLink.getAttribute("data-show-image-alt") ?? title;
        openSimpleModal({
          title,
          meta,
          bodyHtml: `<img src="${escapeHtml(imageSrc)}" style="max-width:80%; height:auto; border-radius:12px;" alt="${escapeHtml(alt)}"/>`,
        });
      }
      return;
    }

    const adRequestOpenBtn = t.closest("[data-ad-request-open='1']");
    if (adRequestOpenBtn) {
      openSimpleModal({
        title: "Зворотний зв’язок",
        meta: "Оберіть зручний спосіб, щоб зв’язатися з головою правління",
        bodyHtml: `
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center">
            <a class="button button--primary" href="tel:+380972508433">Дзвінок: 0972508433</a>
            <a class="iconLink" href="viber://chat?number=%2B380972508433" aria-label="Написати у Viber">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.5 3.5c-1.4-1.4-4.6-2-8.5-2S4.9 2.1 3.5 3.5C2.1 4.9 1.5 8.1 1.5 12c0 1.8.2 3.4.6 4.8.3 1.1 1.2 2 2.3 2.3 1.4.4 3 .6 4.8.6.5 0 1 0 1.5-.1l3.2 2.1c.7.5 1.6-.1 1.6-1V20c2.4-.4 4.3-1.1 5.6-2.4 1.4-1.4 2-4.6 2-8.5s-.6-7.1-2-8.5Zm-5.6 12.2c-.3.5-.8.8-1.4.8-1.2 0-2.6-.6-4-1.8-1.2-1.1-2-2.3-2.4-3.6-.2-.6-.1-1.2.3-1.7l.6-.7c.3-.3.8-.3 1.1 0l1 1c.3.3.3.7.1 1l-.3.5c.3.6.7 1.1 1.2 1.6.6.5 1.2.9 1.8 1.1l.4-.3c.3-.2.7-.2 1 .1l1.1 1.1c.3.3.3.8 0 1.1l-.5.5Z"
                />
              </svg>
            </a>
            <a class="button button--ghost" href="mailto:i0a@ukr.net">Пошта: i0a@ukr.net</a>
          </div>
        `,
      });
      return;
    }

    const revisionBtn = t.closest("[data-revision-open='1']");
    if (revisionBtn) {
      const members = [
        "Авдіюк Олександр Олегович",
        "Бондаренко Олексій Анатолійович",
        "Борисюк Микола Григорович",
        "Власюк Ярослав Іванович",
        "Іць Володимир Васильович",
        "Корень Галина Олексіївна",
        "Кулик Леся Олександрівна",
        "Кучер Людмила Євгенівна",
        "Павицька Регіна Домініківна",
        "Смольницька Олена Василівна",
        "Томашевський Геннадій Анатолійович",
      ];

      openSimpleModal({
        title: "Члени правління",
        meta: "Перелік осіб",
        bodyHtml: `
          <ul class="list">
            ${members.map((name) => `<li>${escapeHtml(name)}</li>`).join("")}
          </ul>
        `,
      });
      return;
    }

    const modalOpenBtn = t.closest("[data-modal-open]");
    if (modalOpenBtn) {
      const modalType = modalOpenBtn.getAttribute("data-modal-open");
      if (modalType === "freePlots") {
        const tableHtml = document.getElementById("freePlotsTable");
        if (tableHtml && tableHtml.innerHTML.trim()) {
          openSimpleModal({
            title: "Вільні ділянки",
            meta: "Номери ділянок, які не використовуються",
            bodyHtml: `<table class="modalTable">${tableHtml.innerHTML}</table>`,
          });
        } else {
          openSimpleModal({
            title: "Вільні ділянки",
            meta: "Дані не внесені",
            bodyHtml:
              "<p>Інформація про вільні ділянки поки що не доступна.</p>",
          });
        }
      } else if (modalType === "debtors") {
        const tableHtml = document.getElementById("debtorsTable");
        if (tableHtml && tableHtml.innerHTML.trim()) {
          openSimpleModal({
            title: "Боржники",
            meta: "Номери ділянок з заборгованістю",
            bodyHtml: `<table class="modalTable">${tableHtml.innerHTML}</table>`,
          });
        } else {
          openSimpleModal({
            title: "Боржники",
            meta: "Дані не внесені",
            bodyHtml: "<p>Інформація про боржників поки що не доступна.</p>",
          });
        }
      }
      return;
    }

    const docOpenBtn = t.closest("[data-doc-open='1']");
    if (docOpenBtn) {
      const id = docOpenBtn.getAttribute("data-id");
      if (!id) return;
      const item = findById(id);
      if (!item) return;
      openModal(item);
      return;
    }

    const openBtn = t.closest("[data-open='1']");
    if (!openBtn) return;
    const card = t.closest(".card");
    const id = card?.getAttribute("data-id");
    if (!id) return;
    const item = findById(id);
    if (!item) return;
    openModal(item);
  });
}

function setupSearch() {
  const input = $("#searchInput");
  if (input) {
    input.addEventListener("input", () => applySearch());
  }
  document.querySelectorAll('input[name="scope"]').forEach((el) => {
    el.addEventListener("change", () => applySearch());
  });
  document.querySelectorAll('input[name="adCategory"]').forEach((el) => {
    el.addEventListener("change", () => applySearch());
  });
}

function renderAdCategories() {
  const wrap = $("#adCategories");
  if (!wrap) return;
  const all = [{ id: "all", label: "Усі" }, ...ADS_CATEGORIES];
  wrap.innerHTML = all
    .map(
      (c, idx) => `
        <label class="chip">
          <input type="radio" name="adCategory" value="${escapeHtml(c.id)}" ${idx === 0 ? "checked" : ""} />
          <span>${escapeHtml(c.label)}</span>
        </label>
      `,
    )
    .join("");
}

function setMeta() {
  const all = [...NEWS, ...ADS]
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const last = all[0]?.date;
  if ($("#lastUpdated"))
    $("#lastUpdated").textContent = last ? formatDate(last) : "—";
  if ($("#year")) $("#year").textContent = String(new Date().getFullYear());
}

function initialRender() {
  const newsList = $("#newsList");
  const annList = $("#annList");
  if (newsList) newsList.innerHTML = NEWS.map(renderCard).join("");
  if (annList) annList.innerHTML = ADS.map(renderCard).join("");

  $("#itemsCount").textContent = String(
    NEWS.length + ADS.length + getUsefulCards().length,
  );
}

function setupBrandClick() {
  const brand = document.querySelector(".brand");
  if (brand) {
    brand.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

setupNav();
const __mainModal = $("#modal");
if (__mainModal) {
  __mainModal.addEventListener("close", () => closeGalleryOverlay());
}
setupCardsClick();
renderAdCategories();
setupSearch();
setMeta();
initialRender();
setupBrandClick();
