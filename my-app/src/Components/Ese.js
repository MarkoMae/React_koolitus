


function Ese(omadused) {
    return (<div>
        <div>Pealkiri: {omadused.nimetus}</div>
        <div>Hind: {omadused.Hind}</div>
        <div>Kategooria: {omadused.Kategooria}</div>
        {omadused.pilt && <div><img className="item-image" src={omadused.pilt} alt="" /><br/></div>}
        <button>Lisa Ostukorvi</button>
   <br></br><br></br>

    </div>)

}

export default Ese;