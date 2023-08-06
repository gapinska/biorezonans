export const biorezonansItemName = 'BIOREZONANS';
export const offerItemName = 'OFERTA';
export const questionsItemName = 'FAQ';

export const OfferMenuItemNames = {
  biorezonans: biorezonansItemName,
  offer: offerItemName,
  questions: questionsItemName,
} as const;

export type OfferMenuItemName =
  | typeof biorezonansItemName
  | typeof offerItemName
  | typeof questionsItemName;

export const offerMenuItems = [
  { id: '1', category: 'biorezonans', name: OfferMenuItemNames.biorezonans },
  { id: '2', category: 'offer', name: OfferMenuItemNames.offer },
  { id: '3', category: 'questions', name: OfferMenuItemNames.questions },
];
