// ============================================================
// Wedding data — single source of truth for the invitation
// Edit these values to customize the invitation.
// ============================================================

export const weddingData = {
  bride: 'مریم',
  groom: 'سعید',
  subtitle: 'دو قلب، یک سرنوشت',
  heroTagline: 'با افتخار دعوت می‌کنیم',
  weddingDate: '2026-08-15T18:00:00', // ISO — countdown target
  weddingDateLabel: '۲۴ مرداد ۱۴۰۵',
  jalaliDate: { day: '24', month: 'MORDAD', year: '1405' },
  schedule: [
    { time: '۶:۰۰', label: 'مراسم عقد' },
    { time: '۷:۰۰', label: 'پذیرایی' },
    { time: '۹:۰۰', label: 'شام' },
  ],
  venueName: 'تالار عرفان',
  venueAddress: 'تهرانپارسُ خیابان جشنواره میدان اشراق',
  venueDescription:
    '',
  googleMapsUrl: 'https://www.google.com/maps/place/talare+erfan/@35.7321307,51.546145,17z/data=!3m1!4b1!4m6!3m5!1s0x3f8e1d17b0dfd4b1:0x2b3d61b94cb9259a!8m2!3d35.7321307!4d51.546145!16s%2Fg%2F1pv1y5x30?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D',
  neshanUrl: 'https://nshn.ir/_bv_QrWxzv8G',
  wazeUrl:
    'https://ul.waze.com/ul?ll=35.73172534%2C51.54598475&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
  parking: {
    note: 'پارکینگ دقیقاً در مقابل تالار قرار دارد.',
    mapSrc:
      'https://neshan.org/maps/iframe/places/_bv_vdexz7a_#c35.732-51.549-16z-0p/35.732432193381584/51.545614081792365',
  },
  footerMessage: 'بی‌صبرانه منتظر دیدار شما هستیم',
  dressCode: {
    heading: 'حال‌وهوای پوشش',
    formal: 'رسمی',
    mixed: 'مراسم مختلط است',
  },
  declineNotice: {
    bridePhone: '09122495459', // ← bride's family phone
    groomPhone: '09125991435', // ← groom's family phone
    title: 'شرکت در مراسم',
    message:
      'اگر افتحار میزبانی شما را نداشتیم به ما اطلاع دهید.',
  },
  heroImage: {
    src: '/hero/2.png',
    scale: 1.3,
    position: { x: 50, y: 0 },
  },
}

// Timeline photos — served from LOCAL files in /public/timeline/.
// Put your photos there named {id}.jpg (1.jpg … 17.jpg). To use other
// names/extensions, edit each `src` below.
export type TimelinePhoto = {
  id: number
  src: string
  caption: string
  milestone?: string
}

export const timelinePhotos: TimelinePhoto[] = [
  {
    id: 1,
    src: '/timeline/1.jpeg',
    caption: 'اولین سلام',
    milestone: 'آشنایی',
  },
  {
    id: 3,
    src: '/timeline/3.jpeg',
    caption: 'لبخند تو',
  },
  {
    id: 5,
    src: '/timeline/5.jpeg',
    caption: 'هم‌سفر',
  },
  {
    id: 6,
    src: '/timeline/6.jpeg',
    caption: 'شکوفه‌ها',
  },
  {
    id: 7,
    src: '/timeline/7.jpeg',
    caption: 'قول همدمی',
  },
  {
    id: 2,
    src: '/timeline/2.jpeg',
    caption: 'باغچهٔ دل',
  },
  {
    id: 8,
    src: '/timeline/8.jpeg',
    caption: 'چشم‌انداز',
  },
  {
    id: 9,
    src: '/timeline/9.jpeg',
    caption: 'شام نمکی!',
  },
  {
    id: 10,
    src: '/timeline/10.jpeg',
    caption: 'آغوش گرم',
    milestone:"بله برون"
  },
  {
    id: 11,
    src: '/timeline/12.jpeg',
    caption: 'بالاخره «بله» گفت... 💍🤍',
  },
  {
    id: 12,
    src: '/timeline/11.jpeg',
    caption: '☀️Sunshine',
  }
  
]

// ============================================================
// Texts — every Persian string on the site, each with a font
// ('nozha' | 'pinar') and a size (px). Edit content / font / size here.
// Rendered via the <T id="..." /> helper (see T.tsx).
// ============================================================

export type PersianFont = 'nozha' | 'pinar' | 'nastaliq'
export type TextEntry = { text: string; font: PersianFont; size: number }

