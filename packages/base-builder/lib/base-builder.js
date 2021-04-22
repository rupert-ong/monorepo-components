#!/usr/bin/env node
const rollup = require("rollup");
const path = require("path");
const resolve = require("@rollup/plugin-node-resolve").default;
const babel = require("@rollup/plugin-babel").default;
const postcss = require("rollup-plugin-postcss");

const currentWorkingPath = process.cwd();
const { src, name } = require(path.join(currentWorkingPath, "package.json"));

const inputPath = path.join(currentWorkingPath, src);

const fileName = name.replace("@rupertong/", "");

const inputOptions = {
  input: inputPath,
  external: ["react"],
  plugins: [
    resolve(),
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    postcss({
      modules: true,
    }),
  ],
};

const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: "cjs",
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: "esm",
  },
];

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
