import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='about mt-8 px-4'>
      <h2 className='text-lg mb-8'>
        {' '}
        <span className='text-yellow text-xl font-semibold mr-4'>01.</span>About
        Me
      </h2>
      <div className='container flex flex-col gap-8 items-center  mb-16'>
        <div className='image'>
          <Image
            src='/about.png'
            alt='profile image'
            width={330}
            height={320}
            className='rounded-lg  border-[.5px] border-textcolor drop-shadow-image '
          />
        </div>
        <div className='text'>
          <p className='text-sm text-textcolor'>
            Hello! My name is{' '}
            <span className='text-yellow text-lg'> Ismael Avotra</span>, and I'm
            from Madagascar. Welcome to my Web and Mobile Developer Portfolio!
            Here you will find a showcase of my{' '}
            <span className='text-titlecolor'>skills</span>,{' '}
            <span className='text-red'>projects</span>, and passion for web
            development. As a budding web developer, I am excited to share my
            journey and demonstrate the value I can bring to your organization.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
