/**
 * Dashboard: render horizontal bar charts from JSON (content.html).
 */
(function ($) {
  const $container = $("#dashboard-charts");
  const $loading = $("#dashboard-loading");
  const $summary = $("#dashboard-summary");

  function formatNum(n) {
    return Number(n).toLocaleString("ko-KR");
  }

  function changeClass(v) {
    if (v > 0) return "up";
    if (v < 0) return "down";
    return "flat";
  }

  function changeText(v) {
    const sign = v > 0 ? "+" : "";
    return sign + v + "%";
  }

  function maxCount(ships) {
    let max = 1;
    ships.forEach(function (s) {
      max = Math.max(max, s.total.count2025, s.total.count2026);
      if (s.domestic && s.domestic.count2026) {
        max = Math.max(max, s.domestic.count2025, s.domestic.count2026);
      }
      if (s.foreign && s.foreign.count2026) {
        max = Math.max(max, s.foreign.count2025, s.foreign.count2026);
      }
    });
    return max;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function iconPopupHtml(shipType) {
    const meta = ShipInfo.get(shipType);
    const title = escapeHtml(meta.title);
    const desc = escapeHtml(meta.description);
    const img = escapeHtml(meta.image);
    return (
      '<div class="ship-info-popup" role="tooltip">' +
      '<img class="ship-info-photo" src="' +
      img +
      '" alt="' +
      title +
      '" loading="lazy" onerror="this.onerror=null;this.src=ShipInfo.PLACEHOLDER;">' +
      '<div class="ship-info-text">' +
      "<strong>" +
      title +
      "</strong>" +
      "<p>" +
      desc +
      "</p>" +
      "</div></div>"
    );
  }

  function barHtml(label, value, max, extraClass) {
    const pct = Math.max(2, Math.round((value / max) * 100));
    return (
      '<div class="bar-group">' +
      '<div class="bar-label"><span>' +
      label +
      "</span><span>" +
      formatNum(value) +
      "척</span></div>" +
      '<div class="bar-track"><div class="bar-fill ' +
      extraClass +
      '" style="--bar-width:' +
      pct +
      '%;"></div></div></div>'
    );
  }

  function buildCard(ship, max) {
    const t = ship.total;
    const ch = t.change;
    const icon = ShipIcons.getIcon(ship.type);

    let bars =
      barHtml("2025 누계", t.count2025, max, "year-2025") +
      barHtml("2026 누계", t.count2026, max, "year-2026");

    if (ship.domestic && ship.domestic.count2026 !== undefined) {
      bars += barHtml(
        "국적선 2026",
        ship.domestic.count2026,
        max,
        "domestic"
      );
    }
    if (ship.foreign && ship.foreign.count2026 !== undefined) {
      bars += barHtml("외국선 2026", ship.foreign.count2026, max, "foreign");
    }

    return (
      '<article class="chart-card is-visible" data-ship="' +
      ship.type +
      '">' +
      '<div class="ship-icon-wrap">' +
      icon +
      iconPopupHtml(ship.type) +
      "</div>" +
      '<div class="chart-body">' +
      '<div class="chart-title-row">' +
      "<h3>" +
      ship.type +
      "</h3>" +
      '<span class="change-badge ' +
      changeClass(ch) +
      '">전년대비 ' +
      changeText(ch) +
      "</span>" +
      "</div>" +
      bars +
      "</div></article>"
    );
  }

  function renderSummary(meta) {
    const total = meta.total && meta.total.total ? meta.total.total : null;
    if (!total) return;

    $summary.html(
      '<span class="summary-chip"><strong>기간</strong> ' +
        meta.period +
        "</span>" +
        '<span class="summary-chip"><strong>2026 총 입출항</strong> ' +
        formatNum(total.count2026) +
        "척</span>" +
        '<span class="summary-chip"><strong>증감률</strong> ' +
        changeText(total.change) +
        "</span>"
    );
  }

  function render(data) {
    const ships = data.ships.filter(function (s) {
      return s.total.count2025 > 0 || s.total.count2026 > 0;
    });
    const max = maxCount(ships);

    $loading.hide();
    renderSummary(data.meta);

    if (ships.length === 0) {
      $container.html(
        '<p class="error-msg">표시할 선종 데이터가 없습니다.</p>'
      );
      return;
    }

    const html = ships
      .map(function (s) {
        return buildCard(s, max);
      })
      .join("");

    $container.html(html);
  }

  function showError(message) {
    $loading.hide();
    $container.html('<p class="error-msg">' + message + "</p>");
  }

  function init() {
    ShipDataLoader.load()
      .then(render)
      .catch(function () {
        showError(
          "데이터를 불러오지 못했습니다. Live Server 등으로 실행했는지, data/ship_traffic.json 경로를 확인해 주세요."
        );
      });
  }

  $(init);
})(jQuery);
