import test from "./test-script";
const loader = (async ()=>{
    let t = await test;
    return {t,};
})()

export default loader;