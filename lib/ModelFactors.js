const MODEL_FACTORS = {
  "Sfera": {
    COOL_CMD: "cold",
    HEAT_CMD: "hot",
    AUTO_CMD: "auto",
    DP3_ROOM_TEMP_FACTOR: 1,
    DP2_SET_TEMP_FACTOR: 10,
    FAN_SPEEDS: Object.freeze(["auto","low","mid_low","mid","mid_high","high","strong"])
  },
  "Apollo": {
    COOL_CMD: "cold",
    HEAT_CMD: "hot",
    AUTO_CMD: "auto",
    DP3_ROOM_TEMP_FACTOR: 2,
    DP2_SET_TEMP_FACTOR: 1,
    FAN_SPEEDS: Object.freeze(["auto","low" ,"mid", "high"])
  },
  "Mini-Central": {
    COOL_CMD: "cooling",
    HEAT_CMD: "heating",
    AUTO_CMD: "auto",
    DP3_ROOM_TEMP_FACTOR: 10,
    DP2_SET_TEMP_FACTOR: 1,
    FAN_SPEEDS: Object.freeze(["auto","low" ,"mid", "high"])
  }
};

module.exports = MODEL_FACTORS;