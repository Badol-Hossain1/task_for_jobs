

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
   menuList.style.background = "white"
       menuList.style.maxHeight = "254px"
      
      
    }
    else{
        menuList.style.maxHeight = "0px"
          menuList.style.background = ""
       
    }
}


