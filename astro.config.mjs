import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeNova from 'starlight-theme-nova'

export default defineConfig({
  server: {
    port: 4321
  },
  integrations: [
    starlight({
      plugins: [
        starlightThemeNova()
      ],
      title: 'BetaX Shell',
      description: '现代化的SSH终端管理工具',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN'
        },
        en: {
          label: 'English',
          lang: 'en-US'
        }
      },
      defaultLocale: 'root',
      lastUpdated: true,
      editLink: {
        url: false
      },
      sidebar: [
        {
          label: '开始使用',
          items: [
            { label: '项目介绍', link: '/intro' },
            { label: '下载安装', link: '/install' },
            { label: '快速上手', link: '/quick-start' }
          ]
        },
        {
          label: '用户指南',
          items: [
            { label: '主机管理', link: '/user-guide/hosts' },
            { label: '终端使用', link: '/user-guide/terminal' },
            { label: '文件传输', link: '/user-guide/sftp' },
            { label: '密钥管理', link: '/user-guide/keys' },
            { label: '设置说明', link: '/user-guide/settings' }
          ]
        },
        {
          label: '功能特性',
          items: [
            { label: '系统托盘', link: '/features/system-tray' },
            { label: '自动更新', link: '/features/auto-update' },
            { label: '深度链接', link: '/features/deep-link' },
            { label: '国际化', link: '/features/i18n' }
          ]
        },
        {
          label: '社区命令',
          items: [
            { label: '命令市场', link: '/community/overview' },
            { label: '使用命令', link: '/community/using' },
            { label: '贡献命令', link: '/community/contributing' }
          ]
        },
        {
          label: '帮助',
          items: [
            { label: '常见问题', link: '/faq' },
            { label: '故障排除', link: '/troubleshooting' }
          ]
        }
      ],
      social: [
        {
          icon: 'github',
          href: 'https://github.com/skye-z/betax-shell-releases',
          label: 'GitHub'
        }
      ]
    })
  ],
  output: 'static'
})
