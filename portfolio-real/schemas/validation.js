export const Rulemin = min => ({

  validate: value => value >= min,
  
  max: maxValue => {
    return {
      validate: value => value <= maxValue 
    }
  }

})