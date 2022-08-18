// @see: https://stylelint.io

module.exports = {
  extends: [
    "stylelint-config-standard", // 配置stylelint拓展插件
    "stylelint-config-prettier", // 配置stylelint和prettier兼容
  ],
  plugins: ["stylelint-less"], // 配置stylelint less拓展插件
  rules: {
    indentation: null, // 指定缩进空格
    "no-empty-source": null, // 禁止空源码
    "no-descending-specificity": null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    "function-url-quotes": "always", // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    "string-quotes": "double", // 指定字符串使用单引号或双引号
    "rule-empty-line-before": "always", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行。)"
    "at-rule-no-unknown": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"]
      }
    ]
  }
};