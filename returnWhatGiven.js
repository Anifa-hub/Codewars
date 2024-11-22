function getDrinkByProfession(param){
    switch(param.toLowerCase){
      case "jabroni":
        return "Patron Tequila";
        break;
      case "school counselor":
        return "Anything with Alcohol";
        break;
      case "Programmer":
        return "hipster craft beer";
        break;
      case "Bike Gang Member":
        return "moonshine";
        break;
      case "politician":
        return "Your tax dollars";
        break;
      case "rapper":
        return "Cristal";
        break;
      default:
        return "Beer"
           
    }
  
  }
  console.log(getDrinkByProfession("Jabroni")) 