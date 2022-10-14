# Prueba Técnica React (realizada sobre la base de back-end) 

Prado Carretero Ayala. Adalab
![WebApp](https://s4.gifyu.com/images/webapp.gif)

## Notas a quien corrija el ejercicio

- El material de **UI ha sido subdividido en componentes personalizados** (components/core), para poder ser reutilizado y fácilmente modificable en caso de que el servidor MUI hiciera cualquier cambio.
- Los componentes de clase han sido sustituidos por **componentes funcionales**, ya que aportan mayores ventajas.

#### Cambios en la API

1. En el enunciado se pedía utilizar el **puerto 8080**, sin embargo en la api no estaba especificado en ningún sitio. He creado un documento de configuración de entorno (.env) donde especifico el puerto.

2. He visto que había un fallo al tratar de hacer un put en el primer usuario de la lista (en la posición 0 del array).

   Lo he solucionado modificando en la api la **función que devolvía la información para hacer el fetch** (archivo userServide, module.exports.updateUser).

   > Lo que hace la función es buscar los datos del usuario que se quiere modificar a partir de su índice y su id.
   >
   > - Cuando no se encuentran los datos → retorna null
   > - Cuando se encuentran los datos → los retorna.

   El problema era que cuando el índice del array era 0, consideraba un parámetro “falsy” y retornaba null. Lo he solucionado modificando el condicional.

3. He modificado el backend para dar respuesta a las peticiones con ruta **user**/id para PUT y DELETE.
   He creado otro middleware a través de app.use() con otro path y he creado un archivo nuevo para las funciones de esas rutas.

#### Control de excepciones

- Contiene **propTypes**.
- Contiene **defaultProps** (por ejemplo en el componente components/core/typography).
- Desde el front **se requiere completar todos los datos del formulario** de nuevo usuario para enviarlos a la api y crear así su entrada.

#### Experiencia de usuario

- **Mensaje de error** si no se detallan todos los datos del formulario de nuevo usuario.
- **Página no encontrada** si se escribe una URL inválida aparecerá un mensaje de error con un botón para volver a la página principal.
  > Hay que escribir la URL con un asterisco en medio para que funcione: http://localhost:3000/#/fsd

## Descrpición del ejercicio

Esta App Web es un sistema de gestión de usuarios realizada con ReactJS, material UI https://material-ui.com y consulta la información de los usuarios a través de una api.

> Esta aplicación obtiene, modifica, borra y crea usuarios a través de la api.

## Instalación

Instala mi proyecto con npm

```bash
  cd prueba-tecnica-prado
  cd front
  npm install
  npm start
```

```bash
  prueba-tecnica-prado
  cd api
  npm install
  npm start
```

## API Referencias

#### Obtener los usuarios

```http
  GET /users
```

#### Añadir nuevo usuario

```http
  `POST` /users
```

```http
    Body params - JSON
 `{
	"name" : "userName", //nombre del usuario
	"lastName": "lastName", // apellido
	"age": 20,//edad
	"email":"mail@mail.com" //email
   }`
```

#### Borrar usuario

```http
  `DELETE` /user/{id}
```

#### Modificar usuario

```http
  `PUT` /user/{id}
```

