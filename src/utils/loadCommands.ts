/**
 * 加载社区命令数据
 */
import type { CollectionEntry } from 'astro:content'

export interface CommandCategory {
  name_zh: string
  name_en: string
  path: string
}

export interface Command {
  name_zh: string
  description_zh: string
  name_en: string
  description_en: string
  platform: string
  command: string
}

export interface CommandList {
  update_at: number
  list: Command[]
}

/**
 * 获取命令分类列表
 */
export async function getCommandCategories(): Promise<CommandCategory[]> {
  try {
    const response = await fetch(new URL('../content/data/official-type-list.json', import.meta.url))
    const data = await response.json()
    return data.list || []
  } catch (error) {
    console.error('Failed to load command categories:', error)
    return []
  }
}

/**
 * 获取指定分类的命令列表
 */
export async function getCommandsByCategory(categoryFile: string): Promise<Command[]> {
  try {
    const response = await fetch(new URL(`../content/data/${categoryFile}`, import.meta.url))
    const data: CommandList = await response.json()
    return data.list || []
  } catch (error) {
    console.error(`Failed to load commands from ${categoryFile}:`, error)
    return []
  }
}

/**
 * 获取所有命令（按分类分组）
 */
export async function getAllCommands() {
  const categories = await getCommandCategories()
  const commands = new Map<string, Command[]>()

  for (const category of categories) {
    const categoryCommands = await getCommandsByCategory(category.path)
    commands.set(category.path, categoryCommands)
  }

  return {
    categories,
    commands
  }
}

/**
 * 格式化平台图标
 */
export function getPlatformIcon(platform: string): string {
  switch (platform) {
    case 'linux':
      return '🐧'
    case 'macos':
      return '🍎'
    case 'windows':
      return '🪟'
    case 'all':
      return '💻'
    default:
      return '❓'
  }
}
