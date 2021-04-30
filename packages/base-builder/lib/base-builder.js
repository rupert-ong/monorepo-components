#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const postcss = require('rollup-plugin-postcss');
const typescript = require('rollup-plugin-typescript2');
const fs = require('fs-extra');
const rename = require('rollup-plugin-rename-node-modules');

const currentWorkingPath = process.cwd();
const {
  src,
  main,
  devDependencies = {},
  peerDependencies = {},
} = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, src);

const inputOptions = {
  input: inputPath,
  external: [
    ...Object.keys(devDependencies),
    ...Object.keys(peerDependencies),
    'tslib',
  ],
  plugins: [
    rename(),
    peerDepsExternal(),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.node'],
    }),
    commonjs(),
    typescript({
      tsconfig: '../../tsconfig.json',
      useTsconfigDeclarationDir: true,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          baseUrl: currentWorkingPath,
          declaration: true,
          declarationMap: true,
          declarationDir: path.join(currentWorkingPath, 'dist', 'types'),
        },
        outDir: './dist',
        include: [path.join(currentWorkingPath)],
        exclude: [
          'node_modules',
          '/**/*.stor+(y|ies).*',
          '/**/*.+(spec|test).*',
        ],
      },
    }),
    babel({
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
      // exclude: [/core-js/],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
          /* {
            corejs: 3,
            modules: false,
            targets: "> 0.25%, ie 11, not op_mini all",
            useBuiltIns: "usage",
          }, */
        ],
        '@babel/preset-react',
      ],
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
    }),
    postcss({
      modules: true,
    }),
  ],
};

const outputOptions = [
  {
    file: main,
    format: 'cjs',
    sourcemap: true,
    exports: 'auto',
  },
  {
    dir: 'dist/esm',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: './lib',
    sourcemap: true,
  },
];

async function build() {
  await fs.remove(path.join(currentWorkingPath, 'dist'));
  const bundle = await rollup.rollup(inputOptions);
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
