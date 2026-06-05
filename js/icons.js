/**
 * Ship type icons (inline SVG) for dashboard charts.
 */
const ShipIcons = (function () {
  const defaultIcon =
    '<svg class="ship-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path fill="#0369a1" d="M8 40 L32 28 L56 40 L52 44 L12 44 Z"/>' +
    '<rect fill="#0ea5e9" x="28" y="18" width="8" height="14" rx="1"/>' +
    '</svg>';

  const icons = {
    '풀 컨테이너선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><rect fill="#0284c7" x="6" y="32" width="52" height="14" rx="2"/><rect fill="#0ea5e9" x="10" y="22" width="10" height="10"/><rect fill="#0ea5e9" x="24" y="22" width="10" height="10"/><rect fill="#0ea5e9" x="38" y="22" width="10" height="10"/></svg>',
    '석유정제품 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><ellipse fill="#0369a1" cx="32" cy="38" rx="26" ry="10"/><rect fill="#dc2626" x="26" y="16" width="12" height="22" rx="2"/></svg>',
    '기타선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#075985" d="M10 42 L54 42 L48 36 L16 36 Z"/><circle fill="#38bdf8" cx="32" cy="28" r="8"/></svg>',
    '일반화물선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#0284c7" d="M8 40 L56 40 L50 34 L14 34 Z"/><rect fill="#f59e0b" x="18" y="24" width="28" height="10" rx="1"/></svg>',
    '여객선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#0ea5e9" d="M6 44 L58 44 L52 36 L12 36 Z"/><rect fill="#fff" x="20" y="20" width="24" height="16" stroke="#0369a1" stroke-width="2"/></svg>',
    '산물선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#0369a1" d="M10 42 L54 42 L48 32 L16 32 Z"/><circle fill="#78716c" cx="32" cy="24" r="10"/></svg>',
    '어선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#0284c7" d="M12 40 L52 40 L44 34 L20 34 Z"/><path fill="#38bdf8" d="M28 20 L36 28 L28 36 L20 28 Z"/></svg>',
    '냉동.냉장선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#0369a1" d="M8 40 L56 40 L50 34 L14 34 Z"/><rect fill="#bae6fd" x="22" y="18" width="20" height="16" rx="2" stroke="#0284c7" stroke-width="2"/></svg>',
    '케미칼 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><ellipse fill="#7c3aed" cx="32" cy="38" rx="24" ry="8"/><rect fill="#a78bfa" x="24" y="16" width="16" height="22" rx="3"/></svg>',
    '자동차 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#0284c7" d="M6 42 L58 42 L54 36 L10 36 Z"/><rect fill="#ef4444" x="14" y="26" width="8" height="6"/><rect fill="#22c55e" x="26" y="26" width="8" height="6"/><rect fill="#3b82f6" x="38" y="26" width="8" height="6"/></svg>',
    '시멘트 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#64748b" d="M10 40 L54 40 L48 32 L16 32 Z"/><rect fill="#94a3b8" x="26" y="18" width="12" height="14"/></svg>',
    '원유 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><ellipse fill="#0f172a" cx="32" cy="38" rx="26" ry="10"/><rect fill="#1e293b" x="28" y="14" width="8" height="24"/></svg>',
    '세미 컨테이너선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><rect fill="#0284c7" x="8" y="34" width="48" height="10"/><rect fill="#38bdf8" x="14" y="24" width="8" height="10"/><rect fill="#7dd3fc" x="28" y="26" width="16" height="8"/></svg>',
    'LPG.LNG 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><ellipse fill="#0369a1" cx="32" cy="40" rx="28" ry="9"/><circle fill="#22d3ee" cx="24" cy="22" r="8"/><circle fill="#67e8f9" cx="40" cy="22" r="8"/></svg>',
    '원목 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#92400e" d="M10 42 L54 42"/><rect fill="#b45309" x="16" y="20" width="6" height="22"/><rect fill="#b45309" x="28" y="18" width="6" height="24"/><rect fill="#b45309" x="40" y="22" width="6" height="20"/></svg>',
    '핫코일 운반선':
      '<svg class="ship-icon" viewBox="0 0 64 64"><path fill="#475569" d="M8 40 L56 40 L50 32 L14 32 Z"/><rect fill="#f97316" x="20" y="18" width="24" height="14" rx="2"/></svg>',
  };

  function getIcon(shipType) {
    return icons[shipType] || defaultIcon;
  }

  return { getIcon: getIcon };
})();
