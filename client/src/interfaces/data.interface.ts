export interface ITrending {
  small: string;
  large: string;
}

export interface IRegular {
  small: string;
  medium: string;
  large: string;
}

export interface IThumbnail {
  regular: IRegular;
  trending?: ITrending;
}

export interface IData {
  title: string;
  thumbnail: IThumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}