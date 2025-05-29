export type CourseProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: number;
  videos: Video[];
};

export type Video = {
  title: string;
  description: string;
  url: string;
  duration: number;
};

export type User = {
  uid: string;
  fullName: string | null;
  email: string | null;
  phone: string | null;
  subscriptions: Subscriptions[] | [];
  createdAt: string | null;
};

export type Subscriptions = {
  courseId: string | null;
  subscribedAt: string | null;
  subscribtionEnds: string | null;
};