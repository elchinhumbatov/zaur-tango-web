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

export type UserData = {
  uid: string;
  fullName: string | null;
  email: string | null;
  phone: string | null;
  subscriptions: Subscriptions | null;
  createdAt: string | null;
};

export type Subscriptions = {
  beginner?: BeginnerSubscription;
  intermediate?: IntermediateSubscription;
  advance?: AdvanceSubscription;
};

type BeginnerSubscription = {
  title: string;
  subscribeAt: string;
  expiresAt: string;
};
type IntermediateSubscription = {
  title: string;
  subscribeAt: string;
  expiresAt: string;
};
type AdvanceSubscription = {
  title: string;
  subscribeAt: string;
  expiresAt: string;
};