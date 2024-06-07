import type { DialogLine } from '~/types'

export const speakerConfig = {
  Laurent: {
    emoji: '🦮',
    voice: 'cmn-TW-Wavenet-B',
    gender: 'MALE',
  },
  Cherif: {
    emoji: '🍵',
    voice: 'cmn-TW-Wavenet-C',
    gender: 'MALE',
  },
  Florent: {
    emoji: '🕶️',
    voice: 'cmn-TW-Wavenet-C',
    gender: 'MALE',
  },
  Marie: {
    emoji: '🍹',
    voice: 'cmn-TW-Wavenet-A',
    gender: 'FEMALE',
  },
  Thi: {
    emoji: '🧧',
    voice: 'cmn-TW-Wavenet-A',
    gender: 'FEMALE',
  },
}

export const dialog1: DialogLine[] = [
  {
    speaker: 'Laurent',
    sentences: [
      '大家好，這是夜市。',
      '今天是旅行的最後一天，所以如果你們看到喜歡的東西就買下來吧。',
      '一個小時後，我會在這個會合點等大家。',
    ],
  },
  {
    speaker: 'Cherif',
    sentences: [
      '導遊，導遊！',
    ],
  },
  {
    speaker: 'Laurent',
    sentences: [
      '有沒有什麼你想買的？',
    ],
  },
  {
    speaker: 'Cherif',
    sentences: [
      '因為我喜歡抹茶，所以我想買抹茶的珍珠奶茶。',
    ],
  },
  {
    speaker: 'Laurent',
    sentences: [
      '我覺得這位先生可能賣抹茶珍珠奶茶。',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '先生，我要一件台灣的紀念品，因為明天我要回法國。',
    ],
  },
  {
    speaker: 'Laurent',
    sentences: [
      '你要什麼紀念品？',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '我要一件台灣的衣服或是清華大學的衣服，因為我今年在清華大學唸書。',
    ],
  },
  {
    speaker: 'Laurent',
    sentences: [
      '你學得很好！',
      '因為她賣衣服，所以你可以去找這位商人。',
    ],
  },
  {
    speaker: 'Marie',
    sentences: [
      '導遊 ! 我想賣烏龍茶。',
    ],
  },
  {
    speaker: 'Laurent',
    sentences: [
      '我想這位先生賣茶。',
    ],
  },
  {
    speaker: 'Marie',
    sentences: [
      '謝謝導遊！',
    ],
  },
]

export const dialog2: DialogLine[] = [
  {
    speaker: 'Thi',
    sentences: [
      '帥哥，你好。你要什麼？',
    ],
  },
  {
    speaker: 'Laurent',
    sentences: [
      '我要一件台灣的衣服，因為我今年在清華大學唸書。',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '帥哥，你要什麼？',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '我要一件台灣獲釋清華大學的衣服。',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '我有一件清華大學的t-shirt，怎麼樣？',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '很漂亮，我可以是穿一下嗎？',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '可以，可以。',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '我喜歡這件t-shirt，多少錢？',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '一千一百塊。',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '太貴了！請便宜一點。',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '一千一百塊，我在送給你一件t-shirt，好不好？',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '好，可是我要看一下t-shirt。',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '好啊！',
      '你喜歡這件t-shirt嗎？',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '我不喜歡！',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '沒關係。你喜歡這件t-shirt嗎？',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '很漂亮！可以！',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '太好了！',
    ],
  },
  {
    speaker: 'Florent',
    sentences: [
      '謝謝，再見！',
    ],
  },
  {
    speaker: 'Thi',
    sentences: [
      '給你抽獎！',
      '再見！',
    ],
  },
]
