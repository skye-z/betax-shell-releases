#!/usr/bin/env node

/**
 * 复制命令数据文件到 data 目录
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceDir = __dirname
const targetDir = path.join(__dirname, 'src', 'content', 'data')

// 确保 target 目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// 复制 official-type-list.json
const typeListFile = path.join(sourceDir, 'official-type-list.json')
if (fs.existsSync(typeListFile)) {
  const targetPath = path.join(targetDir, 'official-type-list.json')
  fs.writeFileSync(targetPath, fs.readFileSync(typeListFile))
  console.log('✅ Copied official-type-list.json')
}

// 复制所有 community-*.json 文件
const files = fs.readdirSync(sourceDir)
const communityFiles = files.filter(f => f.startsWith('community-') && f.endsWith('.json'))

communityFiles.forEach(file => {
  const sourcePath = path.join(sourceDir, file)
  const targetPath = path.join(targetDir, file)
  fs.writeFileSync(targetPath, fs.readFileSync(sourcePath))
  console.log(`✅ Copied ${file}`)
})

console.log(`\n🎉 Successfully copied ${communityFiles.length + 1} data files!`)
