import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import { Footer } from '@/components/footer';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from '@/../public/assets/dashboard-dark.png';
import { Book, Settings, Wrench, FileText, PlusIcon } from 'lucide-react';
import { getLocalePath } from '@/lib/i18n';

const docNavItems: Record<
  string,
  {
    title: string;
    items: Array<{
      text: string;
      url: string;
      description: string;
      icon: React.ReactNode;
    }>;
  }
> = {
  en: {
    title: 'Documentation',
    items: [
      {
        text: 'Getting Started',
        url: '/en/docs',
        description: 'Learn how to deploy and configure New API.',
        icon: <Book />,
      },
      {
        text: 'Installation',
        url: '/en/docs/installation/docker-compose-installation',
        description: 'Various deployment methods and installation guides.',
        icon: <Settings />,
      },
      {
        text: 'API Reference',
        url: '/en/docs/api/chat',
        description: 'Complete API documentation and integration guide.',
        icon: <Wrench />,
      },
      {
        text: 'User Guide',
        url: '/en/docs/guide/home',
        description: 'Console features and usage instructions.',
        icon: <FileText />,
      },
      {
        text: 'AI Applications',
        url: '/en/docs/apps/cherry-studio',
        description: 'Integration guides for AI applications.',
        icon: <PlusIcon />,
      },
    ],
  },
  zh: {
    title: '文档',
    items: [
      {
        text: '快速开始',
        url: '/zh/docs',
        description: '学习如何部署和配置 New API。',
        icon: <Book />,
      },
      {
        text: '部署安装',
        url: '/zh/docs/installation/docker-compose-installation',
        description: '多种部署方式和安装指南。',
        icon: <Settings />,
      },
      {
        text: 'API 文档',
        url: '/zh/docs/api/chat',
        description: '完整的 API 文档和集成指南。',
        icon: <Wrench />,
      },
      {
        text: '使用指南',
        url: '/zh/docs/guide/home',
        description: '控制台功能和使用说明。',
        icon: <FileText />,
      },
      {
        text: 'AI 应用',
        url: '/zh/docs/apps/cherry-studio',
        description: 'AI 应用集成指南。',
        icon: <PlusIcon />,
      },
    ],
  },
  ja: {
    title: 'ドキュメント',
    items: [
      {
        text: 'はじめに',
        url: '/ja/docs',
        description: 'New API のデプロイと設定方法を学ぶ。',
        icon: <Book />,
      },
      {
        text: 'インストール',
        url: '/ja/docs/installation/docker-compose-installation',
        description: '様々なデプロイ方法とインストールガイド。',
        icon: <Settings />,
      },
      {
        text: 'API リファレンス',
        url: '/ja/docs/api/chat',
        description: '完全な API ドキュメントと統合ガイド。',
        icon: <Wrench />,
      },
      {
        text: 'ユーザーガイド',
        url: '/ja/docs/guide/home',
        description: 'コンソール機能と使用方法。',
        icon: <FileText />,
      },
      {
        text: 'AI アプリケーション',
        url: '/ja/docs/apps/cherry-studio',
        description: 'AI アプリケーション統合ガイド。',
        icon: <PlusIcon />,
      },
    ],
  },
};

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const base = baseOptions(lang);
  const docNav = docNavItems[lang] || docNavItems.en;
  const docsUrl = getLocalePath(lang, 'docs');

  return (
    <div className="flex min-h-screen flex-col">
      <HomeLayout
        {...base}
        links={[
          {
            type: 'menu',
            on: 'menu',
            text: docNav.title,
            items: [
              {
                text: docNav.items[0].text,
                url: docNav.items[0].url,
                icon: docNav.items[0].icon,
              },
              {
                text: docNav.items[1].text,
                url: docNav.items[1].url,
                icon: docNav.items[1].icon,
              },
            ],
          },
          {
            type: 'custom',
            on: 'nav',
            children: (
              <NavbarMenu>
                <NavbarMenuTrigger>
                  <Link href={docsUrl}>{docNav.title}</Link>
                </NavbarMenuTrigger>
                <NavbarMenuContent className="text-[15px]">
                  <NavbarMenuLink href={docsUrl} className="md:row-span-2">
                    <div className="-mx-3 -mt-3">
                      <Image
                        src={Preview}
                        alt="Preview"
                        className="rounded-t-lg object-cover"
                        style={{
                          maskImage:
                            'linear-gradient(to bottom,white 60%,transparent)',
                        }}
                      />
                    </div>
                    <p className="font-medium">{docNav.items[0].text}</p>
                    <p className="text-fd-muted-foreground text-sm">
                      {docNav.items[0].description}
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href={docNav.items[1].url}
                    className="lg:col-start-2"
                  >
                    <Settings className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">{docNav.items[1].text}</p>
                    <p className="text-fd-muted-foreground text-sm">
                      {docNav.items[1].description}
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href={docNav.items[2].url}
                    className="lg:col-start-2"
                  >
                    <Wrench className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">{docNav.items[2].text}</p>
                    <p className="text-fd-muted-foreground text-sm">
                      {docNav.items[2].description}
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href={docNav.items[3].url}
                    className="lg:col-start-3 lg:row-start-1"
                  >
                    <FileText className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">{docNav.items[3].text}</p>
                    <p className="text-fd-muted-foreground text-sm">
                      {docNav.items[3].description}
                    </p>
                  </NavbarMenuLink>

                  <NavbarMenuLink
                    href={docNav.items[4].url}
                    className="lg:col-start-3 lg:row-start-2"
                  >
                    <PlusIcon className="bg-fd-primary text-fd-primary-foreground mb-2 rounded-md p-1" />
                    <p className="font-medium">{docNav.items[4].text}</p>
                    <p className="text-fd-muted-foreground text-sm">
                      {docNav.items[4].description}
                    </p>
                  </NavbarMenuLink>
                </NavbarMenuContent>
              </NavbarMenu>
            ),
          },
          ...linkItems,
        ]}
        className="flex-1 dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
      >
        {children}
      </HomeLayout>
      <Footer lang={lang} />
    </div>
  );
}
