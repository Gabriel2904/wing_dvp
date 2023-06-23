# wingo_dvp
#Proyecto wingo_dvp

## Clonar el proyecto

1. Abre una terminal y navega hasta la ubicación donde deseas clonar el proyecto.

2. Ejecuta el siguiente comando para clonar el repositorio:
    git clone https://github.com/Gabriel2904/wing_dvp.git


3. Una vez clonado el repositorio, navega hasta la carpeta del proyecto:

    cd wing_dvp


## Configuración

Antes de ejecutar las pruebas, asegúrate de tener instaladas las dependencias necesarias. Para hacerlo, sigue los siguientes pasos:

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Abre una terminal y navega hasta la carpeta del proyecto clonado.

3. Ejecuta el siguiente comando para instalar las dependencias:

    npm install


## Ejecutar las pruebas

Una vez que hayas clonado el proyecto y configurado las dependencias, puedes ejecutar las pruebas automatizadas utilizando Cypress. Sigue estos pasos:

1. Asegúrate de estar ubicado en la carpeta del proyecto en la terminal.

2. Ejecuta el siguiente comando para iniciar Cypress:

    npx cypress open


3. Se abrirá la interfaz de Cypress. Haz clic en el archivo "spec.cy.js" en la lista de archivos de prueba para ejecutarlo.

4. Cypress abrirá una nueva ventana del navegador y comenzará a ejecutar las pruebas automatizadas en el sitio web de Wingo.

## Notas adicionales

- Si deseas ejecutar las pruebas en modo de línea de comandos (headless), puedes utilizar el siguiente comando en lugar de `npx cypress open`:


