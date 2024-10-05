export type IUser = {
  _id: string;
  name: string;
  email: string;
  profilePicture: string;
  status?: string;
  isDeleted?: boolean;
  isVerified?: boolean;
  userRole?: "user" | "admin";
  followers?: string[];
  following?: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TUserToken = {
  userId: string;
  userRole: string;
  iat?: number;
  exp?: number;
};

export type TUserProfile = {
  label: string;
  link: string;
};

export type TResponseCategory = {
  _id: string;
  cName: string;
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
  __v?: number;
};

export type TPostsResponse = {
  _id: string;
  title: string;
  content: string;
  postImg: string;
  authorId: IUser;
  category: TResponseCategory;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comments?: any[];
  createdAt?: string;
  updatedAt?: string;
  downvotes: number;
  isDeleted: boolean;
  isPremium: boolean;
  upvotes: number;
};
