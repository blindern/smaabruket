import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as path from 'path'
import * as webpack from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const config = (env: Record<string, unknown>): webpack.Configuration => {
  const isProd = env && env.production

  const styleLoader = isProd ? MiniCssExtractPlugin.loader : 'style-loader'

  const config: webpack.Configuration = {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            ...(isProd
              ? []
              : [
                  {
                    loader: 'babel-loader',
                    options: {
                      plugins: ['react-refresh/babel'],
                    },
                  },
                ]),
            {
              loader: 'ts-loader',
            },
          ],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(svg|png)$/i,
          use: 'url-loader',
        },
        {
          test: /\.css$/,
          use: [styleLoader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.scss$/,
          use: [styleLoader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '-',
      },
      runtimeChunk: {
        name: 'manifest',
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            filter: (filepath) => !filepath.includes('index.html'),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        minify: false,
      }),
    ],
  }

  if (isProd) {
    return {
      ...config,
      mode: 'production',
      devtool: 'hidden-source-map',
      plugins: [...(config.plugins ?? []), new MiniCssExtractPlugin()].filter(
        (it): it is webpack.WebpackPluginInstance => it != null,
      ),
    }
  }

  const devServer: DevServerConfiguration = {
    host: '127.0.0.1',
    static: {
      directory: './public',
    },
    port: 3000,
    historyApiFallback: true,
    hot: true,
  }

  // Configuration specific to developing locally
  return {
    ...config,
    mode: 'development',
    // https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/e6774d935d11410a7928cb499b384fb7b592a162/docs/TROUBLESHOOTING.md#webpack-5-compatibility-issues-with-webpack-dev-server3
    target: 'web',
    cache: true,
    devtool: 'eval-source-map',
    devServer,
    module: {
      rules: [
        ...(config.module?.rules ?? []),
        {
          enforce: 'pre',
          test: /\.*js$/,
          loader: 'source-map-loader',
        },
      ],
    },
    plugins: [...(config.plugins ?? []), new ReactRefreshPlugin()],
    ignoreWarnings: [
      {
        message: /Failed to parse source map/,
      },
    ],
  }
}

export default config
