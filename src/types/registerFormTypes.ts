export interface FormFields  {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  export type RegisterModalTypes = {
    openModal: boolean,
    setOpenModal: (value: boolean) => void
  }