/**
 * Load ship traffic JSON (converted from CSV).
 */
const ShipDataLoader = (function () {
  const LOCAL_JSON = "data/ship_traffic.json";

  function load() {
    return $.getJSON(LOCAL_JSON);
  }

  return { load: load };
})();
