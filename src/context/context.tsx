import React, { createContext, PropsWithChildren, useState } from 'react';

import { ICompany, company } from '../helpers/company';

const defaultCtx = {
  company,
};

export const FoxContext = createContext(defaultCtx);

const FoxContextProvider = (props: PropsWithChildren): JSX.Element => {
  const [company, setCompany] = useState<ICompany>(defaultCtx.company);

  const contextValue = {
    company,
  };

  return (
    <FoxContext.Provider value={contextValue}>
      {props.children}
    </FoxContext.Provider>
  );
};

export default FoxContextProvider;
