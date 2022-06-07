import { Badge, Typography } from '@mui/material';
import { FC } from 'react';
import { TitleWithCounter } from '../../atoms/TitleWithCounter';
import { DetailedCardList } from '../../molecules';

interface Props {
  title?: string;
}

export const DetailedCardSection: FC<Props> = ({ title }) => {
  return (
    <section aria-label={title}>
      <header aria-label={`${title}-header`} className='card-section__header'>
        <TitleWithCounter primary={title} secondary={200} />
      </header>
      <DetailedCardList />
    </section>
  );
};
