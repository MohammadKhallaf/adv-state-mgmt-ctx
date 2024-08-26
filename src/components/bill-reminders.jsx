import { useState } from 'react';
import { RemindersList } from './reminders-list';

export default function BillReminders({ reminders, addReminder }) {
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddReminder = (e) => {
    e.preventDefault();
    addReminder({ description, dueDate });
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="paper">
      <h3>Bill Reminders</h3>
      <form className="form" onSubmit={handleAddReminder}>
        <input
          className="input"
          type="text"
          placeholder="Reminder Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="button" type="submit">
          Add Reminder
        </button>
      </form>
      <RemindersList reminders={reminders} />
    </div>
  );
}
