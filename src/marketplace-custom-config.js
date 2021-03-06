/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'dog',
    label: 'Dogs',
    tip: 'breed',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
        tip: 'Akitas, Bernese Mountain Dog, Bullmastiff etc...',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
        tip: 'German Shepherd, Retriever, Siberian Husky, Weimaraner etc...'
      },
      {
        key: 'medium',
        label: 'Medium (15-41 lbs)',
        tip: 'Whippet, Staffordshire Bull Terrier, Spaniel, Border Collie etc...',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
        tip: 'Pomeranian, Pug, Yorkshire Terrier, Papillion etc...',
      },
    ],
  },
  {
    key: 'reptiles',
    label: 'Reptiles',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },
  {
    key: 'farm',
    label: 'Farm Animals',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },
  {
    key: 'cat',
    label: 'Cats',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },

  {
    key: 'rabbit',
    label: 'Rabbits',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },

  {
    key: 'bird',
    label: 'Pet Birds',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },
  {
    key: 'fish',
    label: 'Aquarium Fish',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },
  {
    key: 'horse',
    label: 'Horses',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },
  {
    key: 'other',
    label: 'Other (Please state)',
    weight: [
      {
        key: 'giant',
        label: 'Giant (101+ lbs)',
      },
      {
        key: 'large',
        label: 'Large (41-100 lbs)',
      },
      {
        key: 'medium',
        label: 'Medium (101+ lbs)',
      },
      {
        key: 'small',
        label: 'Small (0-15 lbs)',
      },
    ],
  },
];

export const categories = [
  { key: '0', label: 'Pet Owners' },
  { key: '1', label: 'Pet Sitter' },
  { key: '2', label: 'Pet Services' },
];

export const equipments = [
  { key: 'wifi', label: 'Wifi' },
  { key: 'garden', label: 'Garden' },
  { key: 'wheelchair', label: 'Wheelchair Access' },
  { key: 'parking', label: 'Parking' },
  { key: 'transport', label: 'Transport Links' },
  { key: 'cable', label: 'Cable TV' },
  { key: 'elevator', label: 'Elevator in Building' },
  { key: 'aircon', label: 'Air Con' },
  { key: 'suitable', label: 'Suitable for families' },
  { key: 'laundry', label: 'Laundry Facilities' },
];
export const locations = [
  { key: 'sea', label: 'By the Sea' },
  { key: 'mountain', label: 'Mountain Views' },
  { key: 'city', label: 'City Pad' },
  { key: 'suburbs', label: 'Suburbs' },
  { key: 'rural', label: 'Rural Location' },
];
export const info = [
  { key: 'travel', label: 'Willing to travel	' },
  { key: 'admin', label: 'Can Administer Meds' },
  { key: 'children', label: 'Have children under 18' },
  { key: 'car', label: 'Car Owner' },
];

export const service = [
  { key: 'walking', label: 'Dog Walking' },
  { key: 'surgeon', label: 'Veterinary Surgeons' },
  { key: 'groomer', label: 'Pet Groomer' },
  { key: 'store', label: 'Pet Store' },
  { key: 'food', label: 'Pet Food' },
  { key: 'tech', label: 'Pet Tech' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'photo', label: 'Photography' },
];

export const size = [
  {
    key: 'giant',
    label: 'giant (101+ lbs)',
  },
  {
    key: 'large',
    label: 'large (41-100 lbs)',
  },
  {
    key: 'medium',
    label: 'medium (101+ lbs)',
  },
  {
    key: 'small',
    label: 'small (0-15 lbs)',
  },
];

export const rate = [
  { key: 'h', label: 'Per hour' },
  { key: 'u', label: 'Per unit' },
  { key: 'd', label: 'Per day' },
];

export const preferredLocations = [
  { key: 'italy', label: 'Italy' },
  { key: 'germany', label: 'Germany' },
  { key: 'china', label: 'China' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 100,
  step: 5,
};

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const timePickerConfig = {
  min: 0,
  max: 23,
  step: 1,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
