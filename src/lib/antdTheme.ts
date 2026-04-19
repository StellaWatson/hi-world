import { theme as antdTheme, type ThemeConfig } from "antd";

/**
 * Hello World — antd dark theme
 * Brand: orange/amber primary, deep neutral surfaces, JetBrains Mono headings.
 * Uses antd v5 darkAlgorithm + custom token overrides to match the project's
 * developer-focused dark aesthetic without the heavy glow/gradient look.
 */
export const helloWorldAntdTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  cssVar: { key: "hw" },
  hashed: true,
  token: {
    // Brand
    colorPrimary: "#F59E0B", // amber-500 — matches --primary
    colorSuccess: "#22C55E",
    colorWarning: "#F59E0B",
    colorError: "#EF4444",
    colorInfo: "#F59E0B",

    // Surfaces (HSL 240 ~ deep neutral, mapped to hex for antd)
    colorBgBase: "#0A0A0F",
    colorBgLayout: "#0A0A0F",
    colorBgContainer: "#14141A",
    colorBgElevated: "#1A1A22",
    colorBorder: "#26262E",
    colorBorderSecondary: "#1E1E26",

    // Text
    colorTextBase: "#E5E7EB",
    colorTextSecondary: "#A1A1AA",
    colorTextTertiary: "#71717A",

    // Typography
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontFamilyCode: "'JetBrains Mono', monospace",
    fontSize: 14,

    // Shape — slightly rounded but cleaner than current 12px everywhere
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,

    // Motion
    motionDurationMid: "0.2s",
    wireframe: false,
  },
  components: {
    Layout: {
      bodyBg: "#0A0A0F",
      headerBg: "#0F0F14",
      siderBg: "#0F0F14",
      headerHeight: 64,
      headerPadding: "0 24px",
    },
    Menu: {
      darkItemBg: "transparent",
      darkSubMenuItemBg: "transparent",
      darkItemSelectedBg: "rgba(245, 158, 11, 0.12)",
      darkItemSelectedColor: "#F59E0B",
      darkItemHoverBg: "#1A1A22",
      itemBorderRadius: 8,
      itemHeight: 44,
      iconSize: 18,
    },
    Card: {
      colorBgContainer: "#14141A",
      borderRadiusLG: 12,
      paddingLG: 20,
    },
    Button: {
      borderRadius: 8,
      controlHeight: 38,
      fontWeight: 500,
      primaryShadow: "none",
    },
    Input: {
      borderRadius: 8,
      controlHeight: 38,
      colorBgContainer: "#14141A",
    },
    Tabs: {
      itemActiveColor: "#F59E0B",
      itemSelectedColor: "#F59E0B",
      inkBarColor: "#F59E0B",
      titleFontSize: 14,
    },
    Tag: {
      borderRadiusSM: 6,
    },
    Avatar: {
      borderRadius: 8,
    },
    Modal: {
      contentBg: "#14141A",
      headerBg: "#14141A",
      borderRadiusLG: 12,
    },
    Dropdown: {
      controlItemBgHover: "#1A1A22",
      borderRadiusLG: 8,
    },
  },
};
