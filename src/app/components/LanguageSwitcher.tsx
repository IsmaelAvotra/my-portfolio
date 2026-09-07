'use client'
import { setLanguage } from '../actions/setLanguage'
import type { Lang } from '../locales'
import { useRouter } from 'next/navigation'

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter()

  const handleChange = async (newLang: Lang) => {
    await setLanguage(newLang)
    router.refresh()
  }

  return (
    <div className='relative flex items-center bg-textcolor/5 border border-textcolor/10 rounded-full p-[3px] select-none'>
      <div
        className={`absolute top-[3px] bottom-[3px] rounded-full bg-yellow transition-all duration-300 ease-in-out ${
          lang === 'fr'
            ? 'left-[calc(50%+1px)] right-[3px]'
            : 'left-[3px] right-[calc(50%+1px)]'
        }`}
      />
      <button
        onClick={() => handleChange('en')}
        className={`relative z-10 w-10 py-[5px] text-[12px] font-bold rounded-full transition-colors duration-300 ${
          lang === 'en' ? 'text-bgcolor' : 'text-textcolor/40 hover:text-textcolor/70'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleChange('fr')}
        className={`relative z-10 w-10 py-[5px] text-[12px] font-bold rounded-full transition-colors duration-300 ${
          lang === 'fr' ? 'text-bgcolor' : 'text-textcolor/40 hover:text-textcolor/70'
        }`}
      >
        FR
      </button>
    </div>
  )
}
