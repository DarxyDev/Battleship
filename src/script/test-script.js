const test = (() => {
    return new Promise(resolve => {
        let div = document.getElementById('loading-scene');

        function setBgColor(color) {
            div.style.backgroundColor = color;
        }
        let divArr = [];
        async function doWork(iterations) {
            return new Promise(resolve => {
                setTimeout(()=>{
                    for (let i = 0; i < iterations; i++) {
                        let element = document.createElement('div');
                        element.textContent = Math.round(Math.sqrt(Math.random()));
                        divArr.push(element);
                    }
                    resolve(divArr);
                },0)
            })

        }
        function printWork() {
            console.log(divArr);
        }

        return resolve({ setBgColor, doWork, printWork })
    })
})()

export default test;