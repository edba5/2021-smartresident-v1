module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Carbon",
    description: "A Gatsby theme for the carbon design system",
    keywords: "gatsby,theme,carbon",
    lang: 'es',
  },
  
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header',
        titleType: 'append',
        homepage: 'dark',
        interior: 'g10',
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sitio Web Smart Resident México",
        icon: "src/images/favicon.svg",
        short_name: "Smart Resident",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#006255",
        display: "browser",
      },
    },
  ],
};
