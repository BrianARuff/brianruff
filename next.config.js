const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      env: {
        API_IMAGE: "http://localhost:3000/me.jpg",
      },
    };
  }

  return {
    ...defaultConfig,
  };
};
