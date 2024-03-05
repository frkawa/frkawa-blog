'use client'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import TagCards from '@components/TagCards'

import authorIcon from '/public/author_icon.png'

const SideBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='rounded-3xl bg-my-card-blue p-6'>
        <section className='text-center'>
          <Image
            src={authorIcon}
            alt='author icon'
            width={100}
            height={100}
            priority={true}
            className='mx-auto mb-3'
          />
          <div className='mb-1'>AUTHOR: frkawa</div>
          <div className='mb-8 flex justify-center gap-1'>
            <Link
              href='https://github.com/frkawa'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} className='h-4' />
            </Link>
            <Link
              href='https://x.com/frkawa_'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faXTwitter} className='h-4' />
            </Link>
          </div>
        </section>
        <h3 className='mb-2 text-xl font-bold'>ARCHIVES</h3>
        <ul className='list-disc pl-4'>
          <li>2024年1月</li>
          <li>2023月12月</li>
          <li>2023年11月</li>
        </ul>
        <h3 className='mb-3 mt-7 text-xl font-bold'>TAGS</h3>
        <TagCards />
      </div>
    </motion.div>
  )
}

export default SideBar
