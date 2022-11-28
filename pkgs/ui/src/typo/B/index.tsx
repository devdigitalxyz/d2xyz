import React, { ReactNode } from 'react';

export interface BProps {
  children?: ReactNode;
}

export const B = ({ children }: BProps) => {
  return <span style={{ fontWeight: 600 }}>{children}</span>;
};
