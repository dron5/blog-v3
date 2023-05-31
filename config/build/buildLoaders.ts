import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import path from 'path';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/i,
    // use: ['@svgr/webpack', 'url-loader'],
    // use: ['@svgr/webpack', 'svgo-loader'],
    use: ['@svgr/webpack'],

    // type: 'asset',
    // type: 'asset/resource',
    // use: 'svgo-loader',
  };
  const fileLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource',
    // use: [
    //   {
    //     loader: 'file-loader',
    //   },
    // ],
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },

      'sass-loader',
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}
