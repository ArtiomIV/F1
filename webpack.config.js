const path = require('path'); // la biblioteca che permette di indetificare corettamente il percorso
const HtmlWebpackPlugin = require("html-webpack-plugin"); // importiamo htmnl pligin che ci permette di generare le pagine html

module.exports = { // le regole
    entry: "./src/index.js", // punto di entrata
    output: {
        path: path.join(__dirname, "/dist"), // la biblioteca path prende il percorso corrente e gli aggiunge nella folder la cartella "dist" dove si trova il file di uscita
        filename: "maine.js", // punto di uscita
    },
    module: {
        rules: [
            {
                test: /\.js$/, // qui indichiamo che tipologia di file dobbiamo compialre
                exclude: "/node_modules", // escludiamo la cartella che contiene i files di configurazione
                use: {
                    loader: "babel-loader" // indichaimo al programma che loader deve user per compilare i fle in JSX via babel(trans compiler )
                }
            },
            {
                test: /\.css$/, // indicamo la tipologia di file per il css
                use: ["style-loader", "css-loader"] // style loader permette di unire tutti i style in style.css file
            }
        ]
    },
    plugins: [ //plugin che vogliamo utilizzare
        new HtmlWebpackPlugin({ //esemplare di classe che abbiamo descritto al inizio
            template: "./src/index.html" // file da quale prendere rifferrimento
        })
    ]
}