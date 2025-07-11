// app/fonts.ts
import { Jost } from 'next/font/google';

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500', '600', '700']
});