export function GoalsList({ goals }) {
  return goals.map((goal) => (
    <div key={goal.id} className="goal-item">
      <span>{goal.description ?? '---'}</span>
      <span>
        ${goal.current} / ${goal.target}
      </span>
    </div>
  ));
}
