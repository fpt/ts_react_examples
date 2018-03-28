import * as webpack from 'webpack';
import {
  createConfig, customConfig, match,
  // Feature blocks
  addPlugins, defineConstants, entryPoint, env,
  group, setOutput, sourceMaps,
  // Shorthand setters
  devServer, file, typescript, uglify,
} from 'webpack-blocks';
import { html } from 'webpack-blocks-utils';


const developmentConfig = () => group([
  html({ template: `${__dirname}/index.html` }),
  sourceMaps(),
  devServer(),
  addPlugins([
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ]),
]);

const productionConfig = () => group([
  uglify({
    parallel: true,
  }),
  addPlugins([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ]),
]);

const config = createConfig([
  setOutput({
    filename: 'app.js',
    path: `${__dirname}/dist`,
    library: 'rplayground',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '/',
  }),
  customConfig({
    resolve: {
      modules: [`${__dirname}/src`, 'node_modules'],
    },
  }),
  typescript(),
  env('development', [
    developmentConfig(),
  ]),
  env('production', [
    productionConfig(),
  ]),
]);

export default config;
