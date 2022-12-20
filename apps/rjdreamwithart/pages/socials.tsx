import React from 'react';
import type { NextPage } from 'next';
import { SocialsView } from '../views';
import { APP } from '../cfg/app';

const SocialsPage: NextPage = () => {
  return (
    <SocialsView
      brandName={APP.brandName}
      twitter
      instagram
      facebook
      pinterest
      linkedin
      linkedinOverride='https://www.linkedin.com/company/rjdreamwithart'
    />
  );
};

export default SocialsPage;
