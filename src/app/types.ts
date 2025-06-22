import { DocumentData } from "firebase/firestore";

export type CourseProps = {
  id: string;
  title: string;
  description: string;
  imagesUrl: Array<string>;
  price: number;
  priceId: string;
  url: string;
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

export interface StripeSubscription extends DocumentData {
  id: string;
  product?: {
    id: string;
  };
  [key: string]: unknown;
}

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