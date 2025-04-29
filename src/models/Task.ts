export interface Task {
  id: string;
  userId: string;
  text: string;
  createdAt: Date;
  completed: boolean;
}
