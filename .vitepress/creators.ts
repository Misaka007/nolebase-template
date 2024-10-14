export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'Misaka007',
    avatar: '',
    username: 'nekomeowww',
    title: 'Wisdom Workshop 原始创作者',
    desc: '开发者，专注于嵌入式驱动、Linux驱动开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Misaka007' },
    ],
    nameAliases: ['nekomeowww', '绚香猫', '絢香猫', 'Neko Ayaka', 'Ayaka Neko'],
    emailAliases: ['neko@ayaka.moe'],
  },
  {
    name: 'Misaka007',
    avatar: '',
    username: 'LittleSound',
    title: 'Wisdom Workshop 原始创作者',
    desc: '开源开发者，专注于ros，以及ros相关工具库和工具链开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Misaka007' },
    ],
    nameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
    emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
