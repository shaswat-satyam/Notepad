export type Note = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  isPinned: boolean;
  updatedAt: EpochTimeStamp;
  createdAt: EpochTimeStamp;
};
