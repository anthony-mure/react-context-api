import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

const BudgetProvider = ({children}) =>{

  const[ budgetMode, setBudgetMode ] = useState(false);
  
  const value ={
    budgetMode,
    setBudgetMode
  };

  return(
    <BudgetContext.Provider value={value}>
      {children}
    </BudgetContext.Provider>
  )

};

