export interface Customer {
  id: number;
  name: string;
  surname: string;
  account: Account;
}

export interface Account {
  id: number;
  balance: number;
  customerId: number;
  sentTransactions: SentTransaction[];
  receivedTransactions: SentTransaction[];
}

export interface SentTransaction {
  id: number;
  createdDate: string;
  amount: number;
  senderId: number;
  receiverId: number;
}

export interface UpdateCustomer {
  id: number;
  name: string;
  surname: string;
}

export interface CreateCustomer {
  name: string;
  surname: string;
}