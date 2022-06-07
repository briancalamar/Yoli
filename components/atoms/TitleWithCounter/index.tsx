import { Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  primary?: string;
  secondary?: number | string;
  primarySize?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
  secondarySize?: 'h6' | 'h5' | 'h4' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button';
}

export const TitleWithCounter: FC<Props> = ({ primary, secondary, primarySize = 'h6', secondarySize = 'subtitle2' }) => {
  if (!primary) return null;

  return (
    <div className='title-with-counter'>
      <Typography variant={primarySize}>
        {primary}
      </Typography>
      <Typography className='title-with-counter__counter' variant={secondarySize}>
        {`(${secondary})`}
      </Typography>
    </div>
  );
};
