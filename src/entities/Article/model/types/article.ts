import { User } from 'entities/User';

/* виды сортировки */
export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

/* типы блоков */
export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

/* общий тип для блоков, который будет наслдеоваться в другие */
export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

/* блоки и их типы */
export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

/* один объединяющий блок */
export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

/* типы статей */
export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

/* для сетки отображения */
export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

/* тип статьи */
export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
