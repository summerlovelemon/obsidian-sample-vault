/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MetadataIcon
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  IconAttrList: [{ entry: "github", image: "https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png" }]
};
var MetadataIcon = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.debounceUpdateCSS = (0, import_obsidian.debounce)(this.updateCSS, 1e3, true);
  }
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new MetadataHiderSettingTab(this.app, this));
    this.updateCSS();
  }
  onunload() {
  }
  updateCSS() {
    var _a;
    this.styleTag = document.createElement("style");
    this.styleTag.id = "css-metadata-icon";
    console.log(document.getElementsByTagName("head"));
    let headElement = document.getElementsByTagName("head")[0];
    const existingStyleTag = headElement.querySelector("#css-metadata-icon");
    if (existingStyleTag) {
      (_a = existingStyleTag.parentNode) == null ? void 0 : _a.removeChild(existingStyleTag);
    }
    headElement.appendChild(this.styleTag);
    this.styleTag.innerText = genSnippetCSS(this);
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
function genEntryCSS(s) {
  const selector = `data-property-key="${s.entry}"`;
  let body = [
    `.metadata-property[${selector}] .metadata-property-key::after {`,
    `	content: "";`,
    `	background-image: url("${s.image}");`,
    `	background-size: 20px;`,
    `	width: 20px;`,
    `	height: 20px;`,
    `	position: absolute;`,
    `	left: 3px;`,
    `	top: 6px;`,
    `	z-index: -100;`,
    `	opacity: 0.5;`,
    `	background-repeat: no-repeat;`,
    `}`,
    `.metadata-property[${selector}] svg {`,
    `	visibility: hidden;`,
    `}`,
    ``
  ];
  return body.join(" ");
}
function genSnippetCSS(plugin) {
  const content = [
    ".setting-item-description:has(.metadata-icon-preview) {",
    "	display: flex;",
    "	align-items: center;",
    "	justify-content: space-around;",
    "}",
    ""
  ];
  plugin.settings.IconAttrList.forEach((iconSetting, index) => {
    content.push(genEntryCSS(iconSetting));
  });
  return content.join(" ");
}
var MetadataHiderSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  getLang() {
    let lang = window.localStorage.getItem("language");
    if (lang == null || ["en", "zh", "zh-TW"].indexOf(lang) == -1) {
      lang = "en";
    }
    return lang;
  }
  display() {
    const { containerEl } = this;
    const lang = this.getLang();
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName({ en: "Add custom entry icon", zh: "\u6DFB\u52A0\u81EA\u5B9A\u4E49\u56FE\u6807", "zh-TW": "\u65B0\u589E\u81EA\u5B9A\u7FA9\u5716\u793A" }[lang]).setDesc({
      "en": "Input entry name and icon url. The image will be automatically loaded on the left side. If there is no image shown on the left side, please check the image url or network connection.",
      "zh": "\u8F93\u5165\u6587\u6863\u5C5E\u6027\u540D\u79F0\u548C\u56FE\u6807\u94FE\u63A5\u3002\u56FE\u6807\u5C06\u5728\u5DE6\u4FA7\u81EA\u52A8\u9884\u89C8\uFF0C\u5982\u679C\u5DE6\u4FA7\u6CA1\u6709\u663E\u793A\u56FE\u7247\uFF0C\u8BF7\u68C0\u67E5\u56FE\u7247\u94FE\u63A5\u662F\u5426\u6B63\u786E\u6216\u7F51\u7EDC\u8FDE\u63A5\u3002\u8F93\u5165\u793A\u4F8B\uFF1A\u300C\u8C46\u74E3\uFF0Chttps://img1.doubanio.com/favicon.ico\u300D",
      "zh-TW": "\u8F38\u5165\u6587\u4EF6\u5C6C\u6027\u540D\u7A31\u548C\u5716\u793A\u93C8\u63A5\u3002\u5716\u793A\u5C07\u5728\u5DE6\u5074\u81EA\u52D5\u9810\u89BD\uFF0C\u5982\u679C\u5DE6\u5074\u6C92\u6709\u986F\u793A\u5716\u7247\uFF0C\u8ACB\u6AA2\u67E5\u5716\u7247\u93C8\u63A5\u662F\u5426\u6B63\u78BA\u6216\u7DB2\u7D61\u9023\u7DDA\u3002\u8F38\u5165\u7BC4\u4F8B\uFF1A\u300Cfacebook\uFF0Chttps://www.facebook.com/favicon.ico\u300D"
    }[lang]).addButton((button) => {
      button.setTooltip("Add new icon").setButtonText("+").setCta().onClick(async () => {
        this.plugin.settings.IconAttrList.push({
          entry: "",
          image: ""
        });
        await this.plugin.saveSettings();
        this.display();
      });
    });
    this.plugin.settings.IconAttrList.forEach((iconSetting, index) => {
      const s = new import_obsidian.Setting(this.containerEl);
      let span = s.descEl.createEl("span", { text: { en: "icon preview:", zh: "\u56FE\u6807\u9884\u89C8:", "zh-TW": "\u5716\u793A\u9810\u89BD:" }[lang] });
      span.setAttribute("style", `margin-right: 2px; `);
      let img = s.descEl.createEl("img", { cls: "metadata-icon-preview" });
      img.setAttribute("src", iconSetting.image);
      img.setAttribute("width", `20px`);
      img.setAttribute("style", `background-color: transparent;`);
      s.addSearch((cb) => {
        cb.setPlaceholder({ en: "entry name", zh: "\u6587\u6863\u5C5E\u6027\u540D\u79F0", "zh-TW": "\u6587\u4EF6\u5C6C\u6027\u540D\u7A31" }[lang]).setValue(iconSetting.entry).onChange(async (newValue) => {
          this.plugin.settings.IconAttrList[index].entry = newValue;
          await this.plugin.saveSettings();
          this.plugin.debounceUpdateCSS();
        });
      });
      s.addSearch((cb) => {
        cb.setPlaceholder({ en: "image url", zh: "\u56FE\u6807\u94FE\u63A5", "zh-TW": "\u5716\u793A\u93C8\u63A5" }[lang]).setValue(iconSetting.image).onChange(async (newValue) => {
          img.setAttribute("src", newValue);
          this.plugin.settings.IconAttrList[index].image = newValue;
          await this.plugin.saveSettings();
          this.plugin.debounceUpdateCSS();
        });
      });
      s.addExtraButton((cb) => {
        cb.setIcon("cross").setTooltip("Delete").onClick(async () => {
          this.plugin.settings.IconAttrList.splice(index, 1);
          await this.plugin.saveSettings();
          this.display();
          this.plugin.debounceUpdateCSS();
        });
      });
    });
  }
};
