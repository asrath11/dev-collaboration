import React from 'react';

export interface FileNodeType {
  id: string;
  name: string;
  isFolder?: boolean;
  isFile?: boolean;
  children?: FileNodeType[];
  content?: string;
}

export interface ContextMenuType {
  x: number;
  y: number;
  item: string | null;
}

export type TestimonialCardProps = {
  name: string;
  role: string;
  content: string;
  avatar: string;
};

export type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
