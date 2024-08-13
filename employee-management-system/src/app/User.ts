export interface LeaveDetail {
  id?: string;
  leaveType: 'Casual Leave' | 'Sick Leave';
  startDate: string;
  endDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
}
