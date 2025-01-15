import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};
const FeatureList: FeatureItem[] = [
  {
    title: '记录方式',
    Svg: require('@site/static/img/highlighter.svg').default,
    description: (
      <>
        提供了多种记录方式，包括截图记录、插图记录、文字记录，甚至是 AI 对话也可以记录。
      </>
    ),
  },
  {
    title: '剪贴板助手',
    Svg: require('@site/static/img/clipboard-check.svg').default,
    description: (
      <>
        在对话窗口中，剪贴板助手将持续监听剪贴板内容，并询问你收否记录，支持文本和图片。
      </>
    ),
  },
  {
    title: 'AI 记录',
    Svg: require('@site/static/img/bot-message-square.svg').default,
    description: (
      <>
        AI 扮演记录小助手，支持 AI 对话、记录分析、记录整理成文功能。
      </>
    ),
  },
  {
    title: 'Markdown 编辑器',
    Svg: require('@site/static/img/square-m.svg').default,
    description: (
      <>
        具备快捷的工具栏、快捷的图床上传，支持 mermaid 绘图、katex 数学公式，多种主题选择。
      </>
    ),
  },
  {
    title: '本地离线存储',
    Svg: require('@site/static/img/unlink.svg').default,
    description: (
      <>
        本地离线存储，所有写作文件都以 Markdown 格式存储，方便备份、迁移、同步。
      </>
    ),
  },
  {
    title: 'AI 写作',
    Svg: require('@site/static/img/pencil-ruler.svg').default,
    description: (
      <>
        类似使用 copilot 辅助编写代码，支持续写、问答、翻译、优化等常用写作辅助功能。
      </>
    ),
  },
  {
    title: '同步',
    Svg: require('@site/static/img/cloud-upload.svg').default,
    description: (
      <>
        基于 Github 私有仓库实现同步功能，一键上传，支持回滚，保证数据安全。
      </>
    ),
  },
  {
    title: '图床管理',
    Svg: require('@site/static/img/image-up.svg').default,
    description: (
      <>
        与同步一致，基于 Github 私有仓库实现图床管理功能，支持图片上传、删除、管理等功能。
      </>
    ),
  },
  {
    title: '全局搜索',
    Svg: require('@site/static/img/search.svg').default,
    description: (
      <>
        超快的全局搜索功能，支持记录和写作文件同时搜索，并可以快速跳转到对应位置。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
