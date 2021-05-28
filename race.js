function addPlayer(id , name) {
    let carHtml=`<tr>
    <td align="left" width="80%" style="vertical-align: bottom;">
        <div class="progressBar" style="padding-left: 538px;" id="${id}">
            <div class="avatar avatar-self">
                <div class="nameContainer">
                    <div class="lblName" style="white-space: nowrap;">${name}</div><span
                        class="lblUsername">(you)</span>
                </div><img
                    src="https://play.typeracer.com/com.typeracer.redesign.Redesign/clear.cache.gif"
                    style="width:58px;height:24px;background:url(https://play.typeracer.com/com.typeracer.redesign.Redesign/335AE846C4E0C3647FC3331F512A1E25.cache.png) no-repeat -638px 0px;"
                    border="0">
            </div>
        </div>
    </td>
    <td align="left" width="20%" style="vertical-align: top;">
        <div class="rankPanel">
            <div class="rank" style="white-space: normal;">2nd Place.</div>
            <div class="rankPanelWpm rankPanelWpm-self" style="white-space: normal;">35 wpm
            </div>
        </div>
    </td>
</tr>`
    
document.getElementById('tbody').innerHTML+=carHtml
}
function moveCar(id,positionPercentage){
    document.getElementById(id).style.paddingLeft=String(positionPercentage)+'%';
}
function carLeft(){
    currentPadding=document.getElementsByClassName('progressBar')[0].style.paddingLeft;
    currentPadding=+currentPadding.slice(0,currentPadding.length-2)
    currentPadding-=5;

document.getElementsByClassName('progressBar')[0].style.paddingLeft=String(currentPadding)+'px'
}
function carRight(){
    currentPadding=document.getElementsByClassName('progressBar')[0].style.paddingLeft;
    currentPadding=+currentPadding.slice(0,currentPadding.length-2)
    currentPadding+=5;

document.getElementsByClassName('progressBar')[0].style.paddingLeft=String(currentPadding)+'px'
}