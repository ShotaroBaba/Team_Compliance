var employmentObject = {
  "Clerks - Private Sector": 
    [ ["Casual", "Full Time", "Part Time", "Salaried", "Full Time Shift Worker"],["Level 1", "Level 2", "Level 3"]],
  "General Retail Industry": 
    [ ["Apprentice", "Casual", "Full Time", "Part Time", "Salaried" ],["Level 1", "Level 2", "Level 3", "Level 4"]],
  "Hospitality Industry": 
    [ ["Apprentice", "Casual", "Full Time", "Part Time", "Salaried" ],["Level 1", "Level 2", "Level 3", "Level Sicklad"]],
  "Registered and Licensed Clubs": 
    [ ["Apprentice", "Casual", "Full Time", "Part Time", "Salaried" ],["Level 1", "Level 2", "Level 3", "Level 5"]],
  "Fast Food Industry": 
    [ ["Casual", "Full Time", "Part Time", "Salaried" ],["Level 1", "Level 2", "Level 3", "Level Gross"]],
}
window.onload = function () {
  var awardSel = document.getElementById("modernAward"),
      typeSel = document.getElementById("typeEmployment"),
      levelSel = document.getElementById("levelEmployment");
      // console.log(employmentObject);


  for (var award in employmentObject) {
      // this.console.log(award);
      awardSel.options[awardSel.options.length] = new Option(award, award);
  }

  awardSel.onchange = function () {
      console.log("Hello");
      typeSel.length = 1; // remove all options bar first
      if (this.selectedIndex < 1) return; // done   
      for (var type in employmentObject[this[0].value]) {
          typeSel.options[typeSel.options.length] = new Option(type, type);
      }
  }

  
  awardSel.onchange = function () {
    levelSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done   
    for (var level in employmentObject[this[1].value]) {
        levelSel.options[levelSel.options.length] = new Option(level, level);
    }
  }

  
}