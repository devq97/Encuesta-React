const path = require('path'); /////////// Obtener rutas alternativas dentro de mis archivos
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/entries/index.js')], //__dirname me da la ruta donde estoy ubicado
  output: {
    path: path.resolve(__dirname, 'dist'), // Crea otra carpeta con nombre dist
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van los Loaders, quines ayudan a soportar multiples archivos dentro de uestros archivos JavaScript
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.js$/, //Me lea todos los archivos con extensión class
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react', {
              'plugins': ['@babel/plugin-proposal-class-properties']
            }]
          }
        },
      },
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/, //Me lea todos los archivos con extensión class
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
          }
        }
      },
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.css$/, //Me lea todos los archivos con extensión class
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader'], //Entiende archivos css, los trae, style-loader lo imprime en pantalla
          // fallback: 'style-loader',
          use: "css-loader"
        }),
      }
    ]
  },
  plugins: [
    //aquí van los plugins
    new ExtractTextPlugin("css/[name].css")
  ]
}
