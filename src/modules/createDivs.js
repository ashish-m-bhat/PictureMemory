const createDivs = tilesArray =>{
    const wrapperDiv = document.querySelector('#wrapperDiv');
    for(let i=1;i<=tilesArray.length;i++){
      const innerDiv = document.createElement('div');
      innerDiv.setAttribute('id', tilesArray[i-1].id);
      innerDiv.setAttribute('class', tilesArray[i-1].class);
      innerDiv.style.cssText=`
                        background-color:#67cdfc;
                        height:27%;
                        width:16%;
                        margin-top:2vh;
                        margin-right:3vw;
                        opacity:0.1;
                        box-shadow: #005780 0px 22px 70px 4px;
                        border-radius:10%`;
      wrapperDiv.append(innerDiv);
    }
  }

  export default createDivs;