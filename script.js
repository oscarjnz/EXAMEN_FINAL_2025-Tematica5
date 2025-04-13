let ecuaciones_exponenciales = [];
let casos_validos = 0;
let casos_invalidos = 0;

function createInputFields() {
    const groupCount = document.getElementById('groupCount').value;
    const container = document.getElementById('inputFieldsContainer');
    container.innerHTML = '';

    for (let i = 0; i < groupCount; i++) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'input-group';
        groupDiv.innerHTML = `<h3>Group #${i + 1}</h3>
            <label>Num 1:</label><input type="number" class="num" required>
            <label>Num 2:</label><input type="number" class="num" required>
            <label>Num 3:</label><input type="number" class="num" required>
            <label>Num 4:</label><input type="number" class="num" required>
            <label>Num 5:</label><input type="number" class="num" required>
            <label>Num 6:</label><input type="number" class="num" required>`;
        container.appendChild(groupDiv);
    }
}

function encontrar_exponente_iterativa(base, resultado) {
    let exponente = 0;
    while (Math.pow(base, exponente) < resultado) {
        exponente++;
    }
    return Math.pow(base, exponente) === resultado ? exponente : null;
}

function encontrar_exponente_recursiva(base, resultado, exponente = 0) {
    if (Math.pow(base, exponente) === resultado) {
        return exponente;
    } else if (Math.pow(base, exponente) > resultado) {
        return null;
    } else {
        return encontrar_exponente_recursiva(base, resultado, exponente + 1);
    }
}

function bubble_sort(lista) {
    const n = lista.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
            }
        }
    }
    return lista;
}

function busqueda_binaria(lista_ordenada, valor) {
    let izquierda = 0;
    let derecha = lista_ordenada.length - 1;
    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);
        if (lista_ordenada[medio] === valor) {
            return medio;
        } else if (lista_ordenada[medio] < valor) {
            izquierda = medio + 1;
        } else {
            derecha = medio - 1;
        }
    }
    return -1;
}

function processGroups() {
    const numInputs = document.querySelectorAll('.num');
    const groups = [];
    for (let i = 0; i < numInputs.length; i += 6) {
        const group = Array.from(numInputs).slice(i, i + 6).map(input => parseInt(input.value));
        groups.push(group);
    }

    ecuaciones_exponenciales = [];
    casos_validos = 0;
    casos_invalidos = 0;

    groups.forEach((grupo, index) => {
        const [num1, num2, num3, num4, num5, num6] = grupo;
        const suma1 = num1 + num2;
        const suma2 = num3 + num4;
        const suma3 = num5 + num6;

        if (suma1 === 2 * suma2 - suma3) {
            casos_validos++;
            const base = num1;
            const resultado = num2;
            let exponente = encontrar_exponente_iterativa(base, resultado);

            if (exponente === null) {
                exponente = encontrar_exponente_recursiva(base, resultado);
            }

            if (exponente !== null) {
                const ecuacion = `${base}^${exponente} = ${resultado}`;
                ecuaciones_exponenciales.push(ecuacion);
            }
        } else {
            casos_invalidos++;
        }
    });

    displayResults();
}

function displayResults() {
    const output = document.getElementById('output');
    output.innerHTML = '';

    output.innerHTML += `<h3>Valid Exponential Equations:</h3>`;
    ecuaciones_exponenciales.forEach(eq => {
        output.innerHTML += `<p>${eq}</p>`;
    });

    const todos_resultados = ecuaciones_exponenciales.map(eq => {
        const resultado = eq.split(' = ')[1];
        return parseInt(resultado);
    });

    const todos_ordenados = bubble_sort(todos_resultados.slice());
    output.innerHTML += `<h3>Sorted Results:</h3><p>${todos_ordenados.join(', ')}</p>`;

    const valor_buscado = prompt("Enter a number to search:");
    const indice = busqueda_binaria(todos_ordenados, parseInt(valor_buscado));
    if (indice !== -1) {
        output.innerHTML += `<h3>Search Result:</h3><p>Value found at position ${indice} in the sorted array.</p>`;
    } else {
        output.innerHTML += `<h3>Search Result:</h3><p>Value not found in the array.</p>`;
    }

    output.innerHTML += `<h3>Complexity:</h3>
        <p>Binary Search: Time = O(log n), Space = O(1)</p>
        <p>Bubble Sort: Time = O(n^2), Space = O(1)</p>
        <p>Exponent Search (iterative/recursive): Time = O(log result), Space = O(1) / O(n) recursive</p>`;

    output.innerHTML += `<h3>Final Statistics:</h3>
        <p>Valid Cases: ${casos_validos}</p>
        <p>Invalid Cases: ${casos_invalidos}</p>`;
}
