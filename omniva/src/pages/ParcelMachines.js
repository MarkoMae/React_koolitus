
                        //omadused kaudu saan infot kätte mida mulle saadetakse
function ParcelMachines(omadused) {
    return (
<div>
<br />
      <select>
        {omadused.automaadid
        .filter(üksEse => üksEse[omadused.filtreerimiseAlus] === omadused.väärtus)
        .map(üksEse => 
          <option>
          {üksEse.NAME}
          </option>
          )}
      </select>
      <br />
      <button>Vali automaat</button>
      </div>

    
    )
    }

export default ParcelMachines;