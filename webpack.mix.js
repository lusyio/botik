const mix = require('laravel-mix');
require('laravel-mix-react-css-modules');
require('laravel-mix-react-typescript-extension');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.reactTypeScript('resources/js/app.tsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.(jsx|js|tsx)$/,
                    loader: 'eslint-loader',
                    enforce: 'pre',
                    exclude: /(node_modules)/,
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                }
            ]
        },
    })
    .reactCSSModules('[path]__[name]___[hash:base64]')
    .browserSync('http://localhost:8888/')
