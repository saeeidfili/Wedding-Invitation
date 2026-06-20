// ============================================================
// Wedding data — single source of truth for the invitation
// Edit these values to customize the invitation.
// ============================================================

export const weddingData = {
  bride: 'نگار',
  groom: 'آرین',
  subtitle: 'دو قلب، یک سرنوشت',
  heroTagline: 'با افتخار دعوت می‌کنیم',
  weddingDate: '2026-09-18T18:00:00', // ISO — countdown target
  weddingDateLabel: '۱۸ سپتامبر ۲۰۲۶',
  venueName: 'باغ تاریخی فین',
  venueAddress: 'کاشان، خیابان امیرکبیر، باغ فین',
  venueDescription:
    'در قلب باغی تاریخی، زیر سایه درختان کهن و کنار چشمه‌های جاری، زندگی مشترکمان را آغاز می‌کنیم. حضور شما گرامی‌ترین هدیه ماست.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fin+Garden+Kashan',
  neshanUrl: 'https://neshan.org/maps/places/search?q=باغ+فین+کاشان',
  footerMessage: 'بی‌صبرانه منتظر دیدار شما هستیم',
}

// 17 timeline photos — mix of couple + floral images from image-search.
// Replace these URLs with your own wedding photos.
export type TimelinePhoto = {
  id: number
  src: string
  caption: string
  milestone?: string
}

export const timelinePhotos: TimelinePhoto[] = [
  {
    id: 1,
    src: 'https://sfile.chatglm.cn/images-ppt/45dfb2e70e5b.jpg',
    caption: 'اولین سلام',
    milestone: 'آشنایی',
  },
  {
    id: 2,
    src: 'https://sfile.chatglm.cn/images-ppt/c806942cf5f0.jpg',
    caption: 'باغچهٔ دل',
  },
  {
    id: 3,
    src: 'https://sfile.chatglm.cn/images-ppt/5a3c4d27dac4.jpg',
    caption: 'لبخند تو',
  },
  {
    id: 4,
    src: 'https://sfile.chatglm.cn/images-ppt/c60084b5d58f.jpg',
    caption: 'گل‌های بهاری',
    milestone: 'خواستگاری',
  },
  {
    id: 5,
    src: 'https://sfile.chatglm.cn/images-ppt/60bb3009b59d.jpg',
    caption: 'هم‌سفر',
  },
  {
    id: 6,
    src: 'https://sfile.chatglm.cn/images-ppt/46506b73d985.jpg',
    caption: 'شکوفه‌ها',
  },
  {
    id: 7,
    src: 'https://sfile.chatglm.cn/images-ppt/cab45a44cbd7.png',
    caption: 'قول همدمی',
    milestone: 'عقد',
  },
  {
    id: 8,
    src: 'https://sfile.chatglm.cn/images-ppt/e419505537a6.jpg',
    caption: 'چشم‌انداز',
  },
  {
    id: 9,
    src: 'https://sfile.chatglm.cn/images-ppt/fde9381bec83.jpg',
    caption: 'آغوش گرم',
  },
  {
    id: 10,
    src: 'https://sfile.chatglm.cn/images-ppt/c90432368672.jpg',
    caption: 'شکوفه‌های عروس',
  },
  {
    id: 11,
    src: 'https://sfile.chatglm.cn/images-ppt/aa0620f50d79.jpg',
    caption: 'خانهٔ ما',
    milestone: 'شروع زندگی مشترک',
  },
  {
    id: 12,
    src: 'https://sfile.chatglm.cn/images-ppt/ab31b9d577ac.jpg',
    caption: 'گلدانی از عشق',
  },
  {
    id: 13,
    src: 'https://sfile.chatglm.cn/images-ppt/b0c12290af7a.jpg',
    caption: 'صبحِ نور',
  },
  {
    id: 14,
    src: 'https://sfile.chatglm.cn/images-ppt/a064e8e1e372.jpg',
    caption: 'تاج گل عروس',
  },
  {
    id: 15,
    src: 'https://sfile.chatglm.cn/images-ppt/e45e3916f743.jpg',
    caption: 'آرامش کنار تو',
    milestone: 'جشن عروسی',
  },
  {
    id: 16,
    src: 'https://sfile.chatglm.cn/images-ppt/c92116156b48.jpg',
    caption: 'دست‌در‌دست',
  },
  {
    id: 17,
    src: 'https://sfile.chatglm.cn/images-ppt/0dc33d842bcd.jpg',
    caption: 'پایانِ یک داستان، آغازِ داستانی زیبا',
  },
]
