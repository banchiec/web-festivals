# web-festivals

# web-festivals
##### Lista de endPoints

 id | Method | Path | Description 
----|--------|------|-----------------------
1| get | / | Página de inicio
2|get | /registro | Muestra el formulario para crear un usuario
3|post|/registro| Guarda la informacion y te redirige a la página principal
4|get|/iniciar-sesion|Muestra el formulario para iniciar sesión
5|post|/iniciar-sesion| Envia datos y redirige al listado de festivales
6|get|/usuario/:id| Muestra el perfil del usuario, accede todos los usuarios
7|get|/usuario/editar/:id|Muestra el formulario del perfil del usuario para editar, accede todos los usuarios
8|post|/usuario/editar/:id| Guarda la informacion editada del usuario y te redirige al perfil del usuario, accede usuario y admin
9|get|/usuarios| Muestra lista de usuarios, acceden los usuarios
10|post|/usuario/eliminar/:id| Elimina usuario, redirige al listado de usuarios, acceso solo para admin
11|get|/festivales| Muestra listado de festivales
12|get|/festival/:id| Muestra los detalles del festival
13|get|/festival/crear| Muestra formulario para crear un festival, acceso solo admin
14|post|/festival/crear| Guarda la infomación del festival y redirige al listado del festivales
15|get|/festival/editar/:id| Muesta el formulario con la informacion del festival, accede admin
16|post|/festival/editar/:id| Guarda la informacion editada del festival y te redirige al perfil del festival, accede admin
17|post|/festival/eliminar/:id| Eliminamos y redirigimos al listado de festivales, acceso admin
