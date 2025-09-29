# Proyecto Express Frontend

## ver figma
```
https://www.figma.com/design/jsS0NEQy9LwGIH0bcBdQf1/SangarFlix?node-id=0-1&t=vUQFvwqECLw4Na6M-1

```
 
## SangarFlix
Este proyecto es el frontend de una aplicación Full Stack desarrollada con HTML, CSS y JavaScript,
diseñada para conectarse con un backend en Express. 

Permite la gestión de usuarios y películas, mostrando listados de peliuclas, poder calificar y dar sus reseñas y detalles y para admin permitiendo operaciones como añadir, actualizar o eliminar elementos.


 # Estructura del Proyecto
 ## La organización del proyecto es la siguiente:
```
ProyectoExpressFront_QuinonezSantiagoAcevedoEdgar/
│
├── html/
│   ├── adminPanel.hmtl          
│   ├── home.html          
│   ├── register.html        
│   └── admin.html           
│
├── imagenes/
│   ├── fondo_inicio.png         
│   └── señor_de_los_anillos.png             
│
├── scripts/
│   ├── adminPanel.js               
│   ├── home.js               
│   ├── index.js               
│   └── register.js            
│
├── styles/
│   ├── adminPanel.css            
│   ├── home.css            
│   ├── index.css            
│   └── register.css      
│
└── README.md               
```
## Funcionalidades
Autenticación de usuarios: 
register, index.html donde esta el login de ambas partes

Listado de películas: Muestra todas las películas disponibles (limitadas por género si se desea).

Detalle de película: Permite ver información específica de cada película.

Panel de administración: Permite agregar, actualizar o eliminar usuarios y películas.

Filtrado y búsqueda: Filtra películas por género y busca por nombre.

## Tecnologías
## Frontend: HTML, CSS, JavaScript puro

## Backend: Express.js (debe ejecutarse en paralelo)


Consumo de API: El frontend interactúa con un backend mediante fetch para obtener datos de películas y usuarios.


## Cómo usar
Clonar el repositorio:
git clone 
```
https://github.com/acevedoleonardo/ProyectoExpressFront_QuinonezSantiagoAcevedoEdgar.git

```


Abrir el proyecto en Visual Studio Code.

Iniciar un servidor local (puedes usar Live Server para HTML) para visualizar la aplicación.
Asegurarse de que el backend esté corriendo para que la autenticación y los datos funcionen correctamente.



## Autores
Quiñonez Santiago y 
Acevedo Edgar
