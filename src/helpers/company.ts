export interface Address {
  city: string;
  street: string;
  build_number: string;
  floor: string;
}

export interface Phone {
  full: string;
  short: string;
}

export interface Contacts {
  phone: Phone;
  viber: string;
  email: string;
}

export interface Workdays {
  from: string;
  to: string;
}

export interface Weekend {
  from: string;
  to: string;
}

export interface WorkTime {
  workdays: Workdays;
  weekend: Weekend;
}

export interface ICompany {
  name: string;
  address: Address;
  contacts: Contacts;
  sign: string;
  work_time: WorkTime;
}

export const company: ICompany = {
  name: 'FOX PHOTO',
  address: {
    city: 'Пермь',
    street: 'ул. Пушкина',
    build_number: '66',
    floor: '1',
  },
  contacts: {
    phone: {
      full: '+ 7 (342) 2 474 222',
      short: '(342) 247-4-222',
    },
    viber: '+7 (982) 452 50 60',
    email: 'fox-photo@mail.ru',
  },
  sign: 'вывеска «Фото, ксерокс»',
  work_time: {
    workdays: {
      from: '11.00',
      to: '20.00',
    },
    weekend: {
      from: '11.00',
      to: '18.00',
    },
  },
};
