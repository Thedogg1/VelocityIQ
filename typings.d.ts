export type Base = {
  publishedAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

export interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

export interface Reference {
  _ref: string;
  _type: 'reference';
}

export interface Image {
  _type: 'image';
  asset: Reference;
  alt?: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Category extends Base {
  title: string;
  description?: string;
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface Post extends Base {
  authorName: string;
  body: Block[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  categories?: Category[];
  comments?: Comment[];
}

declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | number[];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: { scale?: number; useCORS?: boolean; logging?: boolean };
    jsPDF?: { unit?: string; format?: string; orientation?: string };
    pagebreak?: { mode?: string | string[] };
  }

  interface Html2PdfWorker {
    set(options: Html2PdfOptions): Html2PdfWorker;
    from(element: HTMLElement): Html2PdfWorker;
    save(): Promise<void>;
  }

  function html2pdf(): Html2PdfWorker;
  export default html2pdf;
}
