
# Gastronomic Restaurant

**Gastronomic Restaurant** es una aplicación web creada para un restaurante especializado en pizzas italianas. Esta aplicación presenta un catálogo de productos de manera elegante y responsiva, permitiendo a los clientes explorar las opciones del menú y ponerse en contacto con el restaurante a través de un formulario.

## Características

- **Navegación fluida y responsiva:** La aplicación cuenta con un menú de navegación que se adapta a diferentes tamaños de pantalla, convirtiéndose en un menú hamburguesa en dispositivos móviles.
- **Catálogo de productos:** Los productos del restaurante se gestionan en Firebase y se muestran en una grilla responsiva. Las tarjetas de productos se ajustan a diferentes resoluciones para garantizar una presentación limpia y accesible.
- **Formulario de contacto:** Los clientes pueden enviar mensajes directamente al restaurante a través de un formulario de contacto conectado a un correo electrónico mediante EmailJS.
- **Diseño moderno:** Utilizando CSS y algo de Bootstrap, la aplicación tiene un diseño atractivo y profesional que se adapta bien a dispositivos móviles y de escritorio.

## Tecnologías utilizadas

- **React:** Biblioteca de JavaScript para la construcción de interfaces de usuario interactivas.
- **CSS & Bootstrap:** Para el diseño y la estilización de la aplicación, logrando un aspecto limpio y moderno.
- **Firebase:** Utilizado como base de datos para almacenar y recuperar productos del catálogo de manera dinámica.
- **EmailJS:** Servicio utilizado para conectar el formulario de contacto con una dirección de correo electrónico.
- **Responsive Design:** La aplicación está diseñada para adaptarse a cualquier dispositivo, asegurando una experiencia de usuario coherente en diferentes tamaños de pantalla.

## Uso
1. **Navegación por la página:**

- La barra de navegación en la parte superior de la página te permite acceder fácilmente a las diferentes secciones del sitio: Bienvenido, Catálogo y Contacto.
- En dispositivos móviles, la barra de navegación se convierte en un menú hamburguesa, que puedes abrir para ver y seleccionar las opciones.

2. **Explorar el Catálogo de Productos:**

- La sección del catálogo te muestra una lista de productos (pizzas) del restaurante en un formato de grilla. Cada tarjeta de producto incluye una imagen, una breve descripción y el precio.

- Puedes ver más detalles de cada pizza simplemente explorando las tarjetas en la grilla. Las tarjetas están organizadas para que sean fáciles de navegar en cualquier tamaño de pantalla.

3. **Formulario de Contacto:**

- Si deseas ponerte en contacto con el restaurante, navega a la sección de contacto.

- Rellena tu nombre, correo electrónico y mensaje en el formulario de contacto.

- Haz clic en "Enviar" para enviar tu mensaje. El formulario está conectado a un servicio de correo (EmailJS) que envía tu mensaje directamente al restaurante.

- Recibirás una confirmación en pantalla una vez que tu mensaje haya sido enviado con éxito.

4. **Responsividad:**

- La aplicación está diseñada para ser completamente responsiva, lo que significa que se adapta y funciona bien en dispositivos de escritorio, tabletas y móviles.
 
- Disfrutarás de una experiencia de usuario fluida, sin importar el dispositivo que utilices.

## Instalación

### Prerrequisitos

- **Node.js**: Necesario para ejecutar la aplicación localmente.
- **npm**: Administrador de paquetes incluido con Node.js.

### Clonación del Repositorio


1. Clona el repositorio desde GitHub:
   ```bash
   git clone https://github.com/GaloMartinez/gastronomic-restaurant.git
   
2. Navega al directorio del proyecto:
   ```bash
   cd gastronomic-restaurant

### Instalación de dependencias


1. Instala las dependencias necesarias:
   ```bash
   npm install

### Ejecución del Proyecto


1. Inicia el servidor de desarrollo:
   ```bash
   npm start

2. Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.


### Despliegue

El proyecto puede ser desplegado utilizando GitHub Pages:

1. Ejecuta el siguiente comando para desplegar.

```bash
npm run deploy

```

2. La aplicación estará disponible en GitHub Pages bajo la URL configurada en el repositorio.

### Contribuir

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio:

- Haz clic en el botón "Fork" en la parte superior derecha de la página del repositorio en GitHub.

2. Crea una nueva rama

- En tu máquina local, crea una nueva rama para tus cambios
```
 git checkout -b feature/nueva-caracteristica

 ```

3. Realiza tus cambios y haz commit.
- Realiza los cambios que desees en tu copia del proyecto y guarda los archivos.
- Luego, haz commit de tus cambios
```

git commit -m "Descripción de la nueva característica"

```

4. Sube tus cambios a la rama 
- Sube los cambios a tu fork en GitHub
```
git push origin feature/nueva-caracteristica
```



5. Abre un Pull Request en GitHub.
- Ve a la página de tu fork en GitHub y haz clic en el botón "New Pull Request" para solicitar que tus cambios sean integrados en el proyecto original.


### Licencia
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo **LICENSE** para más detalles.

### Autor
Galo Martinez - GitHub