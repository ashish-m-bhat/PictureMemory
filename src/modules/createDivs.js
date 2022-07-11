const createDivs = () =>{
    // Array to store the ids. 2 divs will share the same class names but all will have unique ids
    const idArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

    const wrapperDiv = document.querySelector('#wrapperDiv');
    for(let i=1;i<=idArray.length;i++){
      const innerDiv = document.createElement('div');
      innerDiv.setAttribute('id', idArray[i-1]);
      innerDiv.setAttribute('class', Math.ceil(i/2).toString());
      innerDiv.style.cssText="background-color:#67cdfc;height:25%;width:10%;margin:6vw;margin-top:2vh;margin-bottom:2vh;cursor:pointer;box-shadow: #005780 0px 22px 70px 4px;";
      wrapperDiv.append(innerDiv);
    }
  }

  export default createDivs;