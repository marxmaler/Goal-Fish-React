import { Schema, model } from "mongoose";
import { IGoal } from "../interfaces/interfaces";

const goalSchema = new Schema<IGoal>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  termStart: { type: Date, required: true },
  termEnd: { type: Date, required: true },
  subs: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubGoal",
    },
  ],
  point: { type: Number, default: 0, required: true },
});

const Goal = model("Goal", goalSchema);
export default Goal;
