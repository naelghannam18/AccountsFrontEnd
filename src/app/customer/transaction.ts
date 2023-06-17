export interface Transaction {
    amount: number;
    senderId: number;
    receiverId: number;
  }

  export interface TableTransaction extends Transaction {
    id: number;
  }

  export interface Account{
    customerId: number;
    initialCredit: number;
  }