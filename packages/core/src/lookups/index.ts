import { Currency, EndRecurrenceBy, RecordDirection, RecordType } from './enums';

export type TimestampedEntity = {
  createdAt: Date;
}

export type Account = {
  id: string;
  name: string;
  index: number;
  accent: string;
  initialBalance: number;
} & TimestampedEntity;

export type CalculatedAccount = Omit<Account, 'intialBalance'> & {
  balance: number;
};

export type RecurringEntity = {
  startDate: Date;
  endToken?: Date | number;
  endTokenType: EndRecurrenceBy;
  cronExpr: string;
};

export type Transaction = {
  id: string;
  accountId: string;
  type: RecordType;
  category: number;
  amount: number;
  direction: RecordDirection;
  note?: string;
  labels?: string[];
  timestamp: number;

  isRecurringTransaction: boolean;
};

export type RecurringTransaction = {
  id: string;
  accountId: string;
  type: RecordType;
  category: number;
  amount: number;
  direction: RecordDirection;
  labels?: string[];
} & RecurringEntity;

export type Label = {
  id: string;
  value: string;
  accent: string;
};

export type Amount = {
  direction: RecordDirection;
  value: number;
  currency: Currency;
};

export type Category = {
  id: number;
  parent: number;
  logoId?: string;
  title: string;
  description?: string;
}

export type Budget = {
  id: string;
  title: string;
  categories: number[];
  labels: string[];
  amount: number;
  currency: Currency;
  notes?: string;
  isRecurring: boolean;
  startDate: Date;
  endDate?: Date;
};

export type ComputedBudget = Budget & {
  spent: number;
};

export type RecurringBudget = Budget & RecurringEntity;

export type Range<T> = {
  from: T;
  to: T;
};
