// node_modules/prismjs/components/prism-json.js
Prism.languages.json = {
  "property": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "comment": {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "punctuation": /[{}[\],]/,
  "operator": /:/,
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
Prism.languages.webmanifest = Prism.languages.json;
//# sourceMappingURL=prism-json-HGJKP4PG.js.map
