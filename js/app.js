
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

function opengo2 (){
    const moneyblokopen=document.getElementById('moneyblokopen')
if(moneyblokopen.style.display==="none"|| moneyblokopen.style.display===""){
    moneyblokopen.style.display="block"
}else{
    moneyblokopen.style.display="none"  
}
}
function opengo (){
    const moneyblokopen2=document.getElementById('moneyblokopen2')
if(moneyblokopen2.style.display==="none"|| moneyblokopen2.style.display===""){
    moneyblokopen2.style.display="block"
}else{
    moneyblokopen2.style.display="none"  
}
}

