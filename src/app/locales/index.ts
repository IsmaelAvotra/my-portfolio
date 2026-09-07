import { en } from './en'
import { fr } from './fr'

export type Lang = 'en' | 'fr'
export type Dict = typeof en

export const translations: Record<Lang, Dict> = { en, fr }
