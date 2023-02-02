import { Types } from "mongoose";

export interface IGoal {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  date: Date;
  termStart: Date;
  termEnd: Date;
  subs: Types.ObjectId[];
  point: number;
}

export interface ISubGoal {
  _id: Types.ObjectId;
  goal: Types.ObjectId;
  importance: string;
  content: string;
  useMeasure: boolean;
  measureName: string;
  eachAsIndepend: boolean;
  currentValue: number;
  targetValue: number;
  completed: boolean;
}

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  name: string;
  password: string;
  joinedWithSocial: boolean;
  quote: string;
  lang: string;
}
