export function RemindersList({ reminders }) {
  return reminders.map((reminder) => (
    <div key={reminder.id} className="reminder-item">
      <span>{reminder.description}</span>
      <span>Due: {reminder.dueDate}</span>
    </div>
  ));
}
