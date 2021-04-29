#!/usr/bin/env node
const rollup = require("rollup");
const path = require("path");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const commonjs = require("@rollup/plugin-commonjs");
const resolve = require("@rollup/plugin-node-resolve").default;
const babel = require("@rollup/plugin-babel").default;
const postcss = require("rollup-plugin-postcss");
const typescript = require("rollup-plugin-typescript2");
const fs = require("fs-extra");

const currentWorkingPath = process.cwd();
const {
  src,
  name,
  main,
  module: moduleName,
  devDependencies = {},
  peerDependencies = {},
} = require(path.join(currentWorkingPath, "package.json"));

const inputPath = path.join(currentWorkingPath, src);

const fileName = name.replace("@rupertong/", "");

const inputOptions = {
  input: inputPath,
  external: [...Object.keys(devDependencies), ...Object.keys(peerDependencies)],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".node"],
    }),
    commonjs(),
    typescript({
      tsconfig: "../../tsconfig.json",
      useTsconfigDeclarationDir: true,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          baseUrl: currentWorkingPath,
          declaration: true,
          declarationMap: true,
          declarationDir: path.join(currentWorkingPath, "dist", "types"),
        },
        include: ["./lib/**.*.+(ts|tsx)"],
        exclude: [
          "node_modules",
          "dist",
          "/**/*.stor+(y|ies).*",
          "/**/*.+(spec|test).*",
          fileName !== "base-ui" ? "packages/base-ui/*" : "",
        ],
      },
    }),
    babel({
      extensions: [".js", ".ts", ".tsx", ".jsx"],
      // exclude: [/core-js/],
      presets: [
        [
          "@babel/preset-env",
          /* {
            corejs: 3,
            modules: false,
            targets: "> 0.25%, ie 11, not op_mini all",
            useBuiltIns: "usage",
          }, */
        ],
        "@babel/preset-react",
      ],
      babelHelpers: "bundled",
    }),
    postcss({
      modules: true,
    }),
  ],
};

const outputOptions = [
  {
    // file: `dist/${fileName}.cjs.js`,
    file: main,
    format: "cjs",
    sourcemap: true,
    exports: "auto",
  },
  {
    // file: `dist/${fileName}.esm.js`,
    file: moduleName,
    format: "esm",
    sourcemap: true,
  },
];

async function build() {
  await fs.remove(path.join(currentWorkingPath, "dist"));
  const bundle = await rollup.rollup(inputOptions);
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
