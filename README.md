# react-dentalclinic

# REACT - Frontend App - Videclub inspirado en los años 90´s.

![image](https://user-images.githubusercontent.com/113507322/205169800-ae8aeff3-2afc-467c-8c53-6c1637671770.png)


### Datos generales

**- Autores del proyecto:** Mara Scampini & Alejandro López.

**- Título del proyecto:** Ejercicio técnico 5 - Frontend App alquier películas

**- Fecha:** 04/12/2022

**-Tecnologías y dependencias:** 

![logos-tecnologias-utilizadas3](https://user-images.githubusercontent.com/113507322/205345377-539842e5-3691-4a3a-8919-5fe9a843dcc2.jpg)

 ### Acceso a la aplicación

> https://main.d2zdcocbf8dhlm.amplifyapp.com/

Datos de acceso como administrador: 

> Mail: admin@admin.com // Password: Admin1234


 ### Descripción general del proyecto 

El siguiente ejercicio consiste en el diseño y desarrollo de un FRONTEND para una APP funcional que ofrece el servicio de alquiler de películas. Este FRONTEND conecta
con una API que permite la conexión con una BASE DE DATOS SQL donde se encuentra almacenada toda la información para un correcto funcionamiento de la aplicación.


 ### Diseño y aspecto de la APP
 
 En nuestra propuesta de videoclub decidimos ofrecer un servicio de alquiler de películas de la época de los 90s. En relación a esta época, el nombre que hemos escogido para nuestra 
 aplicación es SUPER EIGHT, y hace referencia a las bobinas que se utilizaban hace unas décadas para filmar las películas. 
 
 Siguiendo una inspiración 'años 90' y apostando por un diseño gráfico que nos recuerde a esta época, establecemos unos colores para la estructura de las distintas pantallas, así como una serie de recursos gráficos, imágenes y vectores que nos recuerdan al las interfaces de las webs que empezaban a surgir por aquel entonces. Los 
 componentes de la aplicación simulan ventanas emergentes y con un aspecto sencillo que se adapta completamente a las funcionalidades de la web pero que intentan 
 emular este estilo 'retro'.
 
 Moodboard e inspiración:
 
 ![moodboard-1](https://user-images.githubusercontent.com/113507322/204105036-a9d41883-f395-4caf-b97f-2d03d743532a.png)

 

### FRONTEND
 
 
 
### PANTALLAS Y PÁGINAS DE LA APLICACIÓN

La aplicación permite la navegación entre las distintas pantallas que la componen y su diseño está adaptado a la resolución a distintos dispositivos. Está estructurada de la siguiente manera:
 
 
**-->HOME / MOVIES**
 
 
La vista HOME es la primera vista que nos encontramos al entrar en la web. Sin estar logueados, en ella podemos previsualizar las películas TOP RATED. Una vez logueados, tendremos acceso a todas las películas. En ambos casos tenemos acceso a la barra del buscador ubicada en el 'header'. En ella podremos buscar entre el contenido de las películas y el predictor de texto nos ayudará en la búsqueda. 

Desde el 'header' tenemos acceso a las páginas 'About us', 'Register' donde podremos dar de alta a un usuario, y 'Login' para dar acceso a los usuarios ya registrados. 

![movies](https://user-images.githubusercontent.com/113507322/205171611-d21ff378-12e3-44c6-b77e-8fb88ca916b5.png)


**-->REGISTER**

La página 'Register' nos permite dar de alta a un nuevo usuario. Los campos para crear el usuario son obligatorios ('user name', 'name', 'adress', 'city', 'email', 'password', 'password2'. Cada input nos indicará en caso de error si los campos introducidos son válidos o no lo son. 

![register](https://user-images.githubusercontent.com/113507322/205172016-f5d42deb-4bae-4a91-980a-d0e12ea4db17.png)


**-->LOGIN**

El login nos da acceso a la página como usuarios ya registrados. Para logearnos necesitamos introducir el 'email' y 'password'.

![log-in](https://user-images.githubusercontent.com/113507322/205172901-0aa6c705-f3a9-428c-ad20-bae7640531bf.png)


**-->WELCOME USER**

La primera pantalla que vemos conforme ingresamos como usuarios es la de nuestros alquileres activos con la fecha del alquiler. Desde aquí podemos acceder a las películas que están en nuestro plazo de alquiler. Si clicamos sobre la tarjeta de una de las películas podemos ir a ver su información y desde esta pantalla podremos devolverla. 

![admin-loans](https://user-images.githubusercontent.com/113507322/205505236-84aa2644-44ea-4109-89bf-1b8845e5dfb8.png)



**-->MOVIE DETAIL**

Si clicamos sobre la tarjeta de una de las películas podemos ir a ver su información, título, director y descripción. Si pulsamos sobre el nombre del director, tendremos acceso a la colección de películas del videoclub dirigidas por el mismo autor. Además, desde esta pantalla podremos proceder a la devolución de la película si todavía se encuentra activa. Si la vista corresponde a una película que NO tenemos alquilada, nos dará la opción de hacerlo. Además, en esta misma vista, si no estamos ni registrados ni logueados, no nos dará la opción de alquilar y solo podremos ver la información de la película. 

![movie-detail](https://user-images.githubusercontent.com/113507322/205174130-fce0fa6c-2710-44f1-b246-dc14c2090170.png)


**-->HI-USER!**

Una vez logueados tendremos acceso desde la barra de navegación a nuestra sección como usuarios. Desde aquí podremos actualizar nuestra información personal ('name', 'password'). Desde aquí podremos previsualizar nuestra 'tarjeta de usuario', donde aparecerán nuestros datos personales. 

![hi-user](https://user-images.githubusercontent.com/113507322/205174668-650cf975-08a2-46c9-a3aa-a8fab236ab45.png)

**-->ADMIN**

Si accedemos a la web como usuario administrador, podemos encontrar la sección de 'Admin'.  Una vez logueados podremos ver varios menús desplegables con diferentes opciones. 
La primera es la opción de 'Loans'. Aquí podemos ver todos los alquileres activos (señalados en color verde) y los alquileres finalizados. Podremos ver qué usuario ha hecho cada alquiler, así como su información, la fecha de alquiler y la fecha de devolución. 

![admin](https://user-images.githubusercontent.com/113507322/205175208-ce325efd-0be3-4adc-aa56-a615b1937064.png)

![loans](https://user-images.githubusercontent.com/113507322/205175223-1fa7c573-debc-466e-a6d6-89bb838cae69.png)

El menú 'Users' nos muestra los usuarios que hay registrados y activos actualmente en la aplicación. Y el menú 'deleted users' nos mostrará los usuarios ya eliminados. 


![users](https://user-images.githubusercontent.com/113507322/205175738-9deeb642-e2c6-44b2-aa71-394af79e5eea.png)


**-->ABOUT US**

La ultima sección de nuestra web es 'About Us'. Aquí encontramos una descripción tanto de SUPER EIGHT como del contenido que ofrece. 


![about-us](https://user-images.githubusercontent.com/113507322/205175953-5cd54515-100e-4979-9f3a-dd6c393d438c.png)


**-->ADAPTACIÓN A DISPOSITIVOS**

 
![mockups-iphones-super-eight](https://user-images.githubusercontent.com/113507322/205178507-3deadd79-73df-4934-b5c7-cf792c1aca35.png)



**RECURSOS ALTERNATIVOS**

Diseño y edición de imágenes y vectores:
  - ADOBE PHOTOSHOP.
  - ADOBE ILLUSTRATOR. 

**FUENTES**

- Vectores editables y autores: www.freepik.es / www.pixabay.com / www.pexels.com


