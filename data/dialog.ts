export const speakerConfig = {
  Laurent: {
    emoji: '🦮',
    voice: 'cmn-TW-Standard-B',
    gender: 'MALE',
  },
  Cherif: {
    emoji: '🍵',
    voice: 'cmn-TW-Standard-A',
    gender: 'FEMALE',
  },
  Florent: {
    emoji: '🕶️',
    voice: 'cmn-TW-Standard-C',
    gender: 'MALE',
  },
  Marie: {
    emoji: '🍹',
    voice: 'cmn-TW-Standard-A',
    gender: 'FEMALE',
  },
}

type DialogLine = {
  speaker: keyof typeof speakerConfig
  sentences: string[]
}

export const dialog: DialogLine[] = [
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
