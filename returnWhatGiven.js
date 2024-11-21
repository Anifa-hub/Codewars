function getDrinkByProfession(param){
    switch(param){
      case "Jabroni":
        return "Patron Tequila";
        break;
      case "School Counselor":
        return "Anything with Alcohol";
        break;
      case "Programmer":
        return "Hipster Craft Beer";
        break;
      case "Bike Gang Member":
        return "Moonshine";
        break;
      case "Politician":
        return "Your tax dollars";
        break;
      case "Rapper":
        return "Cristal";
        break;
      default:
        return "Beer"
           
    }
  
  }
  console.log(getDrinkByProfession("Jabroni")) 