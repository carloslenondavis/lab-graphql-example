![](https://cdn-images-1.medium.com/max/900/1*mumryCJDTedTv1nOxB5PJg.png)

# AppTODO-101 with Grahql, Sequelize and Postgres

Este es un Laboratorio-101 para iniciar con graphql, express, ORM Sequelize y PostgresSQL. Una experiencia enriquecedora y totalmente productiva. puede ser usado con cualquier cliente, pronto tendrán un ejemplo con react y angular como frontend clients;
* Nota: Este solo es un jumping a graphql, sequelize y postgres.

## Iniciando

Estas son las instrucciones para poder correr el projecto en tu local. 

### Prerrequisitos

```
* Tener instalado un editor, para este ejemplo se utilizó [VSCode ^1.20.1](https://code.visualstudio.com/)
* Instalar cualquier bd SQL de preferencia, Para el ejemplo se utilizó [Postgress 10.2](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
* Instalar [Nodejs](https://nodejs.org/es/)
* Instalar [GIT](https://git-scm.com/)
```

### Installando

Clonar o crear tu propia cuenta del repositorio

```
git@github.com:clenondavis/lab-graphql-101.git
```
* Este repo esta configurado con ssh, para que puedas solicitar el acceso al autor y/o contribuyentes.

Una vez clonado el proyecto, ya pueedes instalar las dependencias, ejecutando el cli de preferencia el comando

```
npm i
```

Instalar el CLI global de sequelize

```
npm i -g sequelize
```

Instalar el CLI global de nodemon

```
npm i -g nodemon
```

### Configuración

```
Configurar el archivo src/db/config/config.json
* agregar tu usuario y tu password para el acceso de la bd
```

### Server

Para levantar el server con el proyecto, ejecuta el comando. por defecto el server esta en el puerto 7001. Puedes configurar tu propio puerto en el archivo server.js

```
npm start
```

Luego ve a tu navegador y escribe

```
localhost:7001
```

y veras el cliente de graphql.

### Base de Datos

Para generar el modelo de la base, debes correr las migraciones escribiendo el comando del CLI de sequelize

```
sequelize db:migrate
```

Para ver los comandos de sequelize en tu consola puede usar el comando

```
sequelize -H
```


## Test

En progreso..


## Desarrollado con

* [Graphql - documentacion con JS](http://graphql.org/graphql-js/) - Esquemas y consultas
* [Express](http://expressjs.com/es/starter/installing.html) - Infraestructura web sobre Node
* [Sequelize](http://docs.sequelizejs.com/) - ORM
* [graphql-sequelize](https://github.com/mickhansen/graphql-sequelize) - Paquete para conectar los esquemas de graqhql con los models de sequelize
* [express-graphql](https://github.com/graphql/express-graphql) - Middleware para graqhql
* [nodemon](https://github.com/remy/nodemon#nodemon) - Monitorear los cambios en el código y automaticamente reiniciar el server
* [babel](https://babeljs.io/) - Transpilador ES5/Es6


## Contribuyentes

* La plantilla del readme de este laboratorio-101 fue creado por [Billie Thompson](https://gist.github.com/PurpleBooth)
* El creador y contribuyente activo del paquete de graphql con sequelize [Mick Hansen](https://github.com/mickhansen)


## Colaborador

Tu contribución es importante. Para contribuir o ser colaborador de este laboratorio-101
* Dale tu estrella a este laboratorio-101
* Seguí al repositorio para recibir notificaciones de mejoras continuas
* Crear un pull request con la propuesta de cambio, espera y veras tu aporte compartido a la comunidad.
* Ponte en contacto con el autor del laboratorio

Para colaborar con la Comunidad  [JsNi](https://github.com/js-ni) y convertirte en un miembro activo
* Ponte en contacto con [Paulo McNally](https://github.com/paulomcnally) ó [Hosmel Quintana](https://github.com/hosmelq), para que puedan agregarte y asi formar parte de esta grande comunidad de JS-Lovers 

## Versionamiento

Se usa GIT como control de versiones. Para acceder a la última version, ir a las [etiquetas del repositorio](https://github.com/clenondavis/lab-graphql-101/tags).

## Authors

* **Carlos Lenon** - *Trabajo Inicial* - [clenondavis](https://github.com/clenondavis)

Ver el listado de los [colaboradores](https://github.com/clenondavis/lab-graphql-101/graphs/contributors) de este laboratorio-101.

## Licencia

Este proyecto esta bajo la licencia MIT - ver detalle de esta [licencia](https://github.com/clenondavis/lab-graphql-101/blob/master/LICENSE)

## Inspiración

* Aportar cada día a nuestra comunidad JsNi
* En Camino a ser Arquitecto en JS
* Aprender de los demás
