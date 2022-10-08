/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shmd: "rgba(0, 0, 0, 0.25) 0px 1px 10px 0px",
        modal:
          "rgba(0, 0, 0, 0.16) 0px 4px 16px 0px, rgba(0, 0, 0, 0.32) 0px 16px 48px 0px",
        menu: "0 1px 10px #00000040;",
      },
    },
  },
  variants: {
    fontSize: ({ after }) => after(["em"]),
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwindcss-question-mark"),
    require("tailwindcss-scoped-groups")({
      groups: ["sidebar", "item", "accordeon", "tooltip"],
    }),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("em", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.em\\:${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.value = decl.value.replace("rem", "em");
          });
        });
      });
    }),
  ],
};
