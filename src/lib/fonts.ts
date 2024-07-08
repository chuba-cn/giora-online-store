import { Nunito_Sans, Nunito, Open_Sans } from "next/font/google";

export const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito-sans',
});

export const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
});

export const open_sans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
})