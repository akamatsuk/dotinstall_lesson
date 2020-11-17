'use strict';

{
    function createColumn(col) {
        const source = [];
        for (let i = 0; i < 15; i++) {
            // 1....15
            // source[i] = i + 1 + 15 * 0;
            // 16....30
            // source[i] = i + 1 + 15 * 1;
            // 31....45
            // source[i] = i + 1 + 15 * 2;
            source[i] = i + 1 + 15 * col;
        }

        const column = [];
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }

        return column;
    }

    function createColumns() {
        const colums = [];
        for (let i = 0; i < 5; i++) {
            colums[i] = createColumn(i);
        }
        colums[2][2] = 'Free';
        return colums;
    }

    // console.table(colums);

    function renderBingo(columns) {
        for (let row = 0; row < 5; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 5; col++) {
                const td = document.createElement('td');
                td.textContent = columns[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }

    const columns = createColumns();
    renderBingo(columns);
}