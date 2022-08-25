export type SocialType = 'insta' | 'vc';

export interface SocialProps {
  type: SocialType;
  fn: (type: SocialType) => void;
}
