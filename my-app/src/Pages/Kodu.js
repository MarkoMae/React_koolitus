
import EsemeteList from "../Components/EsemeteList.js";


function Kodu() { //home == faili nimetus, erinev teistes failides
    function saaEsemed () {
        return [
            {nimetus:"Coca Cola", price: 2, Kategooria: "Coca", pilt: "https://www.eckeroline.ee/media/catalog/product/cache/495d6e4e3f99e93bf2e0de546068d9dd/c/o/coca_cola_zero_24-pack_8141_y2021.png"},
            {nimetus:"Fanta", price: 3, Kategooria: "Coca", pilt: "https://myfood.ee/wp-content/uploads/2021/03/fanta0.25.jpg"},
            {nimetus:"Sprite", price: 1.5, Kategooria: "Coca"},
            {nimetus:"Vitamin Well", price: 1.2, Kategooria: "Vesi"},
            {nimetus:"NOCCO", price: 3, Kategooria: "Energia"},
            ];
    }
    
    function nupuvajutus() {
        console.log("Väljalogimine brauseri konsooli");
    }

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
//https://www.w3schools.com/html/html_forms.asp

    //<form>
    //<label></label
    //<input />
    //</form>


    return(<div>
        <button>Järjesta A-Z</button>
        <button>Järjesta Z-A</button>
        <button>Järjesta Hind Kasvavalt</button>
        <button>Järjesta Hind Kahanevalt</button>
        <br/><br/>
        <button>Näita kodumaiseid</button>
        <button>Näita e-ainete vabu</button>
     

    <EsemeteList esemed={saaEsemed()} />

    
        
    
        
        {/* <Ese Hind="4$" nimetus="Coca Cola" Kategooria="Karastusjook" pilt="https://www.eckeroline.ee/media/catalog/product/cache/495d6e4e3f99e93bf2e0de546068d9dd/c/o/coca_cola_zero_24-pack_8141_y2021.png"></Ese>
        <Ese Hind="2$" nimetus="Fanta" Kategooria="Karastusjook" pilt="https://myfood.ee/wp-content/uploads/2021/03/fanta0.25.jpg"></Ese>
        <Ese Hind="25$" nimetus="Sprite" Kategooria="Karastusjook" ></Ese>
        <Ese Hind="2$" nimetus="Vitamin Well" Kategooria="Karastusjook" ></Ese>
        <Ese Hind="100$" nimetus="NOCCO" Kategooria="Karastusjook" ></Ese>
        <Ese Hind="2$" nimetus="Coca Cola Zero" Kategooria="Karastusjook" ></Ese> */}
    </div>);


}

export default Kodu; //home == faili nimetus, erinev teistes failides