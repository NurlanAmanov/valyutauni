
  
  
const mobilecedvel=document.getElementById('mobilecedvel')
const sifirla=document.getElementById('sifirla')
const cedvel1=document.getElementById('cedvel1')
let kod=''
function deyiscedvel1() {

    mobilecedvel.innerHTML = '';

    
    mobilecedvel.innerHTML = `
        <table  class="cedvel">
                                <thead>
                                    <tr>
                                        <th>
                                            Valyuta </th>
                                        <th>
                                            Alış </th>
                                        <th>
                                            Satış </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>USD</td>
                                        <td>1.6975 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                        <td>1.7025 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>EUR</td>
                                        <td>1.8598 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                        <td>1.9088 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>RUB</td>
                                        <td>0.0161 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                        <td>0.0204 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>GBP</td>
                                        <td>2.2016 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                        <td>2.2787 <span
                                                class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>`;
}
function deyiscedvel2() {

    mobilecedvel.innerHTML = '';

    
    mobilecedvel.innerHTML = `
        <table class="cedvel">
            <thead>
                <tr>
                    <th>Valyuta</th>
                    <th>Alış</th>
                    <th>Satış</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>USD</td>
                    <td>1.6900 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>1.7025 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
                <tr>
                    <td>EUR</td>
                    <td>1.8560 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>1.9144 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
                <tr>
                    <td>RUB</td>
                    <td>0.0166 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>0.0206 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
                <tr>
                    <td>GBP</td>
                    <td>2.2016 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>2.2686 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
            </tbody>
        </table>`;
}

function deyiscedvel3() {
   
    mobilecedvel.innerHTML = '';

    mobilecedvel.innerHTML = `
        <table class="cedvel">
            <thead>
                <tr>
                    <th>Valyuta</th>
                    <th>Alış</th>
                    <th>Satış</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>USD</td>
                    <td>1.6950 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>1.7150 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
                <tr>
                    <td>EUR</td>
                    <td>1.8600 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>1.9100 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
                <tr>
                    <td>RUB</td>
                    <td>0.0187 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>0.0195 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
                <tr>
                    <td>GBP</td>
                    <td>2.2100 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                    <td>2.2530 <span class="exchange__icon exchange__icon--orange icon icon--down exchange__icon--down"></span></td>
                </tr>
            </tbody>
        </table>`;
}
let data = {
    Valute: [
      { "Nominal": "1", "Name": "1 ABŞ dolları", "Value": "1.7", "_Code": "USD" },
      { "Nominal": "1", "Name": "1 Avro", "Value": "1.8843", "_Code": "EUR" },
      { "Nominal": "1", "Name": "1 İngiltərə funt sterlinqi", "Value": "2.2351", "_Code": "GBP" },
      { "Nominal": "1", "Name": "1 Rusiya rublu", "Value": "0.0191", "_Code": "RUB" },
      { "Nominal": "1", "Name": "1 Azərbaycan manatı", "Value": "1.0", "_Code": "AZN" }
    ]
  };
  
  let selectedCurrency1 = "USD";
  let selectedCurrency2 = "USD";
  
  function selectCurrency(currency, imgSrc, flagId, currencyId) {
    document.getElementById(flagId).src = imgSrc;
    document.getElementById(currencyId).textContent = currency;
    
    if (flagId === "selected-flag1") {
      selectedCurrency1 = currency;
    } else {
      selectedCurrency2 = currency;
    }
  
    calculateConversion();
  }
  
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  }
  
  function calculateConversion() {
    const input1Value = parseFloat(document.getElementById("input1").value) || 0;
    
    const currency1 = data.Valute.find(val => val._Code === selectedCurrency1);
    const currency2 = data.Valute.find(val => val._Code === selectedCurrency2);
    
    if (currency1 && currency2) {
      const conversionRate = currency1.Value / currency2.Value;
      const convertedValue = (input1Value * conversionRate)-0.02;
      
      document.getElementById("input2").value = convertedValue.toFixed(2);
    }
  }
  
