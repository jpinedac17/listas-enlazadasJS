# 📚 Diferencias entre Java y Node.js (JavaScript)

En este proyecto se implementaron estructuras de datos (listas enlazadas simples y dobles) originalmente en Java y luego se adaptaron a Node.js (JavaScript). Durante este proceso se identificaron varias diferencias importantes:

---

## 🔹 1. Tipado de datos
- **Java:** Lenguaje fuertemente tipado, se deben declarar los tipos.
- **JavaScript:** Tipado dinámico, no se declaran tipos.

```java
int count = 0;
SimpleNode<T> current = head;
```

```js
let count = 0;
let current = this.head;
```

---

## 🔹 2. Uso de genéricos
- **Java:** Usa genéricos (`<T>`) para definir tipos.
- **JavaScript:** No usa genéricos de forma nativa.

```java
SimpleNode<T>
```

```js
class Node {
  constructor(value) { ... }
}
```

---

## 🔹 3. Acceso a datos (Getters/Setters vs propiedades)
- **Java:** Uso común de métodos (`getNext()`, `setNext()`).
- **JavaScript:** Acceso directo a propiedades.

```java
current.getNext();
current.setNext(null);
```

```js
current.next;
current.next = null;
```

---

## 🔹 4. Uso de `this`
- **Java:** Puede omitirse en algunos casos.
- **JavaScript:** Es obligatorio para acceder a atributos de la clase.

```java
head = null;
```

```js
this.head = null;
```

---

## 🔹 5. Comparaciones
- **Java:** Uso de `.equals()` para objetos.
- **JavaScript:** Uso de `===` para comparación estricta.

```java
value1.equals(value2);
```

```js
value1 === value2;
```

---

## 🔹 6. Manejo de memoria
- **Java:** Manejo mediante la JVM y garbage collector.
- **JavaScript:** También usa garbage collector, por lo que no siempre es necesario liberar memoria manualmente.

---

## 🔹 7. Sintaxis de condiciones
- **Java:** Usa `!=`
- **JavaScript:** Se recomienda `!==` (comparación estricta)

```java
while (current != null)
```

```js
while (current !== null)
```

---

## 🔹 8. Modularización
- **Java:** Usa paquetes y clases.
- **Node.js:** Usa módulos (`module.exports` y `require`)

```js
module.exports = DoublyNode;
```

---

## 🧠 Conclusión

Aunque la lógica de las estructuras de datos se mantiene igual entre Java y JavaScript, existen diferencias importantes en:

- Tipado
- Acceso a datos
- Sintaxis
- Manejo de memoria

Java es más estricto y estructurado, mientras que JavaScript es más flexible y dinámico, lo que simplifica algunas implementaciones pero requiere mayor cuidado en detalles como comparaciones y uso de propiedades.