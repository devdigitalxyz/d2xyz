import React from 'react';
import type { NextPage } from 'next';
import { SocialsView } from '../views';
import { APP } from '../cfg/app';

const SocialsPage: NextPage = () => {
  return (
    <SocialsView
      brandName={APP.brandName}
      twitter
      linkedin
      facebook
      instagram
      linkedinOverride='https://www.linkedin.com/company/landingwebnet'
    />
  );
};

export default SocialsPage;
