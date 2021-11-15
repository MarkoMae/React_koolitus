import Ese from "./Ese";

function EsemeteList(omadused) {
    return (<div>
        {omadused.esemed.map(üksElement => ( 
            <Ese 
                nimetus={üksElement.nimetus} 
                Hind={üksElement.price} 
                Kategooria={üksElement.Kategooria} 
                pilt={üksElement.pilt} 
                /> ))}
    </div>)
}

export default EsemeteList;