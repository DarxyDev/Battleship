function shipFactory(name, length){
    const _name = name;
    const _length = length;
    let _hits = 0;
    let ship = {
        get:{
            name: ()=>{return _name},
            length: ()=>{return _length},
            hits:()=>{return _hits}
        },
        hit:()=>{_hits++;},
        isSunk:()=>{return (_hits >= _length)}
    }
    return ship;
}

export {shipFactory};