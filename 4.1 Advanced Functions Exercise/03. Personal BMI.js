function personalBMI(name, age, weight, height) {
  let bim =   Math.round( weight / Math.pow(height / 100,2))
  let status = ''
  
  bim < 18.5 ? status = 'underweight' :  bim < 25 ? status = 'normal' :  bim < 30 ? status = 'overweight' :  status = 'obese' 
  
  let obj = { name, personalInfo: {age, weight, height,  }, BMI : bim, status: status }
        
      if (status === 'obese') {
         obj['recommendation'] =  'admission required'
      } 
  //console.log(obj);
  return obj
  }

  //personalBMI('Honey Boo Boo', 9, 57, 137)