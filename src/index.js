var require = { paths: { vs: "../node_modules/monaco-editor/min/vs" } };

monaco.editor.create(document.getElementById("container"), {
  value: "function hello() {\n\talert('Hello world!');\n}",
  language: "javascript",
});
