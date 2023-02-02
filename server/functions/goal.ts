import { Types } from "mongoose";
import { IGoal } from "../interfaces/interfaces";
import Goal from "../models/Goal";
import { mmdd } from "./time";

export const sortTerms = async (goal: IGoal | null, goalType: string) => {
  const range =
    goalType == "daily"
      ? 7
      : goalType == "weekly"
      ? 4
      : goalType == "monthly"
      ? 3
      : 1;
  let termStart = "";
  let termEnd = "";
  let goalTerms: string[] = [];
  if (goal) {
    goalTerms = [`${mmdd(goal.termStart)}~${mmdd(goal.termEnd)}`];
    goalTerms.length > range && (goalTerms = goalTerms.slice(0, range));
    goalTerms = goalTerms.reverse();
    termStart = mmdd(goal.termStart);
    termEnd = mmdd(goal.termEnd);
  }

  return {
    termStart,
    termEnd,
    goalTerms,
  };
};

export const calcAvg = async (
  goal: IGoal | null,
  userId: Types.ObjectId | undefined,
  goalType: string
) => {
  const range =
    goalType == "daily"
      ? 7
      : goalType == "weekly"
      ? 4
      : goalType == "monthly"
      ? 3
      : 1;

  let pointTotal = 0;
  let pointAvg = 0;
  let prevGoals = null;
  let pointArr: number[] = [];

  if (goal) {
    pointArr = [goal.point];

    prevGoals = await Goal.find({
      owner: userId,
      //   termStart: {},
      termEnd: { $lt: goal.termEnd },
    }).sort({ termEnd: -1 });

    prevGoals &&
      prevGoals.forEach((goal) => {
        pointTotal += goal.point;
        pointArr.push(goal.point);
      });

    if (pointTotal !== 0) pointAvg = pointTotal / prevGoals.length;

    pointArr.length > range && (pointArr = pointArr.slice(0, range));

    pointArr = pointArr.reverse();
  }

  return {
    pointAvg,
    pointArr,
  };
};
