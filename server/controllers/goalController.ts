import { Request, Response, NextFunction } from "express";
import { getToday } from "../functions/time";
import Goal from "../models/Goal";
import { calcAvg, sortTerms } from "../functions/goal";

export const hey = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hey, look who's here!");
};

export const getHome = async (req: Request, res: Response) => {
  const pageTitle = "Goal"; //req에서 url을 뽑아낸 뒤 어떤 goal인지 알아내어 pageTitle값 설정
  const goalType = "";
  const today = getToday();
  const userId = req.session.user?._id;
  const goal = await Goal.findOne({
    owner: userId,
    termStart: { $lte: new Date(today) }, //termStart가 오늘과 같거나 앞에 있는 goal을 찾습니다.
    termEnd: { $gte: new Date(today) }, //termEnd가 오늘과 같거나 나중에 있는 goal을 찾습니다.
  }).populate("subs");

  if (goal && goal.subs.length < 1) {
    await Goal.deleteOne({
      _id: goal._id,
    });
    return res.redirect("/");
  }

  const { termStart, termEnd, goalTerms } = await sortTerms(goal, goalType);
  const { pointAvg, pointArr } = await calcAvg(goal, userId, goalType);

  return res.render("currentGoal", {
    goal,
    pageTitle,
    termStart,
    termEnd,
    goalTerms,
    pointAvg,
    pointArr,
  }); //이제 render는 react 쪽에서 할거니까 수정해줘야 함.
};
