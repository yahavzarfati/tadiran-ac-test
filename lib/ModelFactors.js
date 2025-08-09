const MODEL_FACTORS = {
  "Sfera": {
    COOL_CMD: "cold",
    HEAT_CMD: "hot",
    AUTO_CMD: "auto",
    DP3_ROOM_TEMP_FACTOR: 1,
    DP2_SET_TEMP_FACTOR: 10,
    SILENT_FAN_MODE: '0',
    TURBO_FAN_MODE: '0',
    FAN_SPEEDS: Object.freeze(["auto","low","mid_low","mid","mid_high","high","strong"])
  },
  "Apollo": {
    COOL_CMD: "cold",
    HEAT_CMD: "hot",
    AUTO_CMD: "auto",
    DP3_ROOM_TEMP_FACTOR: 2,
    DP2_SET_TEMP_FACTOR: 1,
    SILENT_FAN_MODE: '108',
    TURBO_FAN_MODE: '107',
    FAN_SPEEDS: Object.freeze(["auto","low" ,"mid", "high"])
  },
  "Mini-Central": {
    COOL_CMD: "cooling",
    HEAT_CMD: "heating",
    AUTO_CMD: "auto",
    DP3_ROOM_TEMP_FACTOR: 10,
    DP2_SET_TEMP_FACTOR: 1,
    SILENT_FAN_MODE: '0',
    TURBO_FAN_MODE: '0',
    FAN_SPEEDS: Object.freeze(["auto","low" ,"mid", "high"])
  },
  "Mini Central Wave 50": {
    COOL_CMD: "cold",
    HEAT_CMD: "hot",
    AUTO_CMD: "auto",
    // Device reports temperatures with scale 0 (no scaling)
    DP3_ROOM_TEMP_FACTOR: 10,
    DP2_SET_TEMP_FACTOR: 1,
    // No separate silent/turbo datapoints; speeds are enumerated on the same DP
    SILENT_FAN_MODE: '0',
    TURBO_FAN_MODE: '0',
    // Ordered from quietest/lowest to strongest. 'auto' removed per Wave 50 preference.
    FAN_SPEEDS: Object.freeze([
      "low",
      "middle",
      "high",
      "strong"
    ]),
    // Override command names for Fan/Dry modes on this model
    CMD_FAN: "wind",
    CMD_DRY: "wet"
  }
};

module.exports = MODEL_FACTORS;