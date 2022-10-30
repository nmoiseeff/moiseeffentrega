App: moiseeffEntrega

Descripción: e-commerce de espaciadores para transformadores secos (Coil spacers for cast resine transformers). Los espaciadores se arman con distintas piezas segun el tamaño del transformador y se venden en unidades de decenas.

Instrucciones de descarga:

1- Entrar al link: https://github.com/nmoiseeff/moiseeffentrega

2- Bajar desde la ruta "main" el repositorio de la App. EL mismo se realiza desde el botón "code" y dentro del menu la opción "Download ZIP".

3- Una vez descargado el proyecto en su computadora, descomprimir el archivo ZIP y guardarlo en una carpeta con el nombre de moiseeffEntrega.

4- Abrir el "Visual Studio Code" y abrir una carpeta nueva donde luego vamos a insertar la carpeta creada en el punto 3.

5- Se requiere instalar Node JS e iniciarlo desde la consola ccon el comando "npm init".

6- Si no tenemos instalado react, una vez creada la carpeta padre, vamos a ir a la consola donde vamos a escribir "npx create-react-app nombre de la aplicacion".

7- Una vez instalado react en la computadora, vamos a la carpeta donde descomprimimos el proyecto dentro de la carpeta donde isntalamos React y desde la consola escribimos el comando "npm start" para conectarnos con el servidor local de la computadora.

El ecommerce se hizo con el objetivo de armar ordenes para comprar conjuntos de espaciadores para transformadores secos.

A- La primera vista de la App posee un muestreo de todos los productos que componen los conjuntos. En la misma se pueden ver los siguientesa componentes:

NavBar

ItemListContainer

Dentro del componente NavBar vamos a encontrar los filtros de los productos donde vamos a poder seleccionar los productos que necesitamos. Al seleccionar los productos vamos a ir al componente ItemDetailContainer donde vamos a poder ver el detalle del producto con los componentes ItemDetail y ItemCount. Item Detail nos va a mostrar la información mas detllada del producto selaccionado e ItemCount nos va a permitir sumar o restar los productos para cargarlos al carrito de compra o CartWidget.

Dentro de CartWidget vamos a ir cargando los porductos que conformaran la orden y se iran almacenando el componente Cart. El Cart se conectara con el componente Checkout para ejecutar la orden en el backend.

Una vez ejecutado el componente CheckOut, va a aparecer un formlario donde se ingresaran los datos del comprador para ser validados y darle la orden "generar orden" para cargar la misma en el backend. Cabe destacar que la orden restará el stock de cada producto y se vera reflejado en la base de datos de los mismos.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
