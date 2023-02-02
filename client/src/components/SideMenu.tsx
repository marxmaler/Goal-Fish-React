import { useRecoilValue } from "recoil";

const listItems = {
  goals: {
    ko: ["일간목표", "주간목표", "월간목표", "연간목표"],
    en: ["Daily", "Weekly", "Monthly", "Yearly"],
  },
  daily: {
    ko: ["오늘의 목표", "오늘의 목표 수정", "이전 목표 조회", "새 목표 추가"],
    en: ["Goal of today", "Edit Today's", "Previous Goal", "Add new Goal"],
  },
  weekly: {
    ko: [
      "이번 주 목표",
      "이번 주 목표 수정",
      "지난 주 목표 조회",
      "새 목표 추가",
    ],
    en: [
      "Goal of this week",
      "Edit this week's",
      "Previous goal",
      "Add new goal",
    ],
  },
  monthly: {
    ko: [
      "이번 달 목표",
      "이번 달 목표 수정",
      "지난 달 목표 조회",
      "새 목표 추가",
    ],
    en: [
      "Goal of this month",
      "Edit this month's",
      "Previous goal",
      "Add new goal",
    ],
  },
  yearly: {
    ko: ["올해 목표", "올해 목표 수정", "작년 목표 조회", "새 목표 추가"],
    en: [
      "Goal of this year",
      "Edit this year's",
      "Previous goal",
      "Add new goal",
    ],
  },
};

function SideMenu() {
  return (
    <aside>
      <ul>
        <li>
          <i />
          {}
        </li>
      </ul>
    </aside>
  );
}

export default SideMenu;
