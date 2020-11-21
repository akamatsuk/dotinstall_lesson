'use strict'

{
    function drow() {
        const canvas = document.querySelector('canvas');
        if (typeof canvas.getContext === 'undefined'){
            return;
        }
        const ctx = canvas.getContext('2d');
        // ctx.fillRect(x, y, width, height)
        ctx.fillStyle = 'pink';
        ctx.fillRect(50, 50, 50, 50);
        ctx.strokeRect(50, 50, 50, 50); 
        ctx.fillStyle = 'skyblue'; 
        tx.strokeStyle = '#00b';
        ctx.fillRect(70, 70, 50, 50);
        ctx.lineWidth = 8;
        ctx.strokeRect(70, 70, 50, 50);
    }
    drow();
}