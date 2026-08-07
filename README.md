Primero debemos hacer el tutorial 11 NodeJS.

Seguidamente comenzamos a reestructurar el código en pequeños fragmentos que serán de utilidad en este nuevo tutorial, nada fuera
de lo común, agregamos clases, etc. para luego poder implementar una clase .env la cual contendrá las respectivas contraseñas de nuestra
base de datos, stripe, etc. Luego localmente probamos nuestro servidor utilizando el .env, si todo está correcto podemos seguir avanzando
a utilizar el thunder/postman para poder probar nuestros endpoints y ver que todo este funcionando correctamente.
Una vez ya comprobado que todo está bien, proseguimos a utilizar render para corroborar que todo este subido de la mejor manera en la red.

Ahora haremos una autenticación utilizando el respectivo JWT, para ello debemos configurar usuarios
utilizando los endpoints de manera local para corroborar que todo esté bien. Luego debemos subirlo a la web para poder corroborar
que todo esta realmente subido y estructurado de la mejor manera para la practica utilizando NEON, RENDER, STRIPE (en el cual sino se tiene
cuidado puede llegar a presentar muchas molestias como en mi caso al momento de utilizar los webhooks), GITHUB.

Utilizando las respectivas configuraciones podemos utilizar el stripe con render para que la página este subida a la web y deje de funcionar
solamente en local, de esa manera podemos hacer las respectivas pruebas de cobros y ver el historial, de esa manera podemos comprobar que si
está bien implementado todo, tanto el JWT con render y stripe.


https://practicaenclase1.onrender.com/
https://practicaenclase1.onrender.com/api/stripe/webhook
https://practicaenclase1.onrender.com/api/pago/crear-sesion
