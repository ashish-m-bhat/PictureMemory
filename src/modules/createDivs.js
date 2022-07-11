const createDivs = tilesArray =>{
    const wrapperDiv = document.querySelector('#wrapperDiv');
    for(let i=1;i<=tilesArray.length;i++){
      const innerDiv = document.createElement('div');
      innerDiv.setAttribute('id', tilesArray[i-1].id);
      innerDiv.setAttribute('class', tilesArray[i-1].class);
      innerDiv.style.cssText=`
                        background-color:#67cdfc;
                        height:25%;
                        width:10%;
                        margin:6vw;
                        margin-top:2vh;
                        margin-bottom:2vh;
                        cursor:pointer;
                        box-shadow: #005780 0px 22px 70px 4px;
                        border-radius:10%`;
      wrapperDiv.append(innerDiv);
    }
  }

  export default createDivs;