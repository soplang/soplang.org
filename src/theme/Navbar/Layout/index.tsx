import React, {type ReactNode} from 'react';
import Layout from '@theme-original/Navbar/Layout';
import type LayoutType from '@theme/Navbar/Layout';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <>
      <Layout {...props} />
    </>
  );
}
