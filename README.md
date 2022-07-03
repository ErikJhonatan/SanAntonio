# San Antonio · Catálogo y carrito

Frontend de catálogo gastronómico y carrito de compras desarrollado con HTML, CSS y JavaScript.

## Alcance

Interfaz de catálogo gastronómico con categorías de comida y lógica de carrito: agregar productos, gestionar cantidades y calcular el total. Los archivos de `js/` contienen modelos de productos, carrito y catálogos por categoría.

## Estructura y uso

`index.html` es la entrada; `css/`, `images/`, `icons/` y `js/` contienen los recursos. Sirve la carpeta con un servidor estático, ya que el código utiliza módulos JavaScript.

## Estado

Proyecto frontend. La presencia del carrito no acredita un sistema de pagos ni una operación comercial en producción. No se ejecutaron pruebas durante esta revisión. Consulta `LICENSE` para la licencia.

## Cambios de comportamiento

Las cantidades deben ser enteros positivos y los precios valores finitos no negativos. Eliminar un producto inexistente no modifica el carrito. La identidad de los productos usa nombre y precio.
