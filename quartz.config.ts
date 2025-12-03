import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Medjed's Digital Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "medjedsdigitalgarden.nekoweb.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Kablammo",
        body: "Beth Ellen",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#C7E099",
          lightgray: "#adc178",
          gray: "#adc178",
          darkgray: "#3B5C28",
          dark: "#E8E158",
          secondary: "#c8b256",
          tertiary: "#dc7c2e",
          highlight: "rgba(0, 188, 212, 0.15)",
          textHighlight: "#FFCB6985",
        },
        darkMode: {
          light: "#1f2519",
          lightgray: "#a68a64",
          gray: "#a68a64",
          darkgray: "#ABCC6C",
          dark: "#889837",
          secondary: "#c8b256",
          tertiary: "#dc7c2e",
          highlight: "rgba(0, 188, 212, 0.15)",
          textHighlight: "#FFCB6985",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: false,
        rssSlug: "Captain's Log (RSS)"
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