export const texts = {
  // Hero
  'hero.tagline': { text: weddingData.heroTagline, font: 'pinar', size: 16 },
  'hero.bride': { text: weddingData.bride, font: 'nastaliq', size: 80 },
  'hero.groom': { text: weddingData.groom, font: 'nastaliq', size: 80 },

  // Timeline badge
  'badge.title': { text: 'برنامه مراسم عقد', font: 'nozha', size: 20 },

  // Timeline
  'timeline.heading': { text: 'داستانِ ما', font: 'nozha', size: 48 },
  'timeline.subtitle': {
    text: 'هفده قاب از خاطراتی که ما را به این روز رساند — یکی‌یکی ورق بزنید',
    font: 'pinar',
    size: 18,
  },

  // Countdown
  'countdown.heading': { text: 'روزِ شروعِ ما', font: 'nozha', size: 48 },
  'countdown.date': { text: weddingData.weddingDateLabel, font: 'pinar', size: 18 },
  'countdown.day': { text: 'روز', font: 'pinar', size: 16 },
  'countdown.hour': { text: 'ساعت', font: 'pinar', size: 16 },
  'countdown.minute': { text: 'دقیقه', font: 'pinar', size: 16 },
  'countdown.second': { text: 'ثانیه', font: 'pinar', size: 16 },

  // Venue
  'venue.heading': { text: 'محلِ برگزاری', font: 'nozha', size: 48 },
  'venue.name': { text: weddingData.venueName, font: 'nozha', size: 24 },
  'venue.address': { text: weddingData.venueAddress, font: 'pinar', size: 18 },
  'venue.description': { text: weddingData.venueDescription, font: 'pinar', size: 16 },
  'venue.btnGoogle': { text: 'گوگل مپ', font: 'pinar', size: 18 },
  'venue.btnNeshan': { text: 'نشان', font: 'pinar', size: 18 },
  'venue.btnWaze': { text: 'وِیز', font: 'pinar', size: 18 },
  'venue.parkingLabel': { text: 'پارکینگ', font: 'nozha', size: 14 },
  'venue.parkingNote': { text: weddingData.parking.note, font: 'pinar', size: 18 },
  'venue.closing': { text: 'منتظر دیدارتان هستیم', font: 'pinar', size: 14 },

  // Dress code
  'dress.heading': { text: weddingData.dressCode.heading, font: 'nozha', size: 48 },
  'dress.formal': { text: weddingData.dressCode.formal, font: 'nozha', size: 30 },
  'dress.mixed': { text: weddingData.dressCode.mixed, font: 'pinar', size: 18 },

  // Gallery
  'gallery.heading': { text: 'گالریِ خاطرات', font: 'nozha', size: 48 },
  'gallery.subtitle': { text: 'بکشید تا ببینید', font: 'pinar', size: 18 },

  // Footer
  'footer.message': { text: weddingData.footerMessage, font: 'nozha', size: 36 },
  'footer.thanks': {
    text: 'حضور شما گرامی‌ترین هدیهٔ این روز ماست',
    font: 'pinar',
    size: 18,
  },
  'footer.bride': { text: weddingData.bride, font: 'nozha', size: 24 },
  'footer.groom': { text: weddingData.groom, font: 'nozha', size: 24 },
  'footer.date': { text: weddingData.weddingDateLabel, font: 'pinar', size: 14 },
  'footer.made': {
    text: `ساخته‌شده با عشق · ${new Date().getFullYear()}`,
    font: 'pinar',
    size: 12,
  },

  // Decline popup
  'decline.title': { text: weddingData.declineNotice.title, font: 'nozha', size: 24 },
  'decline.message': { text: weddingData.declineNotice.message, font: 'pinar', size: 18 },
  'decline.brideLabel': { text: 'خانواده عروس', font: 'pinar', size: 14 },
  'decline.groomLabel': { text: 'خانواده داماد', font: 'pinar', size: 14 },
  'decline.call': { text: 'تماس', font: 'pinar', size: 18 },
  'decline.dismiss': { text: 'متوجه شدم', font: 'pinar', size: 14 },
  'decline.neverShow': { text: 'دیگر نمایش نده', font: 'pinar', size: 14 },
} satisfies Record<string, TextEntry>

export type TextId = keyof typeof texts

// Font + size for list-style text (schedule items, timeline captions/milestones).
export const listText = {
  'schedule.time': { font: 'pinar' as const, size: 18 },
  'schedule.label': { font: 'pinar' as const, size: 18 },
  'timeline.caption': { font: 'pinar' as const, size: 14 },
  'timeline.milestone': { font: 'nozha' as const, size: 28 },
}
