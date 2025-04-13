# 📈 Exponential Equation Finder

**Temática 5 - Análisis y Diseño de Algoritmos**  
Proyecto Web desarrollado por **Oscar O. Jiménez Peguero - 24-0531**

---

## 🧠 Descripción

**Exponential Equation Finder** es una aplicación interactiva en la web que permite ingresar múltiples grupos de números, procesarlos mediante lógica condicional y algoritmos de búsqueda y ordenamiento, y detectar **ecuaciones exponenciales válidas** en base a una condición aritmética. 

El proyecto aplica conceptos clave como:
- Búsqueda de exponentes (iterativa y recursiva)
- Ordenamiento (Bubble Sort)
- Búsqueda binaria
- Análisis de complejidad algorítmica

---

## ⚙️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)

---

## 🚀 Cómo usar

1. Abre el archivo `index.html` en tu navegador preferido.
2. Ingresa la cantidad de grupos de números (cada grupo contiene 6 valores).
3. Haz clic en **"Create Input Fields"** y completa los campos con números enteros.
4. Pulsa **"Submit Groups"** para procesar los datos.
5. Observa los resultados:
   - Ecuaciones exponenciales válidas encontradas
   - Resultados ordenados
   - Opción para hacer búsqueda binaria de un número
   - Complejidad algorítmica de cada proceso
   - Estadísticas finales

---

## 📊 Estructura Interna del Código

- **Algoritmos implementados**:
  - `encontrar_exponente_iterativa(base, resultado)`
  - `encontrar_exponente_recursiva(base, resultado)`
  - `bubble_sort(lista)`
  - `busqueda_binaria(lista, valor)`
- **Condición lógica para ecuaciones válidas**:  
  `num1 + num2 === 2 * (num3 + num4) - (num5 + num6)`

---

## 🧪 Ejemplo de ejecución

```text
Grupo: [2, 8, 1, 1, 1, 0]
→ Condición válida.
→ Se genera: 2^3 = 8

Ordenados: 8  
Buscar: 8  
→ Encontrado en posición 0.
